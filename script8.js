//let name = window.prompt("Enter string = ");
let name ="    Lorem Ipsum   mm  ";
//console.log("Name ="+name);
let trimName = name.trim();
//console.log("Name ="+trimName);
//console.log("Len ="+trimName.length);
let count=0;
for(let i=0;i<trimName.length;i++){
  if(trimName.charCodeAt(i) == 32)
    count++;
}
let n= trimName.length - count;
//console.log("Len ="+s);

if(n<0)
  console.log("***Error***");  
else if(n==0)
  console.log("0");
else
  console.log(n);