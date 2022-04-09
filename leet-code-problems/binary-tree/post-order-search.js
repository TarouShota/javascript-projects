class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right
        this.root = null
        this.result = [];
    }

    insert(data) {
        let n = new Node(data, null, null);
        if (this.root == null) {
            this.root = n;
        }
        else {
            var current = this.root;
            var parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;

                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;

                    }
                }

            }

        }
    }
    preOrder(node) {
        if (!(node === null)) {
            console.log(node.data);
            this.result.push(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
}
let tree = new Node(1, null, 2);
tree.insert(1);
tree.insert(null);
tree.insert(2);
tree.insert(3);
tree.insert(9);
tree.insert(null);
tree.insert(5);

console.log(tree)
tree.preOrder(tree.root);

console.log(tree.result);

var preorderTraversal = function (root) {
    let result = [];
    function preOrder(node) {
        if (!(node == null)) {
            result.push(node);
            preOrder(node.left);
            preOrder(node.right)
        }
    }
    root.forEach(element => {

    });
};
