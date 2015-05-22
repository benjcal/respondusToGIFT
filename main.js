// Sample Multiple Choice question
/*	3) Who determined the exact speed of light?

			a. Albert Einstein
			*b. Albert Michelson
			c. Thomas Edison
			d. Guglielmo Marconi
			*/

/******** RegEx ********
RegEx to match the question number
		var __newVar__20150522181658327136 = ;
		/(\d|\d\d)(\.__newVar__20150522181658327136|\))/

RegEx to match the answers
		/[a-z](\)|\.)/i

RegEx to match the correct answer
		/\*[a-z](\)|\.)/i

		**************************/

// var patt = /(\d|\d\d)(\.|\))/; // RegEx to match the question number

// Function to delete unwanted white space from the begining of the line
function removeSpace(str) {
    var counter = 0;
    while (/\s/.test(str[counter])) {
        counter++;
    }
    return str.slice(counter, str.length)
}

// Function to separate string into lines
function linesToArray(str) {
    var line = "";
    var lines = [];
    for (var i = 0; i <= str.length - 1; i++) {
        line += str[i];
        if (/\n/.test(str[i])) { // test for new line characters
            lines.push(removeSpace(line.slice(0, line.length - 1)));
            line = "";
        }
    };
    return lines;
}

var sampleQuestion = "         3) Who determined the exact speed of light?\n            a. Albert Einstein\n*b. Albert Michelson\n            c. Thomas Edison\nd. Guglielmo Marconi"


// console.log("Hello World!");
// console.log(linesToArray(sampleQuestion));

var lineArray = linesToArray(sampleQuestion);

var isTitle = /(\d|\d\d)(\.|\))/;
var isAnswer = /[a-z](\)|\.)/i;
var isCorrectAnswer = /\*[a-z](\)|\.)/i;


for (var i = 0; i <= lineArray.length - 1; i++) {
    if (isTitle.test(lineArray[i])) {
        console.log(lineArray[i] + '\t\tis title')
    }
    if (isAnswer.test(lineArray[i])) {
        if (isCorrectAnswer.test(lineArray[i])) {
            console.log(lineArray[i] + '\t\tis correct answer')
            continue;
        }
        console.log(lineArray[i] + '\t\tis answer')
    }
};

// console.log(isAnswer.test(lineArray[2]));

// console.log(isAnswer.exec(lineArray[1]));

var s = 'a. l thisi s e. ';
var y = isAnswer.exec(s)

// console.log(s.slice(y["index"],s.length - 1));
console.log(s.slice(y[0].length, s.length)); // print the string minus the length of the RegEx match

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