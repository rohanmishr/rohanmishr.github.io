function addDataToStorage(team, data) {
    localStorage.setItem(team, JSON.stringify(data));
}

function getDataFromStorage(team) {
    return JSON.parse(localStorage.getItem(team));
}
function autosave(){
    for(var i = 0; i < Datasets.length; i++){
        localStorage.clear();
        addDataToStorage(Datasets[i].name, Datasets[i]);
    }
}
addDataToStorage(293, 'test');
console.log(getDataFromStorage(293));

setInterval(autosave, 10000);