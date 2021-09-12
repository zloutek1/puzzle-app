import { Point } from "./types/general"

/* cell generation */

export const genEmptyCells = (rows: number, columns: number) =>
Array.from(Array(rows), (y: number) =>
    Array.from(Array(columns), (x: number) => ({
        x,
        y,
        value: null,
        highlight: "",
        editable: true,
    }))
)

export const genCellsFromGiven = <T,>(rows: number, columns: number, values: T[][]) =>
values.map((row, y) =>
    row.map((value, x) => ({
        x,
        y,
        value,
        highlight: "",
        editable: value === null
    }))
)

/* drawing */

export const line = ([x0, y0]: Point, [x1, y1]: Point) => {
    const length = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2))
    const angle = Math.atan2(y0 - y1, x0 - x1) * (180 / Math.PI)

    const x = (x0 + x1) / 2 - length / 2
    const y = (y0 + y1) / 2

    return [x, y, length, angle];
}

/* array helper */

export function map2d<T, U>(array: T[][], fn: (value: T, x: number, y: number) => U) {
    return array.map((row, y) =>
        row.map((val, x) =>
            fn(val, x, y)
        )
    )
}

export const zip = <T, U>(a: T[], b: U[]) => Array.from(Array(Math.min(b.length, a.length)), (_, i) => [a[i], b[i]]);

/* value helpers */

export function equals(x: any, y: any): boolean {
    const ok = Object.keys, tx = typeof x, ty = typeof y;
    return x && y && tx === 'object' && tx === ty ? (
        ok(x).length === ok(y).length &&
        ok(x).every(key => equals(x[key], y[key]))
    ) : (x === y);
}

export function isNumber(value: any) {
    return (typeof value === 'number' && isFinite(value)) ||
           (typeof value === 'string' && !isNaN(parseFloat(value)));
}

/* deepCopy */

export const deepCopy = <T,>(target: T): T => {
    if (target === null) {
      return target;
    }
    if (target instanceof Date) {
      return new Date(target.getTime()) as any;
    }
    if (target instanceof Array) {
      const cp = [] as any[];
      (target as any[]).forEach((v) => { cp.push(v); });
      return cp.map((n: any) => deepCopy<any>(n)) as any;
    }
    if (typeof target === 'object' && target !== {}) {
      const cp = { ...(target as { [key: string]: any }) } as { [key: string]: any };
      Object.keys(cp).forEach(k => {
        cp[k] = deepCopy<any>(cp[k]);
      });
      return cp as T;
    }
    return target;
  };


/* checks */

export function check_unique<T>(list: T[]) {
    const seen: T[] = []
    for (const item of list) {
        if (item in seen) return false;
        seen.push(item);
    }
    return true;
}

export function check_consecutive(list: number[]) {
    let last = null;
    for (const item of list) {
        if (last !== null) {
            if (last + 1 !== item) return false;
        }
        last = item;
    }
    return true;
}

export function check_ascending<T>(list: T[]) {
    let last = null;
    for (const item of list) {
        if (last !== null) {
            if (last >= item) return false;
        }
        last = item;
    }
    return true;
}

export function check_descending<T>(list: T[]) {
    let last = null;
    for (const item of list) {
        if (last !== null) {
            if (last <= item) return false;
        }
        last = item;
    }
    return true;
}