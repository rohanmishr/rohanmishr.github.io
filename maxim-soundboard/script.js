var boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    playSound(box.innerText);
    console.log(box.innerText);
  })
})

function playSound(s){
  switch (s) {
    case "Shut up":
        var audio = new Audio("audio/ShutUp.mp3");
        console.log(audio);
        audio.play();
        break;
    case "You stupid":
        var audio = new Audio("audio/YouStupid.mp3");
        console.log(audio);
        audio.play();
        break;
    case "Chek":
        var audio = new Audio("audio/IMG_2277.mp3");
        console.log(audio);
        audio.play();
        break;
    case "Noooooo":
        var audio = new Audio("audio/Noooooo.mp3");
        console.log(audio);
        audio.play();
        break;
    case "Siuuuuu":
        var audio = new Audio("audio/Siuuuuu.mp3");
        console.log(audio);
        audio.play();
        break;
    case "Bugatti":
        var audio = new Audio("audio/Bugatti.mp3");
        console.log(audio);
        audio.play();
        break;
    case "Touchbar":
        var audio = new Audio("audio/IMG_2283.mp3");
        audio.play();
        break;
    default:
        break;
  }
}
