
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
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}
let  listt =['a','b','c'];

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
  if (text === 'quit\n'||text === 'exit\n') {
    quit();
  }
  else if(text.startsWith('hello')){
    hello(text);
  }
  else if(text.startsWith('add')){
    add(text);
  }
  else if(text.startsWith('remove') && text.endsWith('\n')){
    remove(text);
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'list\n'){
    list();
  }
  else{
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
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(text.trim(" ")+'!')
  // console.log('hello!')
}


/**
 * Exits the application
 *
 * @returns {void}
 */
 function quit(){
  console.log('Quitting now, goodbye!');
  process.exit();
}
/**
 * HELP COMMAND APPLICATION
 *
 * @returns {void}
 */
 function help(){
  console.log('Help Command:\n quit or exit -> To exit The App \n hello -> hello! \n hello Your_Name -> hello your_Name!\n add  -> to add item\n remove -> to remove item \n edit -> to update an item' )

}

/**
* @returns {void}
*/
function add(text){
  let text1 = text.substring(4);
//  listt= listt.push(text1);
  if(text1.length > 0){
  listt.push(text1.trim());
  console.log(listt);
}
else { console.log("Invalid commit enter help to help you")}
}
/**
* @returns {void}
*/
function remove(text){

  let valueS = text.substring(7);
  console.log("value :"+valueS)
  console.log(listt)

  console.log(listt.length)
  let value = parseInt(valueS);
  console.log(typeof(value))
  if (value <=0 || value > listt.length || valueS == ""){
    console.log("Nothing to remove in select")}
  else if(value>0){
    listt.splice(value-1)
    console.log(`Remove Done Item `+listt)}
  else{ 
    listt.pop();
}
console.log(listt)
}

/**
* @returns {void}
*/
function list(){

  // console.log(listt)
  listt.map((index) => {
    console.log(`${listt.indexOf(index)+1} - ${index}`);
}
  )}

// The following line starts the application
startApp("Sarah Awik")
