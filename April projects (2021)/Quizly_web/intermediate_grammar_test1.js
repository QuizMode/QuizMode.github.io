document.querySelector(".button").addEventListener("click", function(){
    document.location.href = "./beginner_grammar_theory_test1.html"
})
// return to the homepage
document.querySelector(".logo").addEventListener("click", function(){
    document.location.href = "./index.html"
})
document.querySelector(".button").addEventListener("click", function(){
    document.location.href = "./intermediate_grammar_theory_test1.html"
})
let data = [
    {question:"Soccer is the most widespread sport in the world. It (play) by 4 billion people.", 
    right_ans: "is played" 
}, 
{question:"The lawn (mow) yesterday.",  
    right_ans: "was mowed"
},
{question:"This idea (develop) soon.",  
    right_ans: "will be developed"
},
{question:"Boating (enjoy) by lots of British", 
    right_ans: "is enjoyed"
},
{question:"The competition (hold)", 
    right_ans: "was held"
},
{question:"He (order) a diet a month ago", 
    right_ans: "was ordered"
},
{question:"Butter (make) from cream", 
    right_ans: "is made"
},
{question:"This team (train) by the best coach in the city", 
    right_ans: "is trained"
},
{question:"Winter (follow) by spring", 
    right_ans: "is followed"
},
{question:"This house (build) in 2011", 
    right_ans: "was built"
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


