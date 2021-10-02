const Printer = (...args) => {
	args.forEach(arg => {
		if ( Array.isArray(arg) ) {
			let text = "<div style='display: flex; flex-wrap: wrap;width: 100%;'>";
			arg.forEach(line => {
				if ( Array.isArray(line) ) {
					text += "<div style='display: flex;width: 100%'>";
					line.forEach(item => {
						text += `<div style='display: inline-block;width: 15px;height: 25px'>${item}</div>`;
					});
					text += "</div>";
				} else {
					text += `<div style='display: inline-block;width: 25px;height: 30px;'>${line}</div>`;
				}
			});
			text += "</div>";
			document.write(text);
		} else {
			document.write(`<div style='margin: 20px 0;background: yellow;padding: 10px'>${arg}</div>`);
		}
	});
	document.write("<hr style='margin: 20px 0'>");
}
export default Printer;
