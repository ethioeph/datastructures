
//an empty node 
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    //adds a new node to end of list
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head; //both head and tail point at the only node
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //remove last item and then update tail to previous node
    pop(){
        if(!this.head){
            return undefined;
        }
       
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;  
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length ===0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    //remove head of list
    shift(){
        var oldHead = this.head;
        if(!this.head){
            return undefined;
        }
        this.head = oldHead.next; //new head
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return oldHead;
    }
    
    //add head at beginning of list
    unshift(val){
        var newHead = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else{
            newHead.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    } 
    
    //gets the node at specific index.(0 indexed)
    get(index){
        if(index<0 || index >=this.length){
            return null;
        }
        var counter = 0;
        var current = this.head;
        while(counter!=index){
            current = current.next;
            counter++;
        }
        return current;
    }
    //updates value of node at given index and gives confirmation(true)
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    
    //creates and adds node with val at given index
    //connect previous to current then connect current to next
    insert(val,index){
        if(index < 0 || index > this.length){
            return false;
        }
        if(index===0){
            !!this.unshift(val);//same as return true !!(falsy) = truthy
        }
        if(index===this.length){
            !!this.push(val);
        }
        var newNode = newNode(val);
        var previous = this.get(index-1);
        var temp = previous.next;//not to lose the final node being pointed to
        previous.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){ 
        if(index < 0 || index >= this.length){
            return undefined;
        }
        if(index === this.length - 1){
            return this.pop(); 
        }
        if(index === 0){
            return this.shift();
        }
        var previous = this.get(index-1);
        var removedNode = previous.next;
        previous.next = removedNode.next;
        this.length--;
        return removedNode;
        //take previous to deleted one's next

    }
    
    //reverse a singly linked list in place. 
    //start from tail and assign each next to the tail.(keep adding at the left )
    reverse(){
        var node = this.head;
        this.head = this.tail; //swap head and tail.
        this.tail = node;

        var prev = null;//tail.next was null
        var nextNode;

        for(var i=0; i < this.length; i++){
            nextNode = node.next;
            node.next = prev;
            prev = node;
            node = nextNode;
        }
        return this;         
    }
    
    //helper to check effect of reverse
    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    traverse(){
        var current = this.head;
        while(current){//same as current != null
            console.log(current.val);
            current = current.next;
        }  
    }
}

//BIG-O Analysis
/*
1. Insertion - O(1) only add at the end. update single next
2. Removal - O(1) if removing the head
           - O(N) if removing the tail
3. Searching - O(N) start at beginning and keep taking next in search.(No Random Access)
4. Access - O(N). (No random Access)

IDEAL FOR INSERTION AND DELETION OPERATION.
*/

var list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye")
list.push("!")
list.push(5);


list.pop();
list.traverse();