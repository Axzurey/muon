import getSelected from "functions/getSelected";

export const conversions = {
    'Vector3': {
        'pattern': '^vector3%[(%d+),(%d+),(%d+)%]$', //allow spacing in here. note it already splits the word so fix that first
        'convert': (pattern: string) => {
            let p = pattern.match(conversions.Vector3.pattern) as LuaTuple<number[]>;
            return new Vector3(p[0], p[1], p[2]);
        }
    },
    'Selected': {
        'pattern': '^%&selected$',
        'convert': (_pattern: string) => {
            return getSelected()
        }
    },
    'String': {
        'pattern': '^"%c+$',
        'convert': (_pattern: string) => {
            return string
        }
    }
}

export function convert(str: string) {
    print(str)
    for (const [datatype, value] of pairs(conversions)) {
        if (str.match(value.pattern)[0]) {
            return [datatype, value.convert(str)];
        }
    }
    return [undefined, undefined];
}