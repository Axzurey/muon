import env from "env";

const selection = game.GetService('Selection')

/**
 * 
 * @param axes a unit vector3, describing the direction to expand the instance
 */
 export default function selectX(variable: string) {
    env[variable] = selection.Get()
    return 0
}