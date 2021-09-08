import { Decoration } from ".";
import { Dimensions, Point } from "../general";

export interface Bettween2 extends Decoration {
    between: [Point, Point]
    dimensions: Dimensions
}

export interface Bettween4 extends Decoration {
    between: [Point, Point, Point, Point]
    dimensions: Dimensions
}

export interface XV extends Bettween2 {
    type: "XV"
    text: "X" | "V"
}

export interface Kropki extends Bettween2 {
    type: "Kropki"
    color: "black" | "white"
}

export interface Futoshiki extends Bettween2 {
    type: "Futoshiki"
    inequality: "<" | ">"
}

export interface Sojuko extends Bettween4 {
    type: "Sojuko"
    target: number
}

export type BetweenType = XV | Kropki | Futoshiki | Sojuko