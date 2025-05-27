export var ProcessedRowType;
(function (ProcessedRowType) {
    ProcessedRowType["Header"] = "header";
    ProcessedRowType["Item"] = "item";
})(ProcessedRowType || (ProcessedRowType = {}));
export function processSectionsToRows(sections) {
    const result = [];
    let rowIndex = 0;
    for (const section of sections) {
        // process header
        const headerProps = {
            sectionKey: section.sectionKey,
            rightElement: section.rightElement,
            endElement: section.endElement,
            name: section.name,
        };
        result.push({
            type: ProcessedRowType.Header,
            data: {
                section: headerProps,
            },
        });
        rowIndex++;
        // process items
        const tokenData = section.data;
        let itemIndex = 0;
        for (const item of tokenData) {
            result.push({
                type: ProcessedRowType.Item,
                data: {
                    item,
                    section,
                    index: itemIndex++,
                    rowIndex: rowIndex++,
                    // expanded is not used in native :thinking:
                    expanded: false,
                },
            });
        }
    }
    return result;
}
//# sourceMappingURL=processSectionsToRows.js.map