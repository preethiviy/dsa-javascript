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
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            //current tail(which is node) next
            this.tail.next = newNode;
            newNode.prev = this.tail;
            //update the tail
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return undefined;
        }
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;
    }

    shift(){
        if(!this.head) return undefined;

        let oldHead = this.head;
        
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;

        return oldHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        if(index <= this.length/2){
            let count = 0;
            let current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        }else{
            let count = this.length - 1;
            let current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        
        return current;
    }

    set(index, value){
        let foundNode = this.get(index);

        if(foundNode){
            foundNode.val = value;
            return true;
        }
        
        return false;
        
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;

        if(index === this.length){
            return !!this.push(val); //convert to boolean
        }

        if(index === 0){
            return !!this.unshift(val); //convert to boolean
        }

        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;

        newNode.next = afterNode;
        afterNode.prev = newNode;
        
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length - 1){
            return this.pop();
        }
        if(index === 0){
            return this.shift(val);
        }

        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        this.length--;
        return removed;
    }
}