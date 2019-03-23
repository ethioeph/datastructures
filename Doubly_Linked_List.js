class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){//could check if this.length = 0
            this.head = newNode;
            this.tail = newNode;   
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode; //note: newNode points to null during creation            
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return undefined;
        }
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
             
        }
        else{
            this.tail = poppedNode.prev;
            this.tail.next = null; //severing ties forward then backward
            poppedNode.prev = null;             
        }
        this.length--;
        return poppedNode;
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        if(index <= this.length/2){
            //Working from Start
            var count = 0;
            var current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
    } else{
        var count = this.length - 1;
        var current =  this.tail;
        while(count !== index){
            current = current.prev;
            count--;
        }
    }
    return current;
    }
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);
        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >=this.length) return undefined;
        if(index===0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

//BIG-O Analysis
/*
1. Insertion - O(1) only add at the end. update single next
2. Removal - O(1) if removing the head
           - O(1) if removing the tail
           - O(1) for other items because never have to traverse entire list for removal
3. Searching - O(N/2) ~ O(N)
4. Access - O(N). (No random Access)

IDEAL FOR INSERTION AND DELETION OPERATION.
However, comes at the cost of having using more memory for the additional previous pointers.
*/
var list = new DoublyLinkedList();
list.push("H");
list.push("O");
list.push("M");
list.push("E");

list.set(1, "o"); //turn lowercase