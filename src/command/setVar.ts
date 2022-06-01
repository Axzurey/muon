import {convert} from "convert";
import env from "env";

export default function setVar(key: string, value: string) {
    let t = convert(value);
    env[key] = t[1];
}