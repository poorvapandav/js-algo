
   
  

  
function DoublyLinkedList(){
    this.head = null;
 }
 
 DoublyLinkedList.prototype.push = function(val){
    var head = this.head,
        current = head,
        previous = head;
   if(!head){
       this.head = {value: val, previous:null, next:null };
   }
   else{
       while(current && current.next){
          previous = current;
          current = current.next;
       }     
      current.next = {value: val, previous:current, next:null}
   }  
 }
        
 

 var dll = new DoublyLinkedList();
 dll.push(2);
 dll.push(3);
 dll.push(4);
 dll.push(5);


 var printLinkedList = function(list)
 {
    var head = list.head;
   while(1)
    {
        console.log("List value:"+ head.value);
        if(head.next){
            head=head.next;
        }
        else{
            break;
        }
    }
 }
 /*You are given a linked list and a parameter k. You will have to swap values in a certain fashion, swap value of node 1 with node k, then node (k+1) with node 2k and go on doing this in the similar fashion*/

 var swapAllValues =function(list, k){
     head=list.head.next;
     var n1,n2;
     console.log("list before swap :");
     printLinkedList(list);
     resetToStart(list);
     
        for(var i=1;i<=list.length;i++)
        {
            if(i==1)
            {
                n1=head;
            }

            if(i%k==0)
            {
                n2= head;
                swapValue(n1,n2);
                n1=head.next;
            }
            if(head.next){
                head=head.next;
            }
        }
        console.log("list after swap");
        resetToStart(list);
        printLinkedList(list);
 }

 var swapValue = function(node1,node2){
     var temp = node1.value;
     node1.value=node2.value;
     node2.value=temp;
 }


 var swap =function(node1,node2){
     var tempPrev = node1.previous;
     var tempNext = node1.next;
    node1.previous=node2.previous;
    node1.next=node2.next;
    node2.previous=tempPrev;
    node2.next=tempNext;
 }

 var resetToStart = function(list){
     while(list.head.previous){
         head = head.previous;
     }
 }

