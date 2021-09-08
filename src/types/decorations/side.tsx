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

export type SideType = Skyscraper | XSum | Nonogram | Sandwich