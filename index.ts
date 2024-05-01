import inquirer from "inquirer";

// to define the type of userguess variabel
type ansType ={
    userGuess:number
    }
    //to genarate a non decimal random number
const systemGenaratedNo = Math.floor(Math.random()*10);
console.log(systemGenaratedNo);
//to get  the number from inquirer
const answer: ansType = await inquirer.prompt([
  { type: "number", name: "userGuess", message: "write your guess" },
]);
const {userGuess} =answer;
//to print the message if your  guess is correct
console.log(userGuess,"userGuess",systemGenaratedNo,"system")
 if( userGuess === systemGenaratedNo)
  {
    console.log("yeah your answer is correct");}
 else  { console.log("please try again later");}



