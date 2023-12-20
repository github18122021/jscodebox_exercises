
// A string string is given. Replace every occurrence of the word 'bug' with the word 'flower'.

function bugFix(string) {
    while(string.includes("bug")) {
        let index = string.indexOf("bug");

        let modifiedStr = string.slice(0, index) + 'flower' + string.slice(index+3);
        string = modifiedStr;
        console.log(modifiedStr);
    }

    return string;
  }

// function bugFix(string) {
//     return string.replaceAll("bug", "flower");
// }

//   console.log(bugFix('xxbugXYYYy'));


// function findReplace(string, findWord, replaceWord) {
//     while(string.includes(findWord)) {
//         let index = string.indexOf(findWord)
//         let modifiedStr = string.slice(0, index) + replaceWord + string.slice(index + findWord.length);
//         string = modifiedStr;
//     }

//     return string;
// }

// console.log(findReplace("xxbugxYYYy", 'bug', 'flower'));
// console.log("Hello World", "World", "Universe");


