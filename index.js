
function Highlight() {
    let string = document.getElementById("text").innerText;
    let str = string.split(" ");
    const neededLength = 8;
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > neededLength) {
            R(str[i]);
        }
    }

}
function R(text) {
    let inputText = document.getElementById("text");
    let innerHTML = inputText.innerHTML;
    let index = innerHTML.indexOf(text);
    if (index >= 0) {
        innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
        inputText.innerHTML = innerHTML;
    }
}
function Count(){
    let string = document.getElementById("text").innerText;
    let number=0;
    for(let i = 0; i < string.length; i++){
      if (string[i]==" "){
        number++;
      }
    }
    number++;
    alert("There are " + number + " words");
}
function Split(){
    let string = document.getElementById("text").innerText;
        let str1 = string.replaceAll('.',".\n");

    document.getElementById("text").innerText = str1;
}
function Reaction(){
    let string = document.getElementById("text").innerText;
    let str1 = string.replaceAll('?',"🤔");
    document.getElementById("text").innerText = str1;
    let string1 = document.getElementById("text").innerText;
     let str2 = string1.replaceAll('!',"😮");
    document.getElementById("text").innerText = str2;
}
