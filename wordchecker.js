function checkSentence() {
  var sentence = document.getElementById("sentence").value;
  var letter = document.getElementById("letter").value;
  var index = sentence.indexOf(letter);
  if (index === -1) {
    document.getElementById("result").innerHTML = "The letter does not exist in the sentence";
  } else {
    document.getElementById("result").innerHTML = sentence.slice(index + 1);
  }
}
