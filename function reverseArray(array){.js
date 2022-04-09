function reverseArray(array){
	let tempArray= [];
  	for(i=array.length-1;i>=0; i--){
    	tempArray.push(array[i]);
      
    }
  return tempArray;
  
}


function reverseArrayInPlace(array){
    let x=0;
  	let y=array.length -1;
  	let temp= 0;
  while(x<y){
    	temp =array[x];
    	array[x]=array[y];
    	array[y] =temp; 
    x++;
    y--;
    }
  return array;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]