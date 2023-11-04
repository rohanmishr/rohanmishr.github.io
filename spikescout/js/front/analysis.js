var t;
var analyze_first = true;
function renderAnalyzers(DATASET){
    if(analyze_first) {
        DATASET.teamsList = DATASET.teams();
        t = DATASET.teamsList;
        analyze_first = false;
    }
    $("#analyze-manual")[0].innerHTML = "";
    for(var i = 0; i < t.length; i++){
        $("#analyze-manual")[0].innerHTML += `
            <div class="analyzer-team">
                <div class="move-btns">
                    <button onclick="up(this)">↑</button>
                    <button onclick="down(this)">↓</button>
                </div>
                <p>${t[i]}<p>
            </div>
        `;
    }

    console.log("rendered analyzers");
    console.log(t);
}

function up(element) {
    const teamName = element.parentElement.parentElement
    .querySelector("p").innerHTML;
    console.log(teamName);
    console.log(t.length);
    for(var i = 0; i < t.length; i++) {
        if(t[i].toString() == teamName) {
            if(i !== 0) {
                //switch the keys at i-1 and i
                temp = t[i-1];
                ti = t[i];
                t[i-1] = ti;
                t[i] = temp;
                console.log(temp);

                console.log("switched positions");
                renderAnalyzers(currentSet);
            }
        }
    }

    console.log("up");
}

function down(element) {
    const teamName = element.parentElement.parentElement
    .querySelector("p").innerHTML;
    console.log(teamName);
    console.log(t.length);
    for(var i = 0; i < t.length; i++) { 
        if(t[i].toString() == teamName) {
            if(i !== t.length-1) {
                //switch the keys at i+1 and i
                temp = t[i+1];
                ti = t[i];
                t[i+1] = ti;
                t[i] = temp;
                console.log(temp);

                console.log("switched positions");
                renderAnalyzers(currentSet);
            }
        }
    }
}