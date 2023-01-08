const array=[20,-10,333,1000,552,7,-7];
function evenOddSort(array){
    array.sort(function(e1,e2){
        let rem1=Math.abs(e1%2);
        let rem2=Math.abs(e2%2);
       return res=rem1-rem2;
    });
    return array;
}
console.log(`TASK 1:evenOddSort Test`);
console.log(`Unsorted array is ${array}`);
console.log(`Sorted array by evenOddsort function,when even symbols are the first ${evenOddSort(array)}`);
console.log('***************************************************************************************************************');
function oddEvenSort(array){
    array.sort(function(e1,e2){
        let rem1=Math.abs(e1%2);
        let rem2=Math.abs(e2%2);
       return res=rem2-rem1;
    });
    return array;
}
console.log(`TASK 1.2:oddEvenSort Test`);
console.log(`Unsorted array is ${array}`);
console.log(`Sorted array by evenOddsort function,when odd symbols are the first ${oddEvenSort(array)}`);
console.log('***************************************************************************************************************');

function evenAscOddDesc(array){
    array.sort(function(e1,e2){
        let rem1=Math.abs(e1%2);
        let rem2=Math.abs(e2%2);
        let res=rem1-rem2;
       if(!res){
       if(rem1<=0 && rem2<=0){
        res=e1-e2;
       }else{
        res=e2-e1;
       }
       }
       return res;
    });
    return array;
}
  


console.log(`TASK 1.3:evenAscOddDesc Test`);
console.log(`Unsorted array is ${array}`);
console.log(`Sorted array by evenAscOddDesc function Test,exp return -10,20,552,1000,333,7,-7: ${evenAscOddDesc(array)}`);
console.log('***************************************************************************************************************');
const array2=[1000,1,2,-100,-250,11];
const ar3=[10,20,30];

function getMin(array){
    const res=array.reduce(function(res,cur){
        return res<cur ? res:cur;
    });
    return res;
}
console.log(`TASK 2.1:getMinTest`);
console.log(`Unsorted array is ${array2}`);
console.log(`getMin Test,expected:-250 ${getMin(array2)}`);
console.log('***************************************************************************************************************');

function getMax(array){
    const res=array.reduce(function(res,cur){
        return res>cur ? res:cur;
    });
    return res;
}
console.log(`TASK 2.1:getMinTest`);
console.log(`Unsorted array is ${array2}`);
console.log(`getMax Test,expected:1000 ${getMax(array2)}`);
console.log('***************************************************************************************************************');

function getAvg(array){
    const res=array.reduce(function(res,cur){
        return res+cur;
    });
    return res/array.length;
}
console.log(`TASK 2.1:getMinTest`);
console.log(`Unsorted array is ${ar3}`);
console.log(`getMax Test,expected:20 ${getAvg(ar3)}`);
console.log('***************************************************************************************************************');

function getMinMaxAvg(array){
    const res=[];
    res=array.reduce(function(res,cur){
        getMin(array);
        getMax(array);
        getAvg(array);
    });
    return res;
}
console.log(`TASK 2.1:getMinTest`);
console.log(`Unsorted array is ${ar3}`);
console.log(`getMax Test,expected:20 ${getMinMaxAvg(ar3)}`);
console.log('***************************************************************************************************************');














