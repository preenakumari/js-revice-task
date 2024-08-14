var num = Number(prompt("enter your first Number"))
var num1 = Number(prompt("enter your second Number"))
var sign = prompt("enter arthimstic operators like +,-,*,/")
if(sign==='+'){
    console.log(num+" + "+num1+" = "+(num+num1))
}
else if(sign==='-'){
    console.log(num+" - "+num1+" = "+(num-num1))
}
else if(sign==='*'){
    console.log(num+" * "+num1+" = "+(num-num1))
}
else if(sign==='/'){
    console.log(num+" / "+num1+" = "+(num-num1))
}
 else{
    alert("you enter wrong sign")
 }


