
export function map2d<T, U>(array: T[][], fn: (value: T, x: number, y: number) => U) {
    return array.map((row, y) =>
        row.map((val, x) =>
            fn(val, x, y)
        )
    )
}

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