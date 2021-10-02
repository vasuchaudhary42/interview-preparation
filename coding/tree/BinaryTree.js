export const BinaryTree = {
	isSameTree(node1, node2) {

		if ( node1 === null && node2 === null ) return true;

		if ( node1 === null || node2 === null ) return false;

		if ( node1.value !== node2.value ) return false;

		return this.isSameTree(node1.left, node2.left) && this.isSameTree(node1.right, node2.right);
	},
	isSymmetricTree(node1, node2) {
		return this.isMirror(node1, node2);
	},
	isMirror(node1, node2) {

		if ( node1 === null && node2 === null ) return true;

		if ( node1 === null || node2 === null || node1.value !== node2.value ) return false;

		return this.isMirror(node1.left, node2.right) && this.isMirror(node1.right, node2.left);
	},
	maxDepth(root) {
		if(root === null) {
			return 0;
		}

		const leftDepth = this.maxDepth(root.left);
		const rightDepth = this.maxDepth(root.right);
		return 1 + (leftDepth > rightDepth ? leftDepth : rightDepth);
	},
	minDepth(root) {
		if(root === null) {
			return 0;
		}

		if(root.left !== null && root.right !== null) {
			const leftDepth = this.minDepth(root.left);
			const rightDepth = this.minDepth(root.right);
			return 1 + (leftDepth < rightDepth ? leftDepth : rightDepth);
		} else if (root.left !== null) {
			return 1 + this.minDepth(root.left);
		}

		return 1 + this.minDepth(root.right);
	},
};
