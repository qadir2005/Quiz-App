//  Function of Quiz Question
const quizQuestion = [
    {
        question : "Q=> What does HTML stand for? ",
        1 : "Hyper Text Markup Language",
        2 :"High Text Markup Language",
        3 :"Hyperlinking Text Marking Language",
        4 :"Hyper Transfer Markup Language",

        corrAns : 1 
    },
    {
        question : "Q=> Which tag is used to insert an image in HTML? ",
        1 : "<image>",
        2 :"<img>",
        3 :"<pic>",
        4 :"<photo>",

        corrAns : 2 
    }
]

// Selection of Question and its option
let question = document.querySelector(".question");
let options = document.getElementsByName("option")
let btn = document.getElementById("btn");
let quesNm = document.querySelector("#quNo");
let questions = document.querySelector(".questions");
// options Selection
let option1 = document.getElementById("options1")
let option2 = document.getElementById("options2")
let option3 = document.getElementById("options3")
let option4 = document.getElementById("options4")

// Quiz start setting
question.innerText = "HTML Quiz Start"
btn.style.background = "green"
btn.innerText = "Start"
questions.style.display = "none"
let optionhide = document.querySelector(".options")
// Array Index
let index = 0;
//Answer counting
let correct = 0;
let wrong = 0;

const quesDisplay = () =>{
questions.style.display = "block"
optionhide.style.display = "flex"
    
if(index <quizQuestion.length){
        
        // question display
        question.innerHTML = `${quizQuestion[index]["question"]}`;
        
        // option display
        option1.innerText = quizQuestion[index][1]
        option2.innerText = quizQuestion[index][2]
        option3.innerText = quizQuestion[index][3]
        option4.innerText = quizQuestion[index][4]
    // button setting
    btn.innerText = "next"
    btn.style.background = "#10439f"

    
}
    else{
        btn.innerText = "Result";
        btn.style.background = "green";
    }
    
    
    index ++
    // add Question Number
    quesNm.innerText = index;
    

    // function calling
    correctAns
} 


let userAns = ()=>{
    let selectOption;
    options.forEach((option) =>{
        if(option.checked){
            selectOption = +option.value;
        }
    })
    return selectOption
}
let correctAns = () => {
    console.log("abc");
    let answer = quizQuestion[index]["corrAns"]
    let selectAns = userAns()
    if(selectAns === answer){
        correct++
        console.log("value barrhi ha");
    }
    else{
        console.log("value ha");
        wrong++
    }
    console.log(correct);
    console.log(wrong);

}
btn.addEventListener("click", quesDisplay)