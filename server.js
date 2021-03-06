var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one' : {
        title: "Article one | Hegel Joseph",
        heading: "Article One",
        date: 'Sep 5, 2016',
        content: `
          <p>
                        This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. 
                    </p>
                    <p>
                        This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. 
                    </p>
                    <p>
                        This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. 
    </p>`
    },
     'article-two' : {
        title: "Article two | Hegel Joseph",
        heading: "Article Two",
        date: 'Sep 15, 2016',
        content: `
          <p>
                        This is the content for my second article. 
    </p>`
    },
     'article-three' : {
        title: "Article Three | Hegel Joseph",
        heading: "Article Three",
        date: 'Sep 25, 2016',
        content: `
          <p>
                        This is the content for my third article.  
    </p>`
    },
    
};

function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    
    var htmlTemplate =`
<html>
    <head>
        <title>
            ${title}
        </title>
        
        <meta name="viewport" content="width-device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div >
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
                
            </div>
            <br/>
            <h4>
                Comments
            </h4>
            <hr/>
           Add comment <input type="text" id="comment" placeholder="Comment"/>
           <input type="submit" value="Submit" id = "submit_btn"/>
           <ul id="commentlist">
             
           </ul>
        </div>
    </body>
    <script type="text/javascript" src="/ui/articles.js">
        </script>
</html>



`;
return htmlTemplate;    
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter =0;
app.get('/counter', function(req,res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function(req,res){
    
    var name = req.query.name;
    
    names.push(name);
    res.send(JSON.stringify(names));

});

var comments = [];
app.get('/submit-comment',function(req,res){
    
    var comment = req.query.comment;
    
    comments.push(comment);
    res.send(JSON.stringify(comments));

});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/articles.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'articles.js'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
