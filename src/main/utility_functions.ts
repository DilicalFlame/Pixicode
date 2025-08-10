import Store from 'electron-store';

interface IBounds {
    width: number;
    height: number;
}

const storage = new Store({
    name: 'pixicode-settings',
    projectName: 'pixicode'
}) as any;

function getWinBounds(): IBounds {
    const default_bounds = { width: 850, height: 650 };
    const bounds = storage.get('win-bounds');
    if (bounds) return bounds;
    else {
        saveBounds(default_bounds);
        return default_bounds;
    }
}

function saveBounds(bounds: IBounds): void {
    storage.set('win-bounds', bounds);
}

export { getWinBounds, saveBounds };
