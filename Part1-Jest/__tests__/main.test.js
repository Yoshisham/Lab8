const formatVolumeIconPath = require('../assets/scripts/main');

describe('Volume value', () => {
    test('is 70', () => {
        expect(formatVolumeIconPath(70)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });

    test('is 50', () => {
        expect(formatVolumeIconPath(50)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });

    test('is 20', () => {
        expect(formatVolumeIconPath(20)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });

    test('is 0', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });
});