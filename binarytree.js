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

  findPerson(name) {
    if(!this.root) return false
      
    let current = this.root
    let found = false
    while(current && !found){
          if(value < current.value){
            current = current.left
           } else if(value > current.value){
              current = current.right
           } else {
                found = current
           } 
          
          }
  
      if(!found) return undefined;
      return found
  }
}
