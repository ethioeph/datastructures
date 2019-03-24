class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(!this.root){//no root, then make node new root
            this.root = newNode;
            return this;//return entire tree, could optionally just return the root
        }
        else{
            var current = this.root;
            while(true){
                if(value === current.value) return undefined; //ignores duplicates.
                if(value < current.value){
                    if(!current.left){//found right spot
                        current.left = newNode;
                        return this;
                    }
                    current = current.left; //keep traversing
                } 
                else if(value > current.value){
                    if(!current.right){
                        current.right = newNode;           
                    } 
                    current = current.right;        
                }               
            }
        }
    }
    //takes advantage of knowledge of how data is stored.
    find(value){
        if(!this.root) return false;
        var current = this.root;
        var found=false;
        while(current && !found){ //keep going until hit a dead end or found node with value
            if(value < current.value){
                current = current.left;
            }
            else if(value > current.value){
                current = current.right;
            }
            else{//found the node (value ===current.value)
                found = true;
            }
        }
        if(!found) return false;//hit dead end without finding it.
        return current;
    }   
    
    //use array to model a Queue (FIFO)
    BFS(){
        var queue = [];//holds parents of next layer of nodes to be visited
        var visited = [];//will hold nodes in BFS visit order
        var node = this.root;
        queue.push(node);

        while(queue.length){
            node = queue.shift(); //remove first in 
            visited.push(node); //enqueue children of visited node
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return visited;    
    }
    
    //node, left, right
    DFS_PreOrder(){
        var visited = [];
        //recursive helper function
        function traverse(node){
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
    
    //left, right, node
    DFS_PostOrder(){
        var visited = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value); // explore node after exploring all its children
        }
        traverse(this.root);
        return visited;
    }
    
    //leftmost, node, right
    DFS_InOrder(){
        var visited = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            visited.push(node.value); 
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }

}


/*
BIG O Analysis
1. Insertion - O(log n) 
2. Search - O(log n)

Disclaimer: The performance above holds only if the tree is balanced.
*/


/*
BFS vs DFS
1. If there are very deep branches (1 or 2) you will have to save a lot of nodes onto the call stack during traversal, so may be better to use BFS. 
2. If too many nodes at each layer (wide) better to use DFS becuase only have to keep track of one branch.
*/

var tree = new BinarySearchTree();
/*
tree.root = new Node(10);
tree.left = new Node(8);
tree.left.left = new Node(5);
tree.right = new Node(15);*/

tree.insert(10);
tree.insert(5);
tree.insert(11);
tree.insert(11);
tree.insert(13);
tree.insert(6);
tree.insert(4);
/*
        10
    5       11
4      6        13     
*/

tree.DFS_PreOrder();
tree.DFS_PostOrder();
tree.DFS_InOrder();