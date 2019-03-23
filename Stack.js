//Stack Implementation.

class Node{
    constructor(value){
        this.value = value;
        this.next = null;

    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode
        }
        else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;       
    }
    pop(){
        if(!this.first){//nothing in stack
            return null;
        }
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


//Big O analysis
/*
1. PUSH - O(1) simply add to top of stack
2. POP - O(1) simply remove top element of stack
*/


var stack = new Stack();
stack.push(10);
stack.push(11);
stack.push(12);

stack.pop();