import env from "env";

/**
 * 
 * @param axes a unit vector3, describing the direction to expand the instance
 */
export default function array(name: string, axes: Vector3, amount: number) {

    let target = env[name] as BasePart

    if (!target || typeOf(target) !== 'Instance' || !(target as Instance).IsA('BasePart')) return 1;

    for (let i = 0; i < amount; i++) {
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