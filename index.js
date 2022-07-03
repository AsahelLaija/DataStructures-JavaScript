/*	Definition for singly-linked list
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
function node(val, next) {
  this.val = val || null
  this.next = next || null
}
*/
//	FUNCTION, PROTOTYPE APPROACH	//
function ListNode(val, next) {
  this.val = (val===undefined ? null : val)
  this.next = (next===undefined ? null : next)
}

function fLinkedList(){
  this.head = null
  this.size = 0
}

//	addHead		// 
fLinkedList.prototype.addHead = function(val){
  this.head = new ListNode(val, this.head)
  this.size++
}

//	addTail		//
fLinkedList.prototype.addTail = function(val){
  let node = new ListNode(val)
  let current

  // If empty, make head
  if(!this.head) {
    this.head = node
  } else {
    current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }
  this.size++
}

//	addAt
fLinkedList.prototype.addAt = function(index, val){
  if (index > 0 && index > this.size || index < 0) {
    return
  }
  // If first index
  if (index === 0) {
    this.head = new ListNode(val, this.head)
    return
  }
  let node = new ListNode(val)
  let current, previous
  
  // Set current to first
  current = this.head
  let count = 0
  while(count < index){
    previous = current
    count++
    current = current.next
  }
  node.next = current
  previous.next = node
  this.size++
}

//	delHead		//
fLinkedList.prototype.delHead = function(){
  this.head = this.head.next
  this.size--
}

//	delTail		//
fLinkedList.prototype.delTail = function(){
  let current = this.head
  let previous
  let count = 0
  while (count !== this.size){
    count++
    previous = current
    current = current.next
    if(count === this.size - 1){
      previous.next = current.next
    }
  }
}

//	delAt		//
fLinkedList.prototype.delAt = function(index) {
  let current = this.head
  let previous
  let count = 0

  if (index > 0 && index >= this.size) {
    return
  } else if (index === 0) {
    this.head = current.next
  } else {
    while (count < index){
      count++
      previous = current
      current = current.next
    }
    previous.next = current.next
  }
  this.size--
}

//	get	//
fLinkedList.prototype.get = function(index){
  let current = this.head
  let count = 0
  while(current){
    if (count === index) {
      return current.data
    }
    count++
    current = current.next
  }
  return 0
}

//	printList	//
fLinkedList.prototype.printData = function(){
  let current = this.head
  while (current) {
    console.log(current.val)
    current = current.next
  }
}
