let data = [
    {question:"The sun shines …", 
    ans1: "brightly",
    ans2: "snowy",
    ans3: "cloudy", 
    right_ans: 1
}, 
{question:"The sky is … There’re no clouds.", 
    ans1: "fine",
    ans2: "clear",
    ans3: "cloudy", 
    right_ans: 2
},
{question:"The wind is …", 
    ans1: "blowing",
    ans2: "shining",
    ans3: "raining", 
    right_ans: 1

},
{question:"Take your coat. It has …", 
    ans1: "got warmer",
    ans2: "colder",
    ans3: "got colder", 
    right_ans: 3
},
{question:"The … is fine. The sun is …", 
    ans1: "weather, blowing",
    ans2: "weather, shining",
    ans3: "sky, shining", 
    right_ans: 2
},
{question:"It’s … It’s +28°C.", 
    ans1: "cold",
    ans2: "warm",
    ans3: "hot", 
    right_ans: 3
},
{question:"It’s … It’s -10°C. ", 
    ans1: "cold",
    ans2: "warm",
    ans3: "hot", 
    right_ans: 1
},{question:"The weather is … here. It was -10°C yesterday and now it is +5°C.", 
ans1: "terrible",
ans2: "cold",
ans3: "changeable", 
right_ans: 3
},{question:" Ann likes when it’s +19°C. She likes … weather.", 
ans1: "cold",
ans2: "warm",
ans3: "hot", 
right_ans: 2
},{question:"We can’t see the horizon because it’s …", 
ans1: "foggy",
ans2: "cloudy",
ans3: "raining", 
right_ans: 1
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
