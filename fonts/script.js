document.getElementById("text").addEventListener("change", () => {
    document.getElementById("result").innerHTML = "";
    var text = document.getElementById("text").value;
    for(var i = 0; i < text.length; i++){
        document.getElementById("result").innerHTML += `
        <div class="char" style="color: black" onclick="changeColor(this)">
            ${text.charAt(i)}
            <input class="color-input" type="color" onchange="this.parentElement.style.color = this.value">
        </div>
        `
    }
})

var style = document.styleSheets[0];
var rules = style.cssRules || style.rules;

var mode = 0; //0 = edit, 1 = view
function toggleView(){
    if (mode === 0){
        mode = 1;
        rules[2].style.border = "none";
        rules[3].style.border = "none";
        rules[4].style.display = "none";

    } else {
        mode = 0;
        rules[2].style.border = "1px solid lightgray";
        rules[3].style.border = "1px solid black";
        rules[4].style.display = "block";
    }
}

function changeFont(file){
    alert("Work in progress");
}

