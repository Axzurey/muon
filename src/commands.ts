import { t } from "@rbxts/t";
import array from "command/array";

//if number ends with x highlight it.
const commands = {
    array: {
        syntax: '[?] [?] [?]x', //first ? is the variable they selected it as
        syntaxTypes: [t.instanceOf('BasePart'), t.Vector3, t.number],
        callback: array
    },
    select: {
        syntax: '[?] as [?]',
        syntaxTypes: [t.string],
        callback: select
    }
}

export = commands;