var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
      
    // Make a request
    var request = new XMLHttpRequest();

    //capture the response and store in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200){
                var comments = request.responseText;
                comments = JSON.parse(comments);
                var list = '';
                for(var i=0; i < comments.length;i++){
                    list += '<li>' + comments[i] + '</li>';
                }
                var ul=document.getElementById('commentlist');
                ul.innerHTML = list;
            }
        }
    };
    
    var commentInput = document.getElementById('comment');
    var comment = commentInput.value;
    request.open('GET','http://hegeljoseph.imad.hasura-app.io/submit-comment?comment=' + comment,true);
    request.send(null);

    
    
    
}
