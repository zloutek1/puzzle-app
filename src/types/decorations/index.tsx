import { Color, Point } from "../general";
import { BetweenType } from "./between";
import { LineType } from "./line";
import { RegionType } from "./region";
import { ShapeType } from "./shape";
import { SideType } from "./side";

export interface Decoration {
  type: string;
  color?: Color;
}

export interface SudokuArrow extends Decoration {
  type: "SudokuArrow";
  cells: Point[];
  thickness: number;
  headLength: number;
}

export interface Thermo extends Decoration {
  type: "Thermo";
  cells: Point[];
  thickness: number;
}

export type DecorationType = SudokuArrow | Thermo | BetweenType | LineType | RegionType | ShapeType | SideType