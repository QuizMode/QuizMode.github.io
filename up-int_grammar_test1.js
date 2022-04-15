document.querySelector(".button").addEventListener("click", function(){
    document.location.href = "./up-int_grammar_theory_test1.html"
})
let data = [
    {question:"He ... live in Dallas 10 years ago.", 
    ans1: "used to",
    ans2: "would",
    right_ans: 1
}, 
{question:"She ... go to London those days.", 
    ans1: "used to",
    ans2: "would / used to (both possible)",
    right_ans: 2
},
{question:"She ... like Japanese food", 
    ans1: "wouldn't",
    ans2: "didn't use to",
    right_ans: 2

},
{question:"She ... spend hours in the garage with his father when she was a teen.", 
    ans1: "would",
    ans2: "would / used to (both possible)",
    right_ans: 2
},
{question:"He ... wear glasses when he was at primary school", 
    ans1: "didn't use to",
    ans2: "wouldn't",
    right_ans: 1
},
{question:"Which is NOT correct?", 
    ans1: "Jenny would have blond hair.",
    ans2: "They would go shopping every weekend.",
    right_ans: 1
},
{question:"Which is NOT correct", 
    ans1: "We used to live in Mexico 8 years ago.",
    ans2: "He would hate waking up early.",
    right_ans: 2
},
{question:"Which is NOT correct?", 
ans1: "He would never have quarrels with his brother",
ans2: "He never used to have quarrels with his brother",
right_ans: 1
},
{question:"Which is correct?", 
ans1: "She dind't use to have a country house.",
ans2: "She wouldn't have a country house.",
right_ans: 1
},{question:"Which is correct?", 
ans1: "They would go to that cafe some years ago.",
ans2: "They would / used to go to that cafe some years ago (both possible).",
right_ans: 2
}
]
let test= document.querySelector(".test")
function renderTest(data){
    for(i=0; i<data.length;i++){
        test.innerHTML+=`<div class="question"><h3>Question ${i+1}: ${data[i].question}</h3>
        <div class="ans">
        <div class="answerText"><input type="radio" value = 1 name=${i}><p>${data[i].ans1}</p></div>
        <div class="answerText"><input type="radio" value = 2 name=${i}><p>${data[i].ans2}</p></div>
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
       
        let answer=questions[i].querySelectorAll("input")
        for (let j = 0;j<answer.length; j++){
            if (answer[j].checked){
                if (answer[j].value==data[i].right_ans) {
                   questions[i].firstChild.style.color = "green"
                a++

                }
                else {
                    questions[i].firstChild.style.color = "red"
                }
            }
            
        }
      
    }
    tableResults.innerHTML+=`<tr><td>Your result is</td><td>${a}/${questions.length}</td></tr>`
})
// return to the homepage
document.querySelector(".logo").addEventListener("click", function(){
    document.location.href = "./index.html"
})


