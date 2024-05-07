function toJadenCase(string){
    let newString = string.charAt(0).toUpperCase();
    for (i=1; i<string.length; i++ ){
      if (string.charAt(i-1) === " "){
        newString += string.charAt(i).toUpperCase();
      }else{
        newString += string.charAt(i)
      }
    }
    return console.log(newString);
  }





const str = "how can mirrors be real if our eyes aren't real";

toJadenCase(str);

String.prototype.toJadenCase = function () {
    let newString = this.charAt(0).toUpperCase();
    for (i=1; i<this.length; i++ ){
      if (this.charAt(i-1) === " "){
        newString += this.charAt(i).toUpperCase();
      }else{
        newString += this.charAt(i)
      }
    }
    return console.log(newString);
  }
const str1 = "How can mirrors be real if our eyes aren't real";
str1.toJadenCase();

function alphabetPosition(text) {
    const lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let answer = "";
    for (i=0; i<text.length; i++){
        if (lowerAlph.includes(text.charAt(i).toLowerCase())){
            answer += lowerAlph.indexOf(text.charAt(i).toLowerCase())+1+" ";
        }
    }
    answer = answer.slice(0, -1);
    return console.log(answer);
}
alphabetPosition("Thesunsesetsattwelveoclock");
alphabetPosition("The narwhal bacons at midnight.");
