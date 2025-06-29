/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
import camelcase from 'camelcase';
import { load } from 'cheerio';
import { ensureDirSync, existsSync, readFileSync, readdirSync, writeFileSync } from 'fs-extra';
import path, { join } from 'path';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import uppercamelcase from 'uppercamelcase';
// Main Loop
async function run() {
    const skipExisting = process.argv.length > 2 && process.argv[2] === '--skip-existing';
    const srcDir = join(__dirname, '..');
    const assetsDir = join(srcDir, 'assets');
    const svgDirPairs = [
        {
            input: join(assetsDir, 'icons'),
            output: join(srcDir, 'components', 'icons'),
        },
        {
            input: join(assetsDir, 'logos', 'svg'),
            output: join(srcDir, 'components', 'logos'),
        },
    ];
    for (const dirPair of svgDirPairs) {
        await createSVGComponents(dirPair, skipExisting);
    }
}
// Logic Functions
async function createSVGComponents(dirs, skipExisting) {
    // Ensure output directory exists
    ensureDirSync(dirs.output);
    let indexFile = ``;
    const fileNames = readdirSync(dirs.input).filter((name) => name.endsWith('.svg'));
    for (const fileName of fileNames) {
        const className = generateClassName(fileName);
        const inputPath = join(dirs.input, fileName);
        const outputPath = path.join(dirs.output, `${className}.tsx`);
        // Add to index file even if it exists
        indexFile += `\nexport * from './${className}'`;
        if (skipExisting && existsSync(outputPath)) {
            continue;
        }
        // Generate and write file
        const svg = readFileSync(inputPath, 'utf-8');
        const element = await generateSVGComponent(svg, fileName);
        if (element) {
            console.log(`🦄 ${fileName}`);
            writeFileSync(outputPath, element, 'utf-8');
        }
    }
    // Format and write index file
    console.log('Writing index file...');
    const formattedIndex = await prettierFormat(indexFile);
    writeFileSync(join(dirs.output, 'exported.ts'), formattedIndex, 'utf-8');
}
async function generateSVGComponent(svg, fileName) {
    try {
        const element = generateSVGComponentString(svg, fileName);
        return await prettierFormat(element);
    }
    catch (err) {
        console.log(`Error converting icon: ${fileName}: ${err.message}`);
        return undefined;
    }
}
// Core SVG File Generation
function generateSVGComponentString(svg, fileName) {
    const $ = load(svg, {
        xmlMode: true,
    });
    const className = generateClassName(fileName);
    // Because CSS does not exist on Native platforms
    // We need to duplicate the styles applied to the
    // SVG to its children
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const svgAttribs = $('svg')[0].attribs;
    delete svgAttribs.xmlns;
    const attribsOfInterest = {};
    Object.keys(svgAttribs).forEach((key) => {
        if (!['height', 'width', 'viewBox', 'fill', 'stroke-width', 'stroke-linecap', 'stroke-linejoin'].includes(key)) {
            attribsOfInterest[key] = svgAttribs[key];
        }
    });
    $('*').each((_, el) => {
        Object.keys(el.attribs).forEach((x) => {
            if (x.includes('-')) {
                $(el).attr(camelcase(x), el.attribs[x]).removeAttr(x);
            }
            if (x === 'stroke') {
                $(el).attr(x, 'currentColor');
            }
        });
        // For every element that is NOT svg ...
        if (el.name !== 'svg') {
            Object.keys(attribsOfInterest).forEach((key) => {
                $(el).attr(camelcase(key), attribsOfInterest[key]);
            });
        }
        if (el.name === 'svg') {
            $(el).attr('otherProps', '...');
        }
    });
    const parsedSvgToReact = $('svg')
        .toString()
        .replace(/ class=\"[^\"]+\"/g, '')
        .replace(/ version=\"[^\"]+\"/g, '')
        .replace(/width="[0-9]+"/, '')
        .replace(/height="[0-9]+"/, '')
        .replace('<svg', '<Svg')
        .replace('</svg', '</Svg')
        .replace(new RegExp('<circle', 'g'), '<_Circle')
        .replace(new RegExp('</circle', 'g'), '</_Circle')
        .replace(new RegExp('<ellipse', 'g'), '<Ellipse')
        .replace(new RegExp('</ellipse', 'g'), '</Ellipse')
        .replace(new RegExp('<g', 'g'), '<G')
        .replace(new RegExp('</g', 'g'), '</G')
        .replace(new RegExp('<linear-gradient', 'g'), '<LinearGradient')
        .replace(new RegExp('</linear-gradient', 'g'), '</LinearGradient')
        .replace(new RegExp('<radial-gradient', 'g'), '<RadialGradient')
        .replace(new RegExp('</radial-gradient', 'g'), '</RadialGradient')
        .replace(new RegExp('<path', 'g'), '<Path')
        .replace(new RegExp('</path', 'g'), '</Path')
        .replace(new RegExp('<line', 'g'), '<Line')
        .replace(new RegExp('</line', 'g'), '</Line')
        .replace(new RegExp('<polygon', 'g'), '<Polygon')
        .replace(new RegExp('</polygon', 'g'), '</Polygon')
        .replace(new RegExp('<polyline', 'g'), '<Polyline')
        .replace(new RegExp('</polyline', 'g'), '</Polyline')
        .replace(new RegExp('<rect', 'g'), '<Rect')
        .replace(new RegExp('</rect', 'g'), '</Rect')
        .replace(new RegExp('<symbol', 'g'), '<Symbol')
        .replace(new RegExp('</symbol', 'g'), '</Symbol')
        .replace(new RegExp('<text', 'g'), '<_Text')
        .replace(new RegExp('</text', 'g'), '</_Text')
        .replace(new RegExp('<use', 'g'), '<Use')
        .replace(new RegExp('</use', 'g'), '</Use')
        .replace(new RegExp('<defs', 'g'), '<Defs')
        .replace(new RegExp('</defs', 'g'), '</Defs')
        .replace(new RegExp('<stop', 'g'), '<Stop')
        .replace(new RegExp('</stop', 'g'), '</Stop')
        .replace(new RegExp('<clipPath', 'g'), '<ClipPath')
        .replace(new RegExp('</clipPath', 'g'), '</ClipPath')
        .replace(new RegExp('px', 'g'), '');
    const foundFills = Array.from(parsedSvgToReact.matchAll(/fill="(#[a-z0-9]+)"/gi)).flat();
    const defaultFill = foundFills[1];
    return `
import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import {
Svg,
SvgProps,
Ellipse,
G,
LinearGradient,
RadialGradient,
Line,
Path,
Polygon,
Polyline,
Rect,
Symbol,
Use,
Defs,
Stop,
ClipPath
Text as _Text,
Circle as _Circle,
} from 'react-native-svg'

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon'

export const [${className}, Animated${className}] = createIcon({
name: '${className}',
getIcon: (props) => (
  ${parsedSvgToReact.replace('otherProps="..."', '{...props}')}
),
${defaultFill ? `defaultFill: '${defaultFill}'` : ''}
})
`
        .replace(/fill="(#[a-z0-9]+)"/gi, `fill={"currentColor" ?? '$1'}`)
        .replaceAll(`xmlns:xlink="http://www.w3.org/1999/xlink"`, '')
        .replaceAll(`xlink:href`, 'xlinkHref');
}
// Helpers
function generateClassName(fileName) {
    return uppercamelcase(path.basename(fileName, '.svg'));
}
// Formatting
import fs from 'fs';
import { format } from 'prettier';
const configPath = path.resolve(__dirname, '../../../../.prettierrc');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
// it was removing needed imports for some reason
async function prettierFormat(source) {
    // lol for some reason it removes imports it shouldnt it you run it in one pass
    // running this in two passes with the second organizing imports fixes it...
    const formattedOnce = await format(source, {
        ...config,
        organizeImportsSkipDestructiveCodeActions: true,
        parser: 'typescript',
    });
    return await format(formattedOnce, {
        ...config,
        parser: 'typescript',
    });
}
// This must be at the end to run all code
run().catch(() => undefined);
//# sourceMappingURL=componentize-icons.js.map