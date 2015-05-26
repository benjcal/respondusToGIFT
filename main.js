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

//process.argv[2] is the first argument
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

// function parseLines(linesArray) {
//
//     // var isTitle = /(\d|\d\d)(\.|\))/; // match the question number, ej. '3)' or '64.'
//     // var isAnswer = /[a-z](\)|\.)/i; // match answers, ej. 'a.' or 'D)'
//     // var isCorrectAnswer = /\*[a-z](\)|\.)/i; // match correct answer(s), ej. '*B.' or '*a)'
//
//     var str = [];
//
//     for (var i = 0; i <= linesArray.length - 1; i++) {
//         if (linesArray[i].isNumber()) {
//
//             str.push(linesArray[i]);
//
//             // console.log(linesArray[i] + '\tis title');
//         }
//         if (linesArray[i].isLetter()) {
//             // console.log(linesArray[i] + '\tis answer');
//         }
//         if (linesArray[i].isCorrect()) {
//             // console.log(linesArray[i] + '\tis correct answer');
//         }
//
//     }
//     // console.log();
// }



var linesArray = linesToArray(inputFile);


console.log(linesArray);




// fs.writeFileSync(process.argv[2] += '.gift', "Hello!");



// console.log(s.slice(y["index"],s.length - 1));
// console.log(s.slice(y[0].length, s.length)); // print the string minus the length of the RegEx match

// for (var i = 0; i <= array.length - 1; i++) {
// removeSpace(linesToArray(sampleQuestion)[]);
// };


// Function to extract the parts of the questions
// function parseQuestion() {
// body...
// }


// this is a constructor for the questions

// function question(type, number, body, answers) {
//     this.questionType = type;
//     //	0: Multiple Choice, 1: True/False, 2: Essay, 3: Matching
//     //	4: Short Answers
//     this.questionNumber = number; // Number of the question
//     this.questionBody = body; // The question body
//     this.questionAnswers = answers;
// }


// var question4 = new question(0, 4, "What does IC stands for in electronics?", ["International Council", "Information Cartoon", "Integrated Circuit", "Interlooping Connector"]);


// console.log(sampleQuestion);

// console.log(question4.questionBody + "\n{\n" + "=" + question4.questionAnswers[0] + "\n=" + question4.questionAnswers[1]);

// Function to extract the parts of the questions
