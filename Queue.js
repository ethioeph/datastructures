//Queue Implementation (FIFO)

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){//empty queue
            this.first = newNode;
            this.last = newNode;
        }else{//add to end
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


var q = new Queue();
q.enqueue("1");
q.enqueue("2");

q.dequeue(); //removes "1"

//Big O analysis
/*
1. INSERTION - O(1) adding to end of list(queue)
2. REMOVAL - O(1) removing from head of list(queue)
3. SEARCHING - O(N) need to successively remove to find value (No Random Access)
*/