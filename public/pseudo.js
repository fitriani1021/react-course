/**
 @Params str:string
 @Return boolean
 **/
function isPalindrome(str){
//remove special characters
    str = str.replaceAll(/[^a-zA-Z]/g,'');
//lowercase the string
    str = str.toLowerCase();
//get middle index
    const middle = Math.floor(str.length/2);
//split into two parts
    const left = str.substring(0, middle);
    let right = str.substring(str.length - middle);
//reverse the right string
    right = reverse(right);
//check if the length isn't same
    if(left.length != right.length){
        return false;
    }
    else{
//check the content if it's same
        return left === right;
    }
}
function reverse(word){
    let temp = []
//iterating it backward
    for (let i = word.length; i >= 0; i--) {
        temp.push(word[i]);
    }
    return temp.join('');
}
//expected:true
console.log(isPalindrome('kasur haji ijah rusak 123*234'))
console.log(isPalindrome('radar'))
console.log(isPalindrome('katak'))
console.log(isPalindrome('kodok'))
//expected: false
console.log(isPalindrome('123'))