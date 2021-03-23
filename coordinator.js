window.onload = () => {
    'use strict';
    Listening();
}
function Listening(){
    // Create WebSocket connection.
    const socket = new WebSocket('wss://8i3654by0i.execute-api.us-west-2.amazonaws.com/autostudent');

    // Connection opened
    socket.addEventListener('open', function (event) {
    console.log('Listening.....' );
    });

    socket.addEventListener("close", function (event){
        console.log('clossing....');
        Listening();
    })
    // Listen for messages`
    socket.onmessage = function (event) {
      var msg = JSON.parse(event.data);
      if(msg){
          openNewAutostudentTab(msg);
      }
    }
}

function openNewAutostudentTab(channel){
    console.log(channel);
    window.open("/index.html?channel="+channel);
}