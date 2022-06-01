import {convert} from "convert";
import env from "env";

/**
 * 
 * @param axes a unit vector3, describing the direction to expand the instance
 */
export default function array(name: string, axes_: string, amount: number) {

    let x = convert(axes_);
    if (x[0] !== 'Vector3') {
        return 1; //it is unable to be matched with a vector3
    };

    //test: array hello vector3[0,1,1] 5

    let axes = x[1] as Vector3;

    print(axes)

    let target = env[name] as BasePart

    if (!target || typeOf(target) !== 'Instance' || !(target as Instance).IsA('BasePart')) return 1;
    print(amount)
    for (let i = 0; i < tonumber(amount)!; i++) {
        let p = target.Position

        let s = target.Size

        let x = p.add(axes.mul(s).mul(i));

        let z = target.Clone();

        z.Name = `${target.Name}${amount}`

        z.Position = x;

        z.Parent = target.Parent;
    }
    return 0
}