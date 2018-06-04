class BinarySearchTree {
  constructor(val) {
    this.arr = [val];
    this.left = null;
    this.right = null;
    this.value = val;
  }

  insert (num) {
    this.arr.push(num);

  }

  contains () {

  }

  depthFirstForEach () {

  }

  breadthFirstForEach () {

  }

  size () {
    return this.arr.length;
  }
}
