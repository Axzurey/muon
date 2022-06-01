import { t } from "@rbxts/t";
import array from "command/array";
import setVar from "command/setVar";

//if number ends with x highlight it.
const commands = {
    array: {
        syntaxTypes: [t.instanceOf('BasePart'), t.Vector3, t.number],
        callback: array
    },
    select: {
        syntaxTypes: [t.string],
        callback: select
    },
    setVar: {
        syntaxTypes: [t.string, t.string],
        callback: setVar
    }
}

export = commands;