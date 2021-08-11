//Business Logic-------------
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// User Interface Logic--------------
function boldPassage(word, text) {
  if (word === text) {
    return "<p><b>" + text + "</b></p>"
  } else 
  return "<p>" + text + "</p>"
}

$(document).ready(function() {
  $("form#word-counter").submit(function(event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrenceOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrenceOfWord);
  });
});