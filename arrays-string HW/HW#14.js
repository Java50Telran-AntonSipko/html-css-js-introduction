let str1="pappy";
let str2="apple";
 function coloringString(str1,str2){
    const arr1=[...str1];
     const arr2=[...str2];
     const res=arr2.map(function(letter,index){
        let color='red';
        for(let i=0;i<arr1.length;i++){
            if(letter==arr1[i]){
                if(index==i){
                    color='green';
                    i=arr1.length;
                }else{
                color='yellow';
                }

            }
            
        }
        return color;

     });
     return res;
    
   
    
}

const arrr=[10,11];
function getNumbersWithDigitsAmount(digitsAmount,array){
   const ar=array.filter(function(number){
    let nDigits=countDigits(number);
       if(nDigits==digitsAmount){
        return nDigits;
       }
    
   })
   return ar;

}
function countDigits(number){
    let countDigits=0;
        do{
            number=Math.trunc(Math.abs(number/10));
            countDigits++;

        }while(number!=0)
        return countDigits;


}

console.log(getNumbersWithDigitsAmount(4,[1,100,-100,25,1000]));
console.log(coloringString('pappy','apple'));
console.log(coloringString('pappy','pappy'));









