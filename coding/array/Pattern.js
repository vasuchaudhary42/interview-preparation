import Printer from "../printer";

const Pattern = {
	numberDiamondWithOld(n) {
		const lines = [];

		const m = Math.floor(n / 2);
		let lineNumber = 0;

		for ( let i = m; i >= -m; i-- ) {

			lines[lineNumber] = [];

			const k = Math.abs(i)

			for ( let space = 0; space < k; space++) {
				lines[lineNumber].push(" ");
			}

			for ( let number = m - k + 1; number >= -(m - k + 1); number-- ) {

				if ( number === 0 || number === -1 ) {
					continue;
				}

				lines[lineNumber].push(`${Math.abs(number)}`);
			}

 			lineNumber++;
		}

		Printer("N: " + n, lines);
	},
	numberDiamond(n) {
		const lines = [];
		let lineNumber = 0;
		const m = Math.floor(n / 2);
		const isEven = (n % 2 ) === 0;

		for ( let i = m; i >= -m; i-- ) {

			lines[lineNumber] = [];
			if ( isEven && (i === 0) ) {
				continue;
			}
			const k = Math.abs(i);

			for ( let space = 0; space < m - k; space++ ) {
				lines[lineNumber].push(" ");
			}

			for ( let j = k + (isEven ? 0 : 1); j >= -(k + (isEven ? 0 : 1)); j-- ) {

				if ( j === 0 || j === -1 ) {
					continue;
				}

				lines[lineNumber].push(`${Math.abs(j)}`);
			}

			lineNumber++;
		}

		Printer("N: " + n,lines);
	},
	starDiamond(n, type = 'star') {
		const lines = [];
		let lineNumber = 0;

		const m = Math.floor(n / 2);

		for (let i = m; i >= -m; i--) {

			lines[lineNumber] = [];

			const k = Math.abs(i);

			for ( let space = 0; space < k; space++ ) {
				lines[lineNumber].push(" ");
			}

			for ( let j = m - k + 1; j >= -(m - k + 1); j-- ) {
				if ( j === 0 || j === -1 )
					continue;
				lines[lineNumber].push(type === 'star' ? "*" : Math.abs(j));
			}

			lineNumber++;
		}

		Printer('Start Diamond,  n = ' + n,  lines);

	},
	starSpaceDiamond(n, type = "star") {

		const lines = [];
		let lineNumber = 0;

		const m = Math.floor(n / 2);

		for (let i = m; i >= -m; i--) {

			lines[lineNumber] = [];

			const k = Math.abs(i);

			for ( let space = 0; space < k; space++ ) {
				lines[lineNumber].push(" ");
			}

			for ( let j = 0; j <= m - k; j++ ) {
				lines[lineNumber].push(type === 'star' ? "*" : (j + 1), " ");
			}

			lineNumber++;
		}

		Printer('Star Space Diamond,  n = ' + n,  lines);

	},
	pyramid(n, direction = 'top', type = "star") {

		const lines = [];
		let lineNumber = 0;

		for (let i = 0; i < n; i++) {

			lines[lineNumber] = [];

			if ( direction === 'top' ) {
				for ( let space = 0; space < n - i - 1; space++ ) {
					lines[lineNumber].push(" ");
				}

				for ( let j = 0;  j < (2 * i)  + 1; j++) {
					lines[lineNumber].push(type === 'star' ? "*" : (j + 1));
				}
			} else if ( direction === 'bottom' ) {

				for ( let space = 0; space < i; space++ ) {
					lines[lineNumber].push(" ");
				}

				for ( let j = 0;  j < (2 * (n - i)) - 1; j++) {
					lines[lineNumber].push(type === 'star' ? "*" : (j + 1));
				}

			}

			lineNumber++;
		}

		Printer('Pyramid  n = ' + n,  lines);
	}
};

export default Pattern;
