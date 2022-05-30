/// <reference types="@rbxts/types/plugin" />

import Roact from "@rbxts/roact";
import { commandBar } from "ui";

export {};

const toolbar = plugin.CreateToolbar("MyToolbar");

const widgetInfo = new DockWidgetPluginGuiInfo(
	Enum.InitialDockState.Float,
	true,
	true,
	400,
	200,
	400,
	200
)

const widget = plugin.CreateDockWidgetPluginGui('muonPlugin', widgetInfo);

widget.Title = 'muon command terminal';

let cmdbar = Roact.createElement(commandBar)

Roact.mount(cmdbar, widget)