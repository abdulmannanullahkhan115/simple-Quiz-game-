import inquirer from "inquirer";

console.log("welcome to quiz examinations")
console.log("you have limited time to finish these questions")
let points=0;
let question1=await inquirer.prompt(
    {
    name:"question",
    type:"list",
    message:"who is the current chief minister of sindh",
    choices:["Murad Ali Shah","Kamran Tessori","Qaim Ali Shah"]
    }
)
if(question1.question=="Murad Ali Shah"){
   console.log("correct answer")
   ++points
}
else{
    console.log("your answer is wrong")
};

let question2=await inquirer.prompt({
    name:"question",
    type:"list",
    message:"When was ruins of Moen-jo-Daro discovered:",
    choices:["1922","1948","1889"]
})
if(question2.question=="1922"){
   console.log("correct answer")
   ++points
}
else{
    console.log("your answer is wrong")

};

let question3=await inquirer.prompt({
name:"question",
type:"list",
message:"What is CPEC stands for::",
choices:["China Pakistan Economic Coorporation","China Pakistan Economic Cooridor","china pakistan economic coordination"],
})
if(question3.question=="China Pakistan Economic Cooridor"){
   console.log("correct answer")
   ++points
}
else{
    console.log("your answer is wrong")
};

let question4=await inquirer.prompt(
    {  
    name:"question",
    type:"list",
    message:"Where is largest salt mine in pakistan:",
    choices:["Karachi","Khewra","Quetta"],
    }
 )
    if(question4.question=="Khewra"){
       console.log("correct answer")
       ++points
    }
    else{
        console.log("your answer is wrong")
    };

    let question5=await inquirer.prompt(
        {
        name:"question",
        type:"list",
        message:"Quaid-e-Azam was born in:",
        choices:["Karachi","Peshawar","Quetta"],
        })
        if(question5.question=="Karachi"){
           console.log("correct answer")
           ++points
        }
        else{
            console.log("your answer is wrong")
        }

        let question6=await inquirer.prompt({
            name:"question",
            type:"list",
            message:"What is the official name of pakistan according to goverment Data:",
            choices:["Republic of Pakistan","State of Pakistan","Islamic Republic of Pakistan","Quetta"],
            })
            if(question6.question=="Islamic Republic of Pakistan"){
               console.log("correct answer")
               ++points
            }
            else{
                console.log("your answer is wrong")
            };

            if(points>=3){
            console.log("Congrats you secured marks")
            console.log(`your points: ${points}`)
        }
            else{
                console.log("you lose try next time")
                console.log(`your points: ${points}`)
            }










