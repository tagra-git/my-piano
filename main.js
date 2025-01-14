function playSound(type) {
    if (type == '1') {
        const sound = new Audio("./sounds/1do.mp3");
        sound.play();
    } else if (type == '2') {
        const sound = new Audio("./sounds/2re.mp3");
        sound.play();
    } else if (type == '3') {
        const sound = new Audio("./sounds/3mi.mp3");
        sound.play();
    } else if (type == '4') {
        const sound = new Audio("./sounds/4fa.mp3");
        sound.play();
    } else if (type == '5') {
        const sound = new Audio("./sounds/5so.mp3");
        sound.play();
    } else if (type == '6') {
        const sound = new Audio("./sounds/6ra.mp3");
        sound.play();
    } else if (type == '7') {
        const sound = new Audio("./sounds/7si.mp3");
        sound.play();
    }
}