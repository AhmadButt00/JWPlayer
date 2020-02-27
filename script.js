let player = jwplayer("player").setup({
    file: '',
    controls: true
});
function playVideo() {
    let input = document.getElementById("urlInput");
    let inputUrl = document.getElementById("urlInput").value; //get video url input
    // Setup the player
    let player = jwplayer("player").setup({
        file: inputUrl,
        controls: true
    });
    
    //Listen to Play event
    player.on("play", event => {
        let position = jwplayer("player").getPosition();
        if (position == 0.0) {
            console.log("video started 🚀");
        }
    });

    // Listen to pause event
    player.on("pause", event => {
        console.log("Video Paused ⏳");
    });

    //Listen to complete event
    player.on("complete", event => {
        console.log("video finished 🚬");
    });
    input.value = '';

    
}
function jumpBySeconds(seksToJump) {
    var time = player.getPosition() + seksToJump;
    if(time < 0) { 
        time = 0; 
    }
    player.seek(time);
}
//Get player current state
function getPlayerState() {
    let state = jwplayer("player").getState();
    console.log(state);
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
     if (e.keyCode == '37') {
       jumpBySeconds(-10)
    }
    else if (e.keyCode == '39') {
       jumpBySeconds(10)
    }

}
