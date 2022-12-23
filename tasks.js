/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
 let inputjson = "./database.json";

 
  
function startApp(name) {
  // try {
  //   const data = JSON.stringify(fs.readFile('filePa/home/sarah/Documents/CODI/Node-Basics/database.json'));
  //   console.log(data);
  // } catch (error) {
  //   console.error(`Got an error trying to read the file: ${error.message}`);
  // }
  readData() 
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("-------------------");
}
// let listt = {
//   task:" WakeUP",
//    task:" Watch Movie",
//    "EatChicken",
//    "getMilking"
//   };


// inputjson = process.argv[2]

let listt = [
  { task: "WakeUP", done: true },
  { task: "Watch Movie", done: false },
  { task: "EatChicken", done: false },
  { task: "getMilking", done: true },
  { task: "EatSalad", done: true },
];
const fs = require("fs");

let arrayObject = Object.values(listt);

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === "quit\n" || text === "exit\n") {
    saveData();
    quit();
  } else if (text.startsWith("hello")) {
    hello(text);
  } else if (text.startsWith("add")) {
    add(text);
  } else if (text.startsWith("remove") && text.endsWith("\n")) {
    remove(text);
  } else if (text === "help\n") {
    help();
  } else if (text === "list\n") {
    list();
  } else if (text.startsWith("edit") && text.endsWith("\n")) {
    edit(text);
  } else if (text.startsWith("check") && text.endsWith("\n")) {
    isChecked(text);
  } else if (text.startsWith("uncheck") && text.endsWith("\n")) {
    isUnChecked(text);
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
  console.log(text.trim(" ") + "!");
  // console.log('hello!')
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  // console.log(arrayObject);
  process.exit();
}
/**
 * 
 * @returns {void}
 */
function readData() {
  fs.readFile(inputjson, (data) => {
    try{
    let tasks = JSON.parse(data);
    // console.log(arrayObject);
  }catch(error){
    console.error("Invalid -> Empty database");
  }
});
}

/**
 * Save COMMAND APPLICATION
 *
 * @returns {void}
 */
function saveData() {
  // console.log(arrayObject)
  let data = JSON.stringify(arrayObject);
  fs.writeFileSync(inputjson, data, (err) => {
    if (err) throw err;
    console.log("Complete");
  });
}
/**
 * HELP COMMAND APPLICATION
 *
 * @returns {void}
 */
function help() {
  console.log(
    "Help Command:\n quit or exit -> To exit The App \n hello -> hello! \n hello Your_Name -> hello your_Name!\n add  -> to add item\n remove -> to remove the last Item in List \n remove ---(Number Of Item)-> remove the specific Item In List  "
  );
}

/**
 * @returns {void}
 */
function add(text) {
  let text1 = text.substring(4);
  //  listt= listt.push(text1);
  if (text1.length > 0) {
    arrayObject.push({ task: text1.trim(), done: false });
    console.log(listt);
  } else {
    console.log("Invalid commit enter help to help you");
  }
}
/**
 * @returns {void}
 */
function remove(text) {
  let value = text.slice(7).trim(); //index of removed
  value = parseInt(value);
  if (value > 0) {
    arrayObject.splice(value - 1, 1);
  } else if (value <= 0) {
    console.log("You Enter A Number does not existe ");
  } else if (text.startsWith("remove")) {
    arrayObject.pop();
  }
}

/**
 * @returns {void}
 */
function list() {
  // console.log(listt)
  // arrayObject.forEach(element => );
  Object.keys(arrayObject).forEach((key) => {
    // console.log(arrayObject[key].done);

    if (arrayObject[key].done) {
      console.log(`[✓] ${arrayObject[key].task}`);
    } else {
      console.log(`[ ] ${arrayObject[key].task}`);
    }
  });
}

// async function readFile(filePath) {}
// /**
//  * @returns {void}
//  */
function isChecked(text) {
  arrayObject;
  text = text.trim();
  let key = text.split(" ");
  let keyIndex = parseInt(key[1]);
  console.log(key.length);
  console.log(key);

  if (key.length === 1) {
    console.log("Error");
  } else {
    if (!arrayObject[keyIndex - 1].done) {
      arrayObject[keyIndex - 1].done = true;
      console.log(key[0]);
    } else {
      console.log("Error-> Checked Invalid : Already Checked");
    }
  }
}
// /**
//  * @returns {void}
//  */
function isUnChecked(text) {
  text = text.trim();
  let key = text.split(" ");
  let keyIndex = parseInt(key[1]);
  console.log(key.length);
  console.log(key);

  if (key.length === 1) {
    console.log("Error");
    console.log(arrayObject[keyIndex - 1].done);
  } else {
    if (arrayObject[keyIndex - 1].done) {
      arrayObject[keyIndex - 1].done = false;
      console.log(typeof arrayObject[keyIndex - 1].done);
    } else {
      console.log("Error-> unChecked Invalid : Already UnChecked");
    }
  }
}
/**
 * @returns {void}
 */
function edit(text) {
  //  text =
  let newText = text.split(" "); //
  // console.log(listt[listt.length-1])
  let index = text.substring(6); //new message index
  if (newText.length <= 1) {
    console.log("Error !");
  } else if (isNaN(newText[1])) {
    arrayObject[arrayObject.length - 1].task = newText[1];
    console.log("Edit Done");
  } else {
    if (newText[1] > arrayObject.length) {
      console.log("Error !");
    } else {
      arrayObject[newText[1] - 1].task = index;
      console.log("Edit Done");
    }
  }
}
// The following line starts the application
startApp("Sarah Awik");
