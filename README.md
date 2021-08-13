# Text Analyzer

#### TDD Practice for Epicodus, 8/13/2021

#### By Lucian Miller

## Description

Enter a passage to learn how many words are in it. You can also check how many of a single word is in the passage. This program was made to learn TDD.

## Setup/Installation Requirements

* Clone this repository
* Open file
* Open index.html
* Enter a passage
* Enter a specific word (optional)
* Press the Submit button

# Specs

Describe: wordCounter()
 
Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1
 
Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2
 
Test: "It should return 0 for an empty string."
code: wordCounter("");
Expected Output: 0
 
Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("             ")
Expected Output: 0
 
Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19")
Expected Output: 2
 
Describe: numberOfOccurrencesInText()
 
Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0
 
Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1
 
Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0
 
Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4
 
Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3
 
Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3
 
Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!"
wordCounter(word, text);
Expected Output: 0


## Known Bugs

No known bugs as of this version

## Support and contact details

lucian.miller185@gmail.com

## Technologies Used

* git
* VS code
* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

*This software is licensed under the MIT license*

Copyright (c) 2021 Lucian Miller
