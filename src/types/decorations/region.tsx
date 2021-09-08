import { Decoration } from ".";
import { Color, Point } from "../general";

export interface Region extends Decoration {
  cells: Point[];
  unique: boolean;
}

export interface SudokuRegion extends Region {
  type: "SudokuRegion";
  unique: true
}

export interface HyperRegion extends Region {
  type: "HyperRegion";
  color: Color;
}

export interface CalcRegion extends Region {
  type: "CalcRegion";
  target: number;
  operation: "+" | "-" | "x" | "÷";
}

export interface RelativeDigitRegion extends Region {
  type: "RelativeDigitRegion";
}

export interface KillerCage extends Region {
  type: "KillerCage";
  target: number;
}

export interface KillerCagePro extends Omit<KillerCage, "type"> {
  type: "KillerCagePro";
  operation: "+" | "-" | "x" | "÷";
}

export type RegionType = SudokuRegion | HyperRegion | CalcRegion | RelativeDigitRegion | KillerCage | KillerCagePro