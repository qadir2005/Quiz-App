//  Array for Quiz Question,
const htmlQuiz = [
    {
        question : "Q=>1 What does HTML stand for? ",
        1 : "Hyper Text Markup Language",
        2 : "High Text Markup Language",
        3 : "Hyperlinking Text Marking Language",
        4 : "Hyper Transfer Markup Language",
        correct : 1 
    },
    {
        question : "Q=>2 Which tag is used to insert an image in HTML? ",
        1 : "<image>",
        2 : "<img>",
        3 : "<pic>",
        4 : "<photo>",
        correct : 2 
    },
    {
        question : "Q=>3 What is the correct HTML tag for the largest heading? ",
        1 : "<h1>",
        2 : "<h6>",
        3 : "<head>",
        4 : "<header>",
        correct : 1 
    },
    {
        question : "Q=>4 Which HTML attribute is used to define inline styles? ",
        1 : "class",
        2 : "style",
        3 : "styles",
        4 : "font",
        correct : 2
    },
    {
        question : "Q=>5 How can you make a numbered list? ",
        1 : "<ol>",
        2 : "<ul>",
        3 : "<li>",
        4 : "<list>",
        correct : 1
    },
    {
        question : "Q=>6 What is the correct HTML for creating a hyperlink? ",
        1 : "<a>http://www.example.com</a>",
        2 : "<a href='http://www.example.com'>Example</a>",
        3 : "<a url='http://www.example.com'>Example</a>",
        4 : "<a link='http://www.example.com'>Example</a>",
        correct : 2
    },
    {
        question : "Q=>7 How can you open a link in a new tab/browser window? ",
        1 : "<a href='url' target='_blank'>",
        2 : "<a href='url' target='new'>",
        3 : "<a href='url' new>",
        4 : "<a href='url' target='new_tab'>",
        correct : 1
    },
    {
        question : "Q=>8 Which of these elements are all <table> elements? ",
        1 : "<table><head><tfoot>",
        2 : "<table><tr><td>",
        3 : "<table><tr><tt>",
        4 : "<thead><body><tr>",
        correct : 2
    },
    {
        question : "Q=>9 What is the correct HTML for adding a background color? ",
        1 : "<body bg='yellow'>",
        2 : "<body style='background-color:yellow;'>",
        3 : "<background>yellow</background>",
        4 : "<body background='yellow'>",
        correct : 2
    },
    {
        question : "Q=>10 How do you add a comment in HTML? ",
        1 : "// This is a comment",
        2 : "' This is a comment",
        3 : "<!-- This is a comment -->",
        4 : "<comment> This is a comment </comment>",
        correct : 3
    },
    {
        question : "Q=>11 Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed? ",
        1 : "alt",
        2 : "title",
        3 : "src",
        4 : "longdesc",
        correct : 1
    },
    {
        question : "Q=>12 Which doctype is correct for HTML5? ",
        1 : "<!DOCTYPE html>",
        2 : "<!DOCTYPE HTML5>",
        3 : "<!DOCTYPE html PUBLIC '-//W3C//DTD HTML 5.0//EN'>",
        4 : "<!DOCTYPE html SYSTEM 'about:legacy-compat'>",
        correct : 1
    },
    {
        question : "Q=>13 Which HTML element is used to specify a footer for a document or section? ",
        1 : "<bottom>",
        2 : "<footer>",
        3 : "<section>",
        4 : "<foot>",
        correct : 2
    },
    {
        question : "Q=>14 In HTML, which attribute is used to specify that an input field must be filled out? ",
        1 : "placeholder",
        2 : "formvalidate",
        3 : "required",
        4 : "validate",
        correct : 3
    },
    {
        question : "Q=>15 What is the correct HTML element for playing video files? ",
        1 : "<video>",
        2 : "<media>",
        3 : "<movie>",
        4 : "<play>",
        correct : 1
    },
    {
        question : "Q=>16 What is the correct HTML element for playing audio files? ",
        1 : "<sound>",
        2 : "<audio>",
        3 : "<music>",
        4 : "<mp3>",
        correct : 2
    },
    {
        question : "Q=>17 The HTML <canvas> element is used to: ",
        1 : "create draggable elements",
        2 : "display database records",
        3 : "draw graphics",
        4 : "manipulate data",
        correct : 3
    },
    {
        question : "Q=>18 In HTML, onblur and onfocus are: ",
        1 : "HTML elements",
        2 : "style attributes",
        3 : "event attributes",
        4 : "JavaScript functions",
        correct : 3
    },
    {
        question : "Q=>19 Graphics defined by SVG is in which format? ",
        1 : "HTML",
        2 : "XML",
        3 : "CSS",
        4 : "JSON",
        correct : 2
    },
    {
        question : "Q=>20 The HTML <section> element is used to: ",
        1 : "define a section in a document",
        2 : "define navigation links",
        3 : "define a container for content",
        4 : "define header information",
        correct : 1
    },
    {
        question : "Q=>21 Which HTML element is used to specify a header for a document or section? ",
        1 : "<head>",
        2 : "<header>",
        3 : "<top>",
        4 : "<section>",
        correct : 2
    },
    {
        question : "Q=>22 Which is the correct syntax to write a comment in HTML5? ",
        1 : "<!-- Comment -->",
        2 : "// Comment",
        3 : "' Comment",
        4 : "/* Comment */",
        correct : 1
    },
    {
        question : "Q=>23 Which HTML element defines navigation links? ",
        1 : "<navigation>",
        2 : "<navigate>",
        3 : "<nav>",
        4 : "<navigator>",
        correct : 3
    },
    {
        question : "Q=>24 How can you make a bulleted list? ",
        1 : "<ul>",
        2 : "<ol>",
        3 : "<li>",
        4 : "<list>",
        correct : 1
    },
    {
        question : "Q=>25 What is the purpose of the <meta> tag in HTML? ",
        1 : "To link stylesheets",
        2 : "To store metadata",
        3 : "To include scripts",
        4 : "To create links",
        correct : 2
    },
    {
        question : "Q=>26 Which input type defines a slider control? ",
        1 : "slider",
        2 : "range",
        3 : "controls",
        4 : "input",
        correct : 2
    },
    {
        question : "Q=>27 What does the <iframe> tag do? ",
        1 : "Creates an inline frame",
        2 : "Displays an image",
        3 : "Inserts a horizontal rule",
        4 : "Defines a hyperlink",
        correct : 1
    },
    {
        question : "Q=>28 Which attribute is used to specify the URL of a linked resource in HTML? ",
        1 : "src",
        2 : "link",
        3 : "href",
        4 : "url",
        correct : 3
    },
    {
        question : "Q=>29 Which HTML element is used to define important text? ",
        1 : "<important>",
        2 : "<strong>",
        3 : "<b>",
        4 : "<i>",
        correct : 2
    },
    {
        question : "Q=>30 Which HTML element is used to define emphasized text? ",
        1 : "<i>",
        2 : "<italic>",
        3 : "<em>",
        4 : "<strong>",
        correct : 3
    }
];



// Get value for Quiz Questions and Answring
// & All initilize values
let question = document.querySelector(".question");
let inputs = document.getElementsByName("option");
let QuesNumbers = document. querySelector("#quNo");
let btn = document.querySelector("#btn")
let finishBtn = document.querySelector("#finishbtn")
let percentage = document.querySelector(".options")
let actualPercentage = document.querySelector(".percentage")
let totlQue = document.querySelector(".totalQuestion")
// option values
let option1 = document.querySelector("#options1")
let option2 = document.querySelector("#options2")
let option3 = document.querySelector("#options3")
let option4 = document.querySelector("#options4")
let index = 0;
let checkedAnswers;
let correct = 0;
let wrong = 0;

let quizLoad = ()=>{
    inputs.forEach((input) =>{
            input.checked = false
    })
    QuesNumbers.innerText = index + 1
    totlQue.innerText = htmlQuiz.length
    question.innerText = htmlQuiz[index]["question"];
    option1.innerText = htmlQuiz[index]["1"];
    option2.innerText = htmlQuiz[index]['2'];
    option3.innerText = htmlQuiz[index]["3"];
    option4.innerText = htmlQuiz[index]["4"];
    
}
let selectVlue = ()=>{
    inputs.forEach((input,index)=>{
        if(input.checked){
            checkedAnswers= index;
        }
         
    })
}

quizLoad();
btn.addEventListener("click",()=>{
    selectVlue()
    let correctVal = ()=>{
        let corrAns = htmlQuiz[index]["correct"];//return number value
        let userAns = +checkedAnswers;
        let corruserAns = userAns+1
        if(corrAns === corruserAns ){
            correct++
        }        
        else{
            wrong++
        }
        console.log(userAns,"userANswe");
    }
    
    correctVal()
       
    if(index<htmlQuiz.length-1 ){
        selectVlue();
        index++
        quizLoad();
    }else{
        let resultShow = ()=>{
            question.innerHTML = `Correct answer is ${correct} and wrong answer is ${wrong} `
            console.log("result show is running");
            percentage.style.display = "none";
            btn.style.display = "none";
            actualPercentage.style.display = "flex";
            actualPercentage.innerHTML = Math.floor(correct/htmlQuiz.length*100)+"%"
            percentage.innerHTML = actualPercentage.style.display = "flex" 
            finishBtn.style.display = "block";
            
            finishBtn.addEventListener("click", ()=>{
                location.reload()
            })            
        }
        resultShow()
    }
})
