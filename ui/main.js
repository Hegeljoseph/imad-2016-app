//counter code
var button = document.getElementById('counter');
var counter=0;

button.onclick = function () {
    
    // Make a request
    var request = new XMLHttpRequest();

    //capture the response and store in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET','http://hegeljoseph.imad.hasura-app.io/counter',true);
    request.send(null);


};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
}