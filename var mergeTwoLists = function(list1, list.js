var mergeTwoLists = function(list1, list2) {
    
    let list3 =[];
        for(i=0; i<list2.length; i++){
           console.log(list3);
        list3 = list1.push(list2[i]);
            console.log(list3)
        }
        
        //list3.sort(function(a, b){return a - b}); 
      //  console.log(list3);
        return list3;
        
        
    };

    let list1 =[1,2,3,4];
    let list2 =[1,5,6,7,8,9];
   console.log( mergeTwoLists(list1,list2));
   