/*
* @author - Kyle Jeffreys
* @file - FAQ00.js - File to create FAQ class for working with FAQ objects in
            Q&A forum list made up of FAQ objects.
*/
var fs = require('fs');

// C1 : The class should prevent concurrent read/write (e.g. lost updates)

// C2 : A Q&A is described by the following attributes: question, answer, tags,
//       author, date, and id (any ID impl as long as unique IDs per object)

// C3 : The persistent store for the Q&A service must be a JSON file named
//      'QA.json' and in the same directory as FAQ00.js. Execute with test cases
//       and verify all test cases (used, not possible) pass.

// C4 : No user interface is needed, but there must be a specified API for 
//      object types used in a README.txt, and provide example starting files 
//      and a sample test case of each service. i.e., provide examples of how
//     instantiate the service object and how to invoke it to for manual testing.

// C5: Use the synchronous file I/O features in NodeJS



/*
* NOTE: JS classes, introducted in ECMAScript2015, are syntactical sugar over
* JS's existing prototype-based inheritance. The class syntax does NOT introduce
* a new object-oriented inheritance model to JS.
*
* Attributes defined by (C2)
// C2 : A Q&A is described by the following attributes: question, answer, tags,
//       author, date, and id (any ID impl as long as unique IDs per object)
*/
class QA {
    constructor(question, answer, tags, author, date, id) {
        this.question = question;
        this.answer = answer;
        this.tags = tags;
        this.author = author;
        this.date = date;
        this.id = id;
    }

    // R1: The ability to write a Q&A to a persistent store (for now, QA.json)
    writeJson() {
        let fd = fs.openSync('test.json', 'w');
        fs.writeSync(fd, JSON.stringify(this), null, null);
        fs.closeSync(fd);
    }

    // R2: The ability to update the content (answer text) of an existing Q&A from 
    //      existing persistent store (QA.json)
    updateAnswer(id, newAnswer) {
        let qaArray = new Array();
        fs.readFile('./QA.json', function(err, data) {
            if (err) {
                console.log("Failed to open QA file.");
            }
            else {
                console.log("Reading QA.json...");
                qaArray = JSON.parse(data);
                console.log("qaArray copied into memory");
                console.log(qaArray);
                console.log("qaArray[0].id: " + qaArray[0].id);
                console.log("typeof qaArray[0].id: " + typeof qaArray[0].id);
                //let selectIndex = qaArray.indexOf(qa => qa.id == id);
                let selectIndex = qaArray.findIndex(qa => qa.id === id);
                console.log(selectIndex);
                qaArray[selectIndex].answer = newAnswer;
                console.log("Updated entries");
                console.log(qaArray);
                let fd = fs.openSync("./test.json", "w");
                fs.writeSync(fd, JSON.stringify(qaArray), null, null);
                fs.closeSync(fd);

            }
        });

    }
    
}


// R3: The ability to update the tags for a Q&A from ... (QA.json)

// R4: The ability to delete a Q&A from ... (QA.json)

// R5: The ability to return a collection of Q&As based on a filter, where the
//      filter checks for one or more of the following criteria:
//      a) Author b) Date Range (start, end) c) Tags


var myFaq= new QA('myQuestion?', 'myAnswer', 'myTags', 'myAuthor', 'myDate',
                    '000001');

console.log(myFaq);
myFaq.writeJson();
myFaq.updateAnswer(1567311476931.9548, 'This is the test for answer update.');

/*
fd = fs.openSync('test.json', 'w');
fs.writeSync(fd, JSON.stringify(myFaq), null, null);
fs.closeSync(fd);
*/



