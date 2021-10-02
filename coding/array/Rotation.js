const reverse = (array, from, to) => {
	while ( from < to ) {
		const swap = array[from];
		array[from] = array[to];
		array[to] = swap;
		from++;
		to--;
	}

	return array;
};

const Rotation = {
	rotation: (array, rotate) => {

		const n = array.length;
		rotate %= n;

		reverse(array, 0, rotate);
		reverse(array, rotate + 1 , n - 1)
		reverse(array, 0, n - 1);

		return array;
	}
};

export default Rotation;
