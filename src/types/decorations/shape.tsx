import { Decoration } from ".";
import { Dimensions, Point } from "../general";

export interface Shape extends Decoration {
    coords: Point
    dimensions: Dimensions
}

export interface EvenOdd extends Shape {
    type: "EvenOdd"
    parity: "even" | "odd"
}

export interface Fortress extends Shape {
    type: "Fortress"
    inequality: "<" | ">"
}

export type ShapeDecorations = {
    evenOdds?: EvenOdd[],
    fortresses?: Fortress[]
}