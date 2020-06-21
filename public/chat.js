var socket = io.connect('http://localhost:4000');

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    button = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');
    
button.addEventListener('click', () =>{
    socket.emit('chat', {
        message: message.nodeValue,
        handle: handle.value
    });
    message.value = "";
});

message.addEventListener('keypress', () =>{
    socket.emit('typing', handle.value);
});

socket.on('chat', (data) =>{
    feedback.innerHTML = '';
    output.innerHTML += '</p><strong>' + data + ' is typing  message...</em></p>';
});