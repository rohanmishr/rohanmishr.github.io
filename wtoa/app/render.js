var c = "";
function render() {
    $("#main-content-depths")[0].innerHTML = "";
    $("#main-content-subrealms")[0].innerHTML = "";
    $("#filters")[0].innerHTML = `
    <select id="difficulty-filter">
        <option value="all">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        <option value="difficult">Difficult</option>
        <option value="challenging">Challenging</option>
        <option value="intense">Intense</option>
        <option value="remorseless">Remorseless</option>
        <option value="insane">Insane</option>
        <option value="extreme">Extreme</option>
        <option value="terrifying">Terrifying</option>
        <option value="catastrophic">Catastrophic</option>
    </select>
    `;
    $("#difficulty-filter")[0].addEventListener("change", function() {
        var difficulty = $("#difficulty-filter")[0].value;

        if(difficulty == "all") {
            render();
            return;
        }

        console.log("Difficulty: " + difficulty);
        renderDiff(difficulty);
    });
    //add the html elements
    for(var i = 0; i < depths.length; i++) {
        //get the inner html first
        var towers = "";
        for(var j = 0; j < depths[i].towers.length; j++) {
            c = "";
            //find all the matches between player_badges and depth towers
            for(var k = 0; k < player_badges.length; k++) {
                if (player_badges[k].id == depths[i].towers[j]) {
                    console.log("Found match: " + player_badges[k].name);
                    c = "completed";
                }
            }
            var tempBadge = findBadgeById(depths[i].towers[j]);
            towers += `
                <div class="depth-tower ${c} ${convertDifficultyNumber(tempBadge.diff, false)}">
                    <p class="text-layer1">${tempBadge.name}</p>
                    <p class="text-layer2">${tempBadge.fname} (${tempBadge.diff ?? "Unspecified"})</p>
                </div>
            `;
            console.log("Added tower: " + findBadgeById(depths[i].towers[j]).name);
        }

        $("#main-content-depths")[0].innerHTML += `
            <div class="depth">
                <h2>${depths[i].name}</h2>
                <div class="depth-towers">
                    ${towers}
                </div>
            </div>
        `
    }

    for(var i = 0; i < subrealms.length; i++) {
        //get the inner html first
        var towers = "";
        for(var j = 0; j < subrealms[i].towers.length; j++) {
            c = "";
            //find all the matches between player_badges and depth towers
            for(var k = 0; k < player_badges.length; k++) {
                if (player_badges[k].id == subrealms[i].towers[j]) {
                    console.log("Found match: " + player_badges[k].name);
                    c = "completed";
                }
            }

            var tempBadge = findBadgeById(subrealms[i].towers[j]);
            towers += `
                <div class="subrealm-tower ${c} ${convertDifficultyNumber(tempBadge.diff, false)}">
                    <p class="text-layer1">${tempBadge.name}</p>
                    <p class="text-layer2">${tempBadge.fname} (${tempBadge.diff ?? "Unspecified"})</p>
                </div>
            `;
            console.log("Added tower: " + findBadgeById(subrealms[i].towers[j]).name);
        }

        $("#main-content-subrealms")[0].innerHTML += `
            <div class="subrealm">
                <h2>${subrealms[i].name}</h2>
                <div class="subrealm-towers">
                    ${towers}
                </div>
            </div>
        `
    }

    function renderDiff(diff) {
        $("#main-content-depths")[0].innerHTML = "";
        $("#main-content-subrealms")[0].innerHTML = "";

        console.log("Difficulty: " + diff);
        var idList = eval(diff);
        var towers = ""

        for(var i = 0; i < idList.length; i++) {
            for(var j = 0; j < badges.length; j++) {
                if (badges[j].id == idList[i]) {
                    var c = "";
                    console.log("Found tower: " + badges[j].name);
                    
                    for(var k = 0; k < player_badges.length; k++) {
                        if (player_badges[k].id == idList[i]) {
                            console.log("Found match: " + player_badges[k].name);
                            c = "completed";
                        }
                    }

                    var tempBadge = findBadgeById(idList[i]);
                    towers += `
                        <div class="depth-tower ${c} ${convertDifficultyNumber(tempBadge.diff, false)}">
                            <p class="text-layer1">${tempBadge.name}</p>
                            <p class="text-layer2">${tempBadge.fname} (${tempBadge.diff ?? "Unspecified"})</p>
                        </div>
                    `;
                }
            }
        }

        $("#main-content-depths")[0].innerHTML += `
            <div class="depth">
                <h2>${fCharUpper(diff)}</h2>
                <div class="depth-towers">
                    ${towers}
                </div>
            </div>
        `
    }

    Status.setStatus("loading", "Adding badges to difficulties");
    for(var i = 0; i < badges.length; i++) {
        console.log("Checking " + badges[i].name + "...");
        if(convertDifficultyNumber(badges[i].diff, false) == "Easy") {
            easy.push(badges[i].id);
        } else if(convertDifficultyNumber(badges[i].diff, false) == "Medium") {
            medium.push(badges[i].id);
        } else if(convertDifficultyNumber(badges[i].diff, false) == "Hard") {
            hard.push(badges[i].id);
        } else if(convertDifficultyNumber(badges[i].diff, false) == "Difficult") {
            difficult.push(badges[i].id);
        } else if(convertDifficultyNumber(badges[i].diff, false) == "Challenging") {
            challenging.push(badges[i].id);
        } else if(convertDifficultyNumber(badges[i].diff, false) == "Intense") {
            intense.push(badges[i].id);
        } else if(convertDifficultyNumber(badges[i].diff, false) == "Remorseless") {
            remorseless.push(badges[i].id);
        } else if(convertDifficultyNumber(badges[i].diff, false) == "Insane") {
            insane.push(badges[i].id);
        } else if(convertDifficultyNumber(badges[i].diff, false) == "Extreme") {
            extreme.push(badges[i].id);
        } else if(convertDifficultyNumber(badges[i].diff, false) == "Terrifying") {
            terrifying.push(badges[i].id);
        } else if(convertDifficultyNumber(badges[i].diff, false) == "Catastrophic") {
            catastrophic.push(badges[i].id);
        } else if(convertDifficultyNumber(badges[i].diff, false) == "Horrific") {
            horrific.push(badges[i].id);
        }
    }

    Status.setStatus("success", "Loaded.");
}