document.querySelector(".button").addEventListener("click", function(){
    document.location.href = "./beginner_voc_theory_test2.html"
})
let data = [
    {question:"If you go camping, you have to take...", 
    ans1: "boots",
    ans2: "heels",
    right_ans: 1
}, 
{question:"I paid only 10 dollars for this dress. It cost .", 
    ans1: "an arm and a leg",
    ans2: "as cheap as chips",
    right_ans: 2
},
{question:"He couldn't buy that laptop, because it was", 
    ans1: "in stock",
    ans2: "out of stock",
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


