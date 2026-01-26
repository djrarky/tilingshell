export type Tile = {
    x: number;
    y: number;
    width: number;
    height: number;
    groups: number[];
};

export type Layout = {
    id: string;
    tiles: Tile[];
};
