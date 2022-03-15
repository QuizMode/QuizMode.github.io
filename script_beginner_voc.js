let data = [
    {question:"Let's call it a day?", 
    ans1: "Let's finish working",
    ans2: "It's daytime",
    ans3: "Let's start working", 
    right_ans: 1
}, 
{question:"A piece of cake", 
    ans1: "It's just a piece of cake!",
    ans2: "Easy",
    ans3: "Don't eat my cake", 
    right_ans: 2
},
{question:"When pigs can fly", 
    ans1: "Do pigs fly?",
    ans2: "When a pig is able to take off",
    ans3: "Never-ever", 
    right_ans: 3
}
]
let test= document.querySelector(".test")
function renderTest(data){
    for(i=0; i<data.length;i++){
        test.innerHTML+=`<div class="question"><h3>Question ${i+1}: ${data[i].question}</h3>
        <div class="ans">
        <div class="answerText"><input type="radio" value = 1 name=${i}><p>${data[i].ans1}</p></div>
        <div class="answerText"><input type="radio" value = 2 name=${i}><p>${data[i].ans2}</p></div>
        <div class="answerText"><input type="radio" value = 3 name=${i}><p>${data[i].ans3}</p></div>
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
