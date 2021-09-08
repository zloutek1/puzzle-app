import { Decoration } from ".";

export interface SideDecoration extends Decoration {
    position: number
    orientation: "up" | "down" | "left" | "right"
}

export interface Skyscraper extends SideDecoration {
    type: "Skyscraper"
    value: number
}

export interface XSum extends SideDecoration {
    type: "XSum"
    value: number
}

export interface Nonogram extends SideDecoration {
    type: "Nonogram"
    values: number[]
}

export interface Sandwich extends SideDecoration {
    type: "Sandwich"
    value: number
}

export interface LittleKiller extends SideDecoration {
    type: "LittleKiller"
    value: number
    facing: "left" | "right"
}

export type SideDecorations = {
    skyscrapers?: Skyscraper[],
    xsums?: XSum[],
    nonograms?: Nonogram[],
    sandwiches?: Sandwich[],
    littleKillers?: LittleKiller[]
}