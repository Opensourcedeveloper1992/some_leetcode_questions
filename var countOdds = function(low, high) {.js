var countOdds = function(low, high) {
    let count=0;
    ;
    
    While(high>low){
        
        if(low%2=1){
           count++;
            
            low++;
           }
        else {
           
            low++;
        }
    }
    return count;
}