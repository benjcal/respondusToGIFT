#!/usr/bin/env node
"use strict";

// Add methods to String.prototype
String.prototype.isNumber = function() {
    var isNumberRegEx = /^(\d|\d\d)(\.|\))/;    // this is limited to 99
    return isNumberRegEx.test(this);
}
String.prototype.isLetter = function() {
    var isLetterRegEx = /^[a-z](\)|\.)/i;
    return isLetterRegEx.test(this);
}
String.prototype.isCorrect = function() {
    var isCorrectRegEx = /^\*[a-z](\)|\.)/i;
    return isCorrectRegEx.test(this);
}
String.prototype.isAnswerLine = function() {
    var isAnswerRegEx = /^answer\:/i;
    return isAnswerRegEx.test(this);
}
String.prototype.isTypeLine = function() {
    var isTypeRegEx = /^type\:/i;
    return isTypeRegEx.test(this);
}
String.prototype.isFeedbackLine = function() {
    var isFeedbackRegEx = /^\@/;
    return isFeedbackRegEx.test(this);
}
String.prototype.removeExtraSpace = function() {
    var start = 0;
    var end = this.length;
    while (/\s/.test(this[start])) {
        start++;
    }
    while (/\s/.test(this[end - 1])) {
        end--;
    }

    return this.slice(start, end + 1);
}

var fs = require('fs');

// var inputFile = fs.readFileSync(process.argv[2], 'utf8');
var inputFile = fs.readFileSync("sampleQuestion.txt", 'utf8');

function linesToArray(str) { // separate input string into an array of lines
    var line = "";
    var tempLines = [];
    var lines= [];
    for (var i = 0; i <= str.length - 1; i++) {
        line += str[i];
        if (/\n/.test(str[i])) { // test for new line characters
            line = line.removeExtraSpace();
            tempLines.push(line.slice(0, line.length - 1));
            line = "";
        }
    }
    // remove empty array elements
    for (var i = 0; i < tempLines.length; i++) {
        if (!(/\s/.test(tempLines[i]))) {
            continue;
        }
        else {
            lines.push(tempLines[i])
        }
    }
    return lines;
}

function question(number, type, title, answers) {
    this.questionNumber = number;
    this.questionType = type;
    this.questionTitle = title;
    this.questionAnswers = answers;
}

// Function to indentify the question type
// MC = Multiple Choice
// TF = True/False
// MR = Multiple Response/Answer
// FB = Fill in the Blank/Short Answer
// ES = Essay/Paragraph
function questionType() {

}



var questions = [];

questions.push(new question(1, "MC", "Who's the coolest?", ["none", "to much proudness here", "such person doesn't exist", "lol"]));
questions.push(new question(2, "TF", "Is there a moon?", ["maybe?", "who's \"a moon\"", "meh..."]));

console.log(questions);


// var linesArray = linesToArray(inputFile);
//
// console.log(linesArray);




// fs.writeFileSync(process.argv[2] += '.gift', "Hello!");
