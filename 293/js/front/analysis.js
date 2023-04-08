function renderAnalyzers(DATASET){
    var teams = DATASET.teams();
    $("#analyze-manual")[0].innerHTML = "";
    for(var i = 0; i < teams.length; i++){
        $("#analyze-manual")[0].innerHTML += `
            <div id="${teams[i]}" class="analyzer-team">
                <p>${teams[i]}<p>
                <div class="analyze-manual-buttons-container">
                    <button class="upbtn" onclick="moveUp('${teams[i]}')">&#9654;</button>
                    <button class="downbtn" onclick="moveDown('${teams[i]}')">&#9654;</button>
                </div>
            </div>
        `;
    }
    const container = document.getElementById('analyze-manual');
    const items = container.querySelectorAll('.analyzer-team');
    let draggingItem = null;

    /*items.forEach((item)=> {
        item.addEventListener('mousedown', (e) => {
            draggingItem = item;
            container.insertBefore(document.createElement('div'), item);
            item.classList.add('dragging');
            console.log(draggingItem);
        });
    });

    document.addEventListener('mouseup', (e) => {
        console.log(draggingItem !== null);
        if (draggingItem !== null) {
            var closestItem = e.target.closest('.analyzer-team');
            console.log(closestItem)
            if (closestItem !== null) {
                container.insertBefore(draggingItem, closestItem.nextSibling);
            }
            draggingItem = null;
        }
    });*/
}

function moveDown(id){
    var el = document.getElementById(id);
    var next = el.nextElementSibling;
    if(next){
        el.parentNode.insertBefore(next, el);
        el.classList.add('dragging');
        setTimeout(function(){el.classList.remove('dragging')},1000);
    }
}

function moveUp(id){
    var el = document.getElementById(id);
    var prev = el.previousElementSibling;
    if(prev){
        el.parentNode.insertBefore(el, prev);
        el.classList.add('dragging');
        setTimeout(function(){el.classList.remove('dragging')},1000);
    }
}