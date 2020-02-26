let sentence=prompt('Nhap vao mot chuoi');
let UPPER='QWERTYUIOPASDFGHJKLZXCVBNM';
let lower='qwertyuiopasdfghjklzxcvbnm';
let result=[];

for (let i = 0; i <sentence.length; i++) {
    if(UPPER.indexOf(sentence[i])!==-1){
        result.push(sentence[i].toLowerCase());
    }else if (lower.indexOf(sentence[i])!==-1){
        result.push(sentence[i].toUpperCase());
    }else {
        result.push(sentence[i]);
    }
}

document.write(result.join(""));