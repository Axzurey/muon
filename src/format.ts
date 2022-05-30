import {keywords, colors} from "keywords";

export default function format(input: string) {
    let split = input.split(' ');
    
    let out = ''

    split.forEach((v) => {
        for (const [colcode, x] of pairs(keywords)) {
            if (x.indexOf(v) !== -1) {
                let color = colors[colcode];
                //todo
            }
        }
    })
    return out;
}