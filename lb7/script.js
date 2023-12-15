function createPage() {
    document.body.innerHTML = `   
    <a href="/" id="back"><button class="backToMenu"><div class="arrow"></div>Back to menu!</button></a> 
            <p>Ask your question and I may answer</p>
            <div id="question">
                <label for="txtInput">Your question here: </label>
                <input type="text" id="txtInput" placeholder="Will I ever be happy?">
            </div>
            <button id="generate" onclick="generateAnswer()">Get answer</button>
            <div class="container">
                <div id="inBall"></div>
            </div>
        `;
    document.getElementById("txtInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("generate").click();
        }
    });
}

document.addEventListener("DOMContentLoaded", createPage);


let yes = "Yes";
let no = "No";
function generateAnswer() {
    let question = document.getElementById("txtInput").value;
    if (question.slice(-1) !== "?") {
        alert("Ask a question ending with a '?'");
        document.getElementById("txtInput").value = "";
        document.getElementById("inBall").style.visibility = "hidden";
        return;
    }

    let answer;
    let chance = Math.floor(Math.random() * 10);
    if (chance < 5) {
        answer = yes;
    } else {
        answer = no;
    }

    document.getElementById("inBall").style.visibility = "visible";
    document.getElementById("inBall").textContent = answer;
}