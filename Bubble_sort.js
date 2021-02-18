// Write a program to sort a array using bubble sort

let arr=[9,1,3,2,5,4];
let is;
let len=arr.length;
console.log('Array-->',arr);
for(let i=len; i>0;i--)
{
    console.log(i);
    is=false;
     for(let j=0;j<i-1;j++)
     {
        
         if(arr[j]>=arr[j+1])
         {
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            console.log(arr);
            is=true;
         }
         

     }
     if(!is)
     {
         break;
     }
    }
