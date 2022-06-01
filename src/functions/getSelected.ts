const selection = game.GetService('Selection')

export default function getSelected(one: boolean = false) {
    let t = selection.Get();
    if (one) {
        return t[0]
    }
    else {
        return t
    }
}