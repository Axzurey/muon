import colorfool from "colorfool";
import {keywords, colors} from "keywords";

export default function format(input: string) {
    let split = input.split(' ');
    
    let out = '';

    split.forEach((v, z) => {
        let did = false;
        for (const [colcode, x] of pairs(keywords)) {
            for (const [i, vx] of pairs(x)) {
                
                if (!v.match(vx)[0]) continue;

                let color = colors[colcode];
                let fmatted = `#${color.ToHex()}`
                let textP = colorfool.pretty(v);
                textP.colorify(fmatted);
                
                let final = textP.final();

                out += `${z === 0? '': ' '}${final}`
                did = true
            }
        }
        if (!did) {
            out += `${z === 0? '': ' '}${v}`
        }
    })
    return out;
}