let no1=parseInt(window.prompt("enter the pallindrom series"))
//let no1=24
let count1=0;
for(let no2=1;no2<=no1;no2++){
  var a1,no,b1,temp=0;
  no=no2;
  b1=no;
  while(no>0)
  {
    a1=no%10;
    no=parseInt(no/10);
    temp=temp*10+a1;
  }
  if(temp==b1)
  {
    // console.log("Palindrome number"+no2);
    count1++;
  }
  // else
  // {
  //    console.log("Not Palindrome number"+no2);
  // }
}
console.log(count1)