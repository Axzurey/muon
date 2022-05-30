import commands from "commands";

function keysOf<T extends Record<any, any>>(d: T) {
    let k: (keyof T)[] = [];

    for (const [i, v] of pairs(d)) {
        k.push(i)
    }
    return k
}

export const colors = {
    red: Color3.fromRGB(255, 0, 0),
    green: Color3.fromRGB(0, 255, 0)
}

export const keywords: Record<keyof typeof colors, string[]> = {
    red: [...keysOf(commands)],
    green: ['as'],
};