const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {

  queue = {};

  getUnderlyingList() {

    return this.queue;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {

    if (Object.keys(this.queue).length == 0) {
      this.queue = new ListNode(value);
    } else {
      let x = this.queue;
      while (x.next) {
        x = x.next;
      }
      x.next = new ListNode(value);
    }

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {

    let a = this.queue.value;
    this.queue = this.queue.next;
    return a;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}






