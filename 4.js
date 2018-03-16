function arrayToList(a){
  	let list = {};
	list.value=a[0];
    if(a.length==1){
    	list.rest=null;
    }else list.rest=arrayToList(a.slice(1));     
  	return list;
}
function listToArray (list){
	let array =[];
  	array.push(list.value);
  	if (list.rest) array = array.concat(listToArray(list.rest));
  return array;
}

function prepend (a, old_list){
let list={};
  list.value=a;
  list.rest=old_list;
  return list;
}

function nth (list, a){
	counter=0;
  	if (counter==a){
    return list.value;
    }else{
    return nth(list.rest, a-1);
    }
}
console.log(arrayToList([10, 20, 30]));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// ? [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// ? 20