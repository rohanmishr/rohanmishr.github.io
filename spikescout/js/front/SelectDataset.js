var currentSet; // Currently selected dataset.
var expanded = new Map(); // Remember expanded states of the tree.

/** (utility) return 0 for errors */
function throwErr(ex) {
	try {
		return ex ?? 0
	} catch (e) {
		return e
	}
}

/** Select a dataset */
function selectDataset(dataset) {
	console.log("selecting dataset");
	var DATASET = findDatasetByName(dataset);
	currentSet = DATASET;
	$("#datgui").toggle();
	$("#datgui-title").html(DATASET.name);
	renderTable(DATASET);
	renderTree(DATASET);
	SwitchButtons(DATASET);
}

/**
 * Render a table of all of the data.
 * @constructor
 * @param {*} DATASET 
 */
function renderTable(DATASET) {
	console.log("making table outline");
	var Table = `
        <table>
            <thead>
                @headings
            </thead>
            <tbody>
                @rows
            <tbody>
        </table>
    `;
	//replace tables
	console.log("filling table");
	var headings = "";
	headings += `<th>Team</th>`
	for (var i = 0; i < throwErr(DATASET.fields()).length; i++) {
		headings += `<th>${DATASET.fields()[i]}</th>`;
	}
	Table = Table.replace("@headings", headings);
	var rows = "";
	for (var i = 0; i < DATASET.teams().length ?? 0; i++) {
		var team = DATASET.teams()[i];
		var row = `<tr><td>${team}</td>`;
		for (var j = 0; j < DATASET.fields().length; j++) {
			var field = DATASET.fields()[j];
			row += `<td>${DATASET.getVal(team, field) ?? "No data"}</td>`;
		}
		row += "</tr>";
		rows += row;
	}
	Table = Table.replace("@rows", rows);
	$("#view-table")[0].innerHTML = Table;
}

/** 
 * Renders the tree.
 * @constructor
 * @param {Dataset} DATASET - The dataset to render.
 */
function renderTree(DATASET) {
	var list;
	var listItems = [];
	var fields = "";

	// 1. Generate tag html
	function Tags(team) {
		const tags = DATASET.getVal(team, "%tags");
		console.log(DATASET);
		console.log(tags);
		// terminate if no tags present
		if (tags == null) return "";
		var r = "";
		tags.forEach((tag) => {
			r += Tag.new(tag);
		});
		return r;
	}

	// 2. Generate fields as a method (returns html)
	function Fields(team) {
		for (var j = 0; j < DATASET.fields().length ?? 0; j++) {
			var field = DATASET.fields()[j];
			fields += Field.new(field, team, "" /* gonna change something here later */, DATASET, field == "%tags");
		}
		var temp = fields;
		fields = "";
		return temp + AddBtn.new(DATASET.name);
	}

	for (var i = 0; i < DATASET.teams().length; i++) {
		var team = DATASET.teams()[i];
		var listItem = `
            <li><span class="caret ${expanded.get(team) ? "caret-down" : ""}">${team ?? ""}</span>${Tags(team)}
                <ul class="nested ${expanded.get(team) ? "active" : ""}">
                    ${Fields(team)}
                </ul>
            </li>
            `;
		listItems.push(listItem);
	}
	for (var i = 0; i < listItems.length; i++) {
		list += listItems[i] ?? "";
	}
	$("#add-inner")[0].innerHTML = `
        <ul id='myUL'>${list ?? ""}
        </ul>
        <button class="add-btn" onclick='findDatasetByName("${DATASET.name}").addRobot()'>&#43;</button>
        <!--<button onclick="saveEdits()">Save Edits</button>!-->`
		.replaceAll("undefined", ""); // Remove clutter

	// Add event listener to caret + expand/collapse fields.
	var toggler = document.getElementsByClassName("caret"); // Returns all present carets
	for (var i = 0; i < toggler.length; i++) {
		toggler[i].addEventListener("click", function() {
			this.parentElement.querySelector(".nested").classList.toggle("active");
			this.classList.toggle("caret-down");
			// Store the expanded state in a data attribute
			var nested = document.getElementsByClassName("nested"); 
			for (var j = 0; j < nested.length; j++) {
				var isExpanded = nested[j].classList.contains("active");
				expanded.set(nested[j].parentElement.children[0].innerHTML, isExpanded);
			}
		});
	}
}

function SwitchButtons(dataset) {
	var html = `
	<button class="view-btn" onclick='switchView("view", "${dataset.name}")'>View</button>
    <button class="view-btn" onclick='switchView("add", "${dataset.name}")'>Add</button>
	<button class="view-btn" onclick='switchView("file", "${dataset.name}")'>File</button>
	<button class="view-btn" onclick='switchView("analyze", "${dataset.name}")'>Analyze</button>
    `;
	$("#view-buttons")[0].innerHTML = html;

	var html2 = `
	<button onclick="exportAsCSV(findDatasetByName('${dataset.name}'))">Export as CSV</button>
    <button onclick="exportAsJSON(findDatasetByName('${dataset.name}'))">Export as JSON</button>
	`
	$("#export-inner")[0].innerHTML = html2;
}

//toggle view
function switchView(view, set) {
	switch (view) {
		case "add":
			$("#add").show();
			$("#view").hide();
			$("#file").hide();
			$("#analyzer").hide();
			break;
		case "view":
			$("#add").hide();
			$("#view").show();
			$("#file").hide();
			$("#analyzer").hide();
            renderTable(findDatasetByName(set.toString()));
			break;
		case "file":
			$("#add").hide();
			$("#view").hide();
			$("#file").show();
			$("#analyzer").hide();
			break;
		case "analyze":
			$("#add").hide();
			$("#view").hide();
			$("#file").hide();
			$("#analyzer").show();
			renderAnalyzers(findDatasetByName(set.toString()));
	}
}

/*document.getElementById("datasets").innerHTML += 
    `
        <div class="dataset" onclick="selectDataset('Test Set')"id="dataset-testset}">
            <h3>Test Set</h3>
        </div>
    `;*/

//save edits
function saveEdits() {
	//TODO
}