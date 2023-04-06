function exportAsCSV(DATASET){
    var csv = "";
    var fields = DATASET.fields();
    var teams = DATASET.teams();
    csv += "Team,";
    for(var i = 0; i < fields.length; i++){
        csv += fields[i] + ",";
    }
    csv = csv.substring(0, csv.length-1);
    csv += "\n";
    for(var i = 0; i < teams.length; i++){
        csv += teams[i] + ",";
        for(var j = 0; j < fields.length; j++){
            csv += DATASET.getVal(teams[i], fields[j]) + ",";
        }
        csv = csv.substring(0, csv.length-1);
        csv += "\n";
    }
    //download csv
    var file = new Blob([csv], {type: 'text/csv'});
    var a = document.createElement("a"),
    url = URL.createObjectURL(file);
    a.href = url;
    a.download = DATASET.name + ".csv";
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 0);
}

var E;
async function uploadDataset(){
    var file = document.getElementById("file").files[0];
    var reader = new FileReader();
    reader.onload = async function(e) {
        var r = reader.result;
        var dat = Papa.parse(r, {header: true});
        var teams = [];
        for(var i = 0; i < dat.data.length; i++){
            E = dat.data[i];
            teams.push(dat.data[i]["Team number"]);
        }
        console.log(teams);
        var fields = Object.keys(dat.data[0]);
        console.log(fields);

        //make the set
        var dataset = new Data(await Notifications.input("Dataset name:"));
        //add the teams
        for(var i = 0; i < teams.length; i++){
            dataset.initTeam(teams[i]);
        }
        //add the fields
        for(var i = 0; i < fields.length; i++){
            dataset.addFieldManual(fields[i]);
            //add the values
            for(var j = 0; j < teams.length; j++){
                dataset.setVal(teams[j], fields[i], dat.data[j][fields[i]]);
            }
        }

        Datasets.push(dataset);
        document.getElementById("datasets").innerHTML += 
        `
        <div class="dataset" onclick="selectDataset('${dataset.name}')"id="dataset-${dataset.name.toLowerCase().replaceAll(" ", "")}">
            <h3>${dataset.name}</h3>
        </div>
        `
    };
    reader.readAsText(file);
}

$("#file").change(function(){uploadDataset();});