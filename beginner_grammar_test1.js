document.querySelector(".button").addEventListener("click", function(){
    document.location.href = "./beginner_grammar_theory_test1.html"
})
// return to the homepage
document.querySelector(".logo").addEventListener("click", function(){
    document.location.href = "./index.html"
})
document.querySelector(".button").addEventListener("click", function(){
    document.location.href = "./beginner_grammar_theory_test1.html"
})
let data = [
    {question:"Я напишу книгу", 
    right_ans: "I will write a book" 
}, 
{question:"Она не будет рисовать",  
    right_ans: "She will not draw"
},
{question:"Мы пойдём гулять",  
    right_ans: "We will go for a walk"
},
{question:"Они будут учиться,", 
    right_ans: "Will they study?"
},
{question:"Он не сделает этого", 
    right_ans: "He will not do this"
},
]
let test= document.querySelector(".test")
function renderTest(data){
    for(i=0; i<data.length;i++){
        test.innerHTML+=`<div class="question"><h3>Question ${i+1}: ${data[i].question}</h3>
        <div class="ans">
        <div class="answerText"><input type="text"></div>
        </div>
        </div>
        ` 
    }
}
renderTest(data)
let checkButton = document.querySelector("#checkButton")
let questions=document.querySelectorAll(".question")
let results=document.querySelector("#results")
checkButton.addEventListener("click",function(){ 
   let tableResults = document.createElement("table")
   results.append(tableResults)
   a = 0
    for (let i=0;i<questions.length;i++){
       
        let answer=questions[i].querySelector("input")
            if (answer.value){
                if (answer.value==data[i].right_ans) {
                   questions[i].firstChild.style.color = "green"
                a++

                }
                else {
                    questions[i].firstChild.style.color = "red"
                }
            
        }
      
    }
    tableResults.innerHTML+=`<tr><td>Your result is</td><td>${a}/${questions.length}</td></tr>`
})


