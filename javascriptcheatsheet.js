


A Basic click event listener, which changes the text to "Hi there"
note: "div3" is just any element with text on the inside

div3.addEventListener('click', function() {
div3.firstChild.nodeValue = "Hi there"
})

//version with "this"
div3.addEventListener('click', function() {
this.firstChild.nodeValue = "Hi there"
})


Event listener with working syntax

function test() {
  x = document.querySelector('#container');
  y = document.querySelector('')

  x.addEventListener('click', function(){
      x.innerHTML = "hi there";
  });
}
test();




 -------Reverse a string (arg = str) ---

function reverseString(str) {
      var array = [""];
      for (var i = str.length-1; i >= 0; i--) {
          array.push(str.charAt(i));
          }
          console.log(array.join(""));
          }



  /*---take the str (sentence) parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. ----*/

function capitalWords(str) {
  var array = str.split(" ");
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var letterArray = array[i][0];
    var capital = letterArray.toUpperCase();
    var newString = array[i].replace(letterArray, capital);
    newArray.push(newString);
    }
  console.log(newArray.join(" "));
  }

capitalWords("sk donuts is the only kinda donuts for me");


function simpleSymbols(str) {
  var array = str.split("");
  var pwValid = [];
  for (var i = 0; i < array.length; i++) {
    var letter = array[i];
    var letterBefore = array[i-1];
    var letterAfter = array[i+1];

    if(letter.match(/[a-z]/i) && (letterAfter === "+" && letterBefore === "+")) {
      console.log(letter);
      pwValid.push(letter);
    } else if(letter.match(/[a-z]/i) && (letterAfter !== "+" || letterBefore !== "+")) {
      console.log('ya fucked up!');
      return null;
    }

    else {
      console.log(letter);
  }

}
  console.log(pwValid.join("") + " is valid");
}

simpleSymbols("+d+=+g+===+f+==+f+");

function timeConvert(num) {
  var hour = Math.floor(num/60);
  var minute = num - (hour*60);
  console.log(hour + ":" + minute);
}

timeConvert(650);

Simple function that compares two numbers and tells you whether the first is bigger than the second by returning true or false:


function compareNumbers(int1, int2) {
  if(int1>int2) {
    console.log(true);
  }
  else if(int2 >int1) {
    console.log(false);
  }
  else {
    console.log(-1);
  }
}
compareNumbers(9, 7)
