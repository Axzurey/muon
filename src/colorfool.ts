namespace colorfool {

	class rainbow {
		__content: string = ''
		constructor(str: string) {
			this.__content = str
		}
		final() {
			return this.__content;
		}
		/**
		 * color should be a hexadecimal(beginning with #) or a string as follows "rgb(r, g, b)"
		 */
		colorify(hexaColor: string) {
			this.__content = `<font color="${hexaColor}">${this.__content}</font>`
			return this;
		}
		italics() {
			this.__content = `<i>${this.__content}</i>`
			return this;
		}
		cross() {
			this.__content = `<s>${this.__content}</s>`
			return this;
		}
		bold() {
			this.__content = `<b>${this.__content}</b>`
			return this;
		}
		underline() {
			this.__content = `<u>${this.__content}</u>`
			return this;
		}
		font(font: Enum.Font) {
			this.__content = `<font face="${font.Name}">${this.__content}</font>`
			return this;
		}
		size(size: number) {
			this.__content = `<font size="${size}">${this.__content}</font>`
			return this;
		}
		/**
		 * color should be a hexadecimal(beginning with #)
		 */
		stroke(thickness: number, transparency: number, hexaColor: string, joinMode: Enum.LineJoinMode) {
			this.__content = `<stroke color="${hexaColor}" joins="${joinMode.Name}" thickness="${thickness}" transparency="${transparency}">${this.__content}</font>`
			return this;
		}
	}

	export function pretty(text: string) {
		return new rainbow(text)
	}
}

export = colorfool;