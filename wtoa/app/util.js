class Status {
    static mode = "idle";
    static status = "...";

    static setStatus(mode, status) {
        this.mode = mode;
        this.status = status;

        if (mode == "idle") {
            $("#status").css("color", "gray");
        } else if (mode == "success") {
            $("#status").css("color", "lime");
        } else if (mode == "error") {
            $("#status").css("color", "red");
        } else if (mode == "loading") {
            $("#status").css("color", "#adad00");
        }

        $("#status").text(status);
    }
}

Status.setStatus("idle", "...");

function findBadgeById(id) {
    for(var i = 0; i < badges.length; i++) {
        if (badges[i].id == id) {
            return badges[i];
        }
    }
}

function fCharUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//difficulty handler
function convertDifficultyNumber(n, includeDifficultyNumber) {
    var suffix = "";

    if(includeDifficultyNumber) {
        suffix = ` (${n})`
    }

    if (n < 2) {
        return `Easy${suffix}`;
    } else if (n < 3) {
        return `Medium${suffix}`;
    } else if (n < 4) {
        return `Hard${suffix}`;
    } else if (n < 5) {
        return `Difficult${suffix}`;
    } else if (n < 6) {
        return `Challenging${suffix}`;
    } else if (n < 7) {
        return `Intense${suffix}`;
    } else if (n < 8) {
        return `Remorseless${suffix}`;
    } else if (n < 9) {
        return `Insane${suffix}`;
    } else if (n < 10) {
        return `Extreme${suffix}`;
    } else if (n < 11) {
        return `Terrifying${suffix}`;
    } else if (n < 12) {
        return `Catastrophic${suffix}`;
    } else if (n < 13) {
        return `Horrific${suffix}`;
    }
}

//theme

function setTheme(theme) {
    if(theme == "dark") {
        document.documentElement.style.setProperty('--bg-color', "rgb(20, 20, 20)");
        document.documentElement.style.setProperty('--accent-color', "rgb(40, 40, 40)");
        document.documentElement.style.setProperty('--font-color', "white");
        document.documentElement.style.setProperty('--uncompleted-color', "gray");
    } else if(theme == "light") {
        document.documentElement.style.setProperty('--bg-color', "rgb(240, 240, 240)");
        document.documentElement.style.setProperty('--accent-color', "rgb(220, 220, 220)");
        document.documentElement.style.setProperty('--font-color', "black");
        document.documentElement.style.setProperty('--uncompleted-color', "gray");
    }
}