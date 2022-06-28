class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value < this.value) {
      if (this.left) {
        this.left.add(node);
      } else {
        this.left = node;
      }
    }
    if (node.value > this.value) {
      if (this.right) {
        this.right.add(node);
      } else {
        this.right = node;
      }
    }
  }

  findPerson(name) {}
}
