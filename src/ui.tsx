import Roact from "@rbxts/roact"
import format from "format"

export class message extends Roact.Component {
    render() {
        return <textlabel
            Key="message"
            BackgroundTransparency={1}
            Font={Enum.Font.Ubuntu}
            Size={new UDim2(1, 0, 0.1, 0)}
            Text="hello world is a diff thing"
            TextColor3={Color3.fromRGB(255, 255, 255)}
            TextSize={14}
            TextXAlignment={Enum.TextXAlignment.Left}
        />
    }
}

export class commandBar extends Roact.Component {
    displayText = Roact.createBinding('')
    render() {
        return (
            <frame
                Key="back"
                BackgroundColor3={Color3.fromRGB(168, 168, 168)}
                Position={new UDim2(0, 0, 0, 0)}
                Size={new UDim2(1, 0, 1, 0)}
            >
                <textlabel
                    Key="displayInput"
                    BackgroundTransparency={1}
                    Font={Enum.Font.Ubuntu}
                    Position={new UDim2(0, 0, 0.9, 0)}
                    RichText={true}
                    Size={new UDim2(1, 0, 0.1, 0)}
                    Text={this.displayText[0].getValue()}
                    TextColor3={Color3.fromRGB(255, 255, 255)}
                    TextSize={14}
                    TextXAlignment={Enum.TextXAlignment.Left}
                    ZIndex={2}
                />
                <scrollingframe
                    Key="output"
                    Active={true}
                    BackgroundColor3={Color3.fromRGB(31, 31, 31)}
                    Size={new UDim2(1, 0, 0.9, 0)}
                />
                <textbox
                    Key="input"
                    BackgroundColor3={Color3.fromRGB(53, 53, 53)}
                    TextColor3={Color3.fromRGB(255, 255, 255)}
                    CursorPosition={-1}
                    Position={new UDim2(0, 0, 0.9, 0)}
                    RichText={true}
                    TextXAlignment={Enum.TextXAlignment.Left}
                    Size={new UDim2(1, 0, 0.1, 0)}
                    TextSize={14}
                    Change={{
                        Text: (thisbox) => {
                            this.displayText[1](format(thisbox.Text))
                        }
                    }}
                />
            </frame>
        )
    }
}