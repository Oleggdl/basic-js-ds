const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor() {
    this.tree = null
  }

  root() {
    return this.tree

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {

    const node = new Node(data)
    let currentNode = this.tree

    if (this.tree === null) {
      this.tree = node
      return
    } else {
      while (currentNode) {
        if (node.data > currentNode.data) {
          if (currentNode.right === null) {
            currentNode.right = node
            return
          }
          currentNode = currentNode.right
        } else {
          if (currentNode.left === null) {
            currentNode.left = node
            return
          }
          currentNode = currentNode.left
        }
      }
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }




  has(data) {

    return this.find(data) !== null

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {

    let currentNode = this.tree

    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else if (data > currentNode.data) {
        currentNode = currentNode.right
      } else {
        return currentNode
      }
    }
    return null

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.tree = removeNode(this.tree, data)

    function removeNode(n, data) {
      if (!n) {
        return null
      }
      if (data > n.data) {
        n.right = removeNode(n.right, data)
        return n
      } else if (data < n.data) {
        n.left = removeNode(n.left, data)
        return n
      } else {
        if (!n.left && !n.right) {
          return null
        }
      }
      if (!n.left) {
        n = n.right
        return n
      }
      if (!n.right) {
        n = n.left
        return n
      }
      let minNode = n.right
      while (minNode.left) {
        minNode = minNode.left
      }
      n.data = minNode.data
      n.right = removeNode(n.right, minNode.data)
      return n
    }

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }


  min() {

    let currentNode = this.tree
    while (currentNode.left !== null) {
      currentNode = currentNode.left
    }
    return currentNode.data

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {

    let currentNode = this.tree
    while (currentNode.right !== null) {
      currentNode = currentNode.right
    }
    return currentNode.data
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}













