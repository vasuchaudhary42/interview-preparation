class BuildHeap {

	build(array) {
		const n = array.length;


		for ( let startIndex = (n / 2) - 1; startIndex >= 0; startIndex-- ) {
			this.heapify(array, n, startIndex)
		}
	}

	heapify(array, i, isMaxHeap = true) {

		const n = array.length;

		if ( isMaxHeap ) {

			let largest = i;
			const leftIndex  = (2 * i) + 1;
			const rightIndex = (2 * i) + 2;

			if(leftIndex < n && array[leftIndex] > array[largest]) {
				largest = leftIndex;
			}

			if ( rightIndex < n && array[rightIndex] > array[largest] ) {
				largest = rightIndex;
			}

			if ( largest !== i ) {
				let swap = array[i];
				array[i] = array[largest];
				array[largest] = swap;

				this.heapify(array, largest);
			}
		} else {

			let smallest = i;

			const leftIndex  = (2 * i) + 1;
			const rightIndex = (2 * i) + 2;

			if(leftIndex < n && array[leftIndex] < array[smallest]) {
				smallest = leftIndex;
			}

			if ( rightIndex < n && array[rightIndex] < array[smallest] ) {
				smallest = rightIndex;
			}

			if ( smallest !== i ) {
				let swap = array[i];
				array[i] = array[smallest];
				array[smallest] = swap;

				this.heapify(array, smallest, isMaxHeap);
			}
		}
	}
}
