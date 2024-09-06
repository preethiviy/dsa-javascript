Binary Heap --> Very similar to BST, but with some different rules.
It is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.
In MaxBinaryHeap, parent nodes are always larger than child nodes.
In MinBinaryHeap, parent nodes are always smaller than child nodes.
The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (aka bubble-down, percolade down, sift-down, trickle down, heapify-down, cascade-down, extract-min/max).