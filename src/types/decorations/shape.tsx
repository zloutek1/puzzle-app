import { Decoration } from ".";
import { Color, Dimensions, Point } from "../general";

export interface Shape extends Decoration {
    shapeType: string
    coords: Point
    color: Color
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

export type ShapeType = EvenOdd | Fortress