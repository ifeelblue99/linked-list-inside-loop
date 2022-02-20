/*
Given a linked list of N nodes. 
The task is to check if the linked list has a loop. 
Linked list can contain self loop.
*/

// node 
function Node(data){
  this.data = data
  this.next = null
}

// set up
nodeHead = new Node("head")
node2 = new Node("2")
node3 = new Node("3")
node4 = new Node("4")
nodeTail = new Node("tail")

nodeHead.next = node2
node2.next = node3
node3.next = node4
node4.next = nodeTail
//

// func to detect loop
Node.prototype.hasLoop = function(){
  let current = this,
      prev = "",
      count = 0,
      nodeData = []
  while(current){
    nodeData.push(current.data)
    
    if (current.next) {
      if (nodeData.includes(current.next.data)) {
        return true
      }else{
        return false
      }
    }
      
    count++
    prev = current
    current = current.next
  }
}

console.log("has loop:",nodeHead.hasLoop());
