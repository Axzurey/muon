import { Workspace } from "@rbxts/services";

const env: Record<any, any> = {
    hello: Workspace.FindFirstChild('close') as BasePart
}

export = env;