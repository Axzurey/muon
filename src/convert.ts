import getSelected from "functions/getSelected";
import convertStr from "convertString";

export const conversions = {
    'Vector3': {
        'pattern': '^vector3%[%s?[(%d+)]%s?,%s?[(%d+)]%s?,%s?[(%d+)]%s?%]$', //what the fuck? fix this!
        'convert': (pattern: string) => {
            print("in", pattern)
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

export function getArgs(str: string) {
    return convertStr(str)
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