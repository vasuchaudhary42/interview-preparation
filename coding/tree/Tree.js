import Node    from "./Node";
import Printer from "../printer";
export default class Tree {

	/**
	 *
	 * @param array
	 * @param index
	 * @returns {Node|null}
	 */
	static create(array, index) {
		let node = null;
		if ( index < array.length && array[index] !== null ) {
			node = new Node();
			node.value = array[index];
			node.left = Tree.create(array, 2 * index + 1);
			node.right = Tree.create(array, 2 * index + 2);
		}

		return node;
	}

	/**
	 *
	 * @param {Node} node
	 */
	static traverse(node) {
		if ( node ) {
			Printer(node.value);
			Tree.traverse(node.left);
			Tree.traverse(node.right);
		}
	}

	/**
	 *
	 * @param {Array<number>} array
	 * @param {Node} node
	 * @param {number} index
	 */
	static toArray(array, node, index) {
		if (node) {
			array[index] = node.value;
			Tree.toArray(array, node.left, 2 * index + 1);
			Tree.toArray(array, node.right, 2 * index + 2);
		}
	}
}
