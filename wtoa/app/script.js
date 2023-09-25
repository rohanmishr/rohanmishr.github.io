//API LINK: https://badges.roblox.com/v1/users/[USERID]/badges/awarded-dates?badgeIds=[BADGEID]

var player_badges = [];
function INIT() {
    Status.setStatus("loading", "Loading badges...");
    var username = document.getElementById("username").value;
    console.log("Username: " + username);
    // get uuid
    fetch("https://users.roproxy.com/v1/usernames/users", {
        method: "POST",
        body: JSON.stringify({
            usernames: [username],
            excludeBannedUsers: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
    .then(result => {
        Status.setStatus("loading", "Fetched badges");
        var uuid = result.data[0].id;
        console.log(uuid);
        Status.setStatus("loading", "UUID: " + uuid);
        // get badges
        // put all the badge ids into one string
        var fBadgeIds = "";
        for (var i = 0; i < badges.length; i++) {
            fBadgeIds += badges[i].id + ",";
        }
        fetch(`https://badges.roproxy.com/v1/users/${uuid}/badges/awarded-dates?badgeIds=${fBadgeIds}`)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            result.data.forEach(badge => {
                player_badges.push(findBadgeById(badge.badgeId));
                console.log("Found badge: " + badge.badgeId);
                Status.setStatus("loading", "Found badge: " + badge.badgeId);
            });
            render();
        });
    }).catch(error => {
        console.error("Error fetching user data: " + error);
        alert("Error fetching user data: " + error + " (This may be because of Roblox API rate limiting, try again in about a minute or so.)");
        Status.setStatus("error", "Failed to fetch user data");
    });
}
console.clear();