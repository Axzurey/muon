import commands from "commands";
import { conversions } from "convert";

function keysOf<T extends Record<any, any>>(d: T) {
    let k: (keyof T)[] = [];

    for (const [i, v] of pairs(d)) {
        k.push(i)
    }
    return k
}

function propertyOfKeys<D extends Record<any, Record<string, any>>, P extends keyof D[keyof D]>(d: D, prop: P) {
    let values: P[] = [];

    for (const [_, t] of pairs(d)) {
        let z = t as D[keyof D];
        values.push(z[prop]);
    }

    return values;
}

export const colors = {
    red: Color3.fromRGB(255, 0, 0),
    green: Color3.fromRGB(0, 255, 0),
    blue: Color3.fromRGB(0, 255, 255)
}

export const keywords: Record<keyof typeof colors, string[]> = {
    red: [...keysOf(commands)],
    green: ['as'],
    blue: [...propertyOfKeys(conversions, 'pattern')]
};