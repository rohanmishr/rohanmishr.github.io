// These return the HTML components needed to make the website reactive

class Tag {
    static tagCols = ["#ff8787", "#ffc587", "#f7ff87", "#87ff8b",
                      "#87fff5", "#87b3ff", "#9387ff", "#e587ff"]; // Tag colors list
    static new(tag) {
        return `<span class="tag" style="background-color: ${Tag.tagCols[randInt(0, Tag.tagCols.length - 1)]}">${tag}</span>`;
    }
}

class Field {
    static new(field, team, tags, dat, isHidden = false) {
        return `<li class="${isHidden ? 'hidden' : ''}"><span class="caret">${field ?? ""}</span>${tags}
                    <ul class="nested ${expanded.get(team) === "true" ? "active" : ""}">
                        ${dat.getVal(team, field) ?? "No data"}
                        <button class="edit-btn" onclick='
                            findDatasetByName("${dat.name}").setVal("${team}", "${field}", prompt("Enter new value:")),
                            renderTree(findDatasetByName("${dat.name}", false))'
                        >&#9998;</button>
                    </ul>
                </li>`;
    }
}

class AddBtn {
    static new(name) {
        return `<button class="add-btn" onclick='findDatasetByName("${name}").addField()'>&#43;</button>`;
    }
}