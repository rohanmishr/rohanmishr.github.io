var parameters = [];
function addParameter(){
    var param = window.prompt("Parameter name:");
    if (param == null || param == "") {
        alert("Invalid parameter name");
    } else {
        parameters.push(param);
    }
}

function findTeamsWithParameter(p) {
    const teams = currentDataset.teams();
    let teamsWithParameter = [];
    for (let i = 0; i < teams.length; i++) {
        const teamTags = currentDataset.getVal(teams[i], p);
        if (teamTags.includes(p)) {
            teamsWithParameter.push(teams[i]);
        }
    }
}