export function mockUIAssets() {
    jest.mock('ui/src/assets', () => {
        const assets = {
            ...jest.requireActual('ui/src/assets'),
        };
        Object.keys(assets).map((key) => {
            assets[key] = `mock-asset-${key}.png`;
        });
        return assets;
    });
}
//# sourceMappingURL=mockUIAssets.js.map