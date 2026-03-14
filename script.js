const cases = [

{
case:"Severe epigastric pain radiating to the back with elevated serum lipase.",
answer:"Acute pancreatitis"
},

{
case:"Painless hematuria in an elderly smoker.",
answer:"Bladder carcinoma"
},

{
case:"Sudden severe chest pain with ST elevation on ECG.",
answer:"Myocardial infarction"
}

];

let currentCase;

function loadCase(){

currentCase = cases[Math.floor(Math.random()*cases.length)];

document.getElementById("caseText").innerText = currentCase.case;

}

function showAnswer(){

document.getElementById("answerText").innerText = currentCase.answer;

}

const differentials = {

"hematuria":[
"Renal stone",
"Bladder carcinoma",
"Glomerulonephritis",
"Trauma"
],

"chest pain":[
"Myocardial infarction",
"Pulmonary embolism",
"GERD",
"Costochondritis"
],

"jaundice":[
"Viral hepatitis",
"Gallstones",
"Hemolysis",
"Liver cirrhosis"
]

};

function findDifferential(){

let symptom = document.getElementById("symptomInput").value.trim().toLowerCase();

let list = document.getElementById("resultList");

list.innerHTML = "";

if(differentials[symptom]){

differentials[symptom].forEach(function(item){

let li = document.createElement("li");

li.innerText = item;

list.appendChild(li);

});

}else{

list.innerHTML = "<li>No data available</li>";

}

}

loadCase();
