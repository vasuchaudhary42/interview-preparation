const Sorting = {
	mergeSort: (array) => {

		const merge = (array, l, r, m) => {

			let i = l, j = m + 1, k = l;

			const n1 = m - l + 1, n2 = r - m;
			const left = [], right = [];

			for ( ; i <= m; i++ ) {
				left.push(array[i]);
			}

			for ( ; j <= r; j++ ) {
				right.push(array[j]);
			}

			i = j = 0;

			while ( i < n1 && j < n2 ) {
				if ( left[i] <= right[j] ) {
					array[k++] = left[i++];
				} else {
					array[k++] = right[j++];
				}
			}

			while ( i < n1 ) {
				array[k++] = left[i++];
			}

			while ( j < n2 ) {
				array[k++] = right[j++];
			}
		};

		const sort = (array, l, r) => {
			if(l < r) {
				const m = l + Math.floor((r - l)/2);
				sort(array, l, m);
				sort(array, m + 1, r);
				merge(array, l, r, m);
			}
		};

		sort(array, 0, array.length - 1);
		return array;
	},
	bubbleSort: (array) => {

		for ( let i = 0; i < array.length; i++ ) {

			let smallest = i;

			for ( let j = i; j < array.length; j++ ) {
				if ( array[smallest] > array[j]) {
					smallest = j;
				}
			}

			if ( smallest !== i ) {
				const swap = array[smallest];
				array[smallest] = array[i];
				array[i] = swap;
			}
		}

		return array;
	},
	quickSort: (array) => {

		const partition = (array, l, h) => {

			const pivot = array[h];

			let i = l - 1, j = l;

			for ( ; j < h; j++ ) {
				if ( array[j] < pivot ) {
					const swap = array[++i];
					array[i] = array[j];
					array[j] = swap;
				}
			}

			array[h] = array[++i];
			array[i] = pivot;

			return i;
		}

		const sort = (array, l, h) => {
			if ( l < h ) {
				const pivot = partition(array, l, h);
				sort(array, l, pivot - 1);
				sort(array, pivot + 1, h);
			}
		}

		sort(array, 0, array.length - 1)
		return array;
	}
};

export default Sorting;
