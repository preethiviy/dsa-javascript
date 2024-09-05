class Node {
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
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }else {
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                } else {
                    return undefined;
                }
            }
        }
    }

    find(value){
        if(!this.root) return false;

        let current = this.root;
        let found = false;

        while(current && !found){
            if(value < current.value){
                current = current.left
            } else if(current > current.right){
                current = current.right;
            } else{
                found = true
            }
        }
        if(!found) return undefined;
        return current;
    }

    bfs(){
        let data = [], queue = [], node = this.root;
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }

        return data;
    }

    dfsPreorder() {
        let data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

    dfsPostorder() {
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(this.root);
        return data;
    }

    dfsInorder() {
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }
}