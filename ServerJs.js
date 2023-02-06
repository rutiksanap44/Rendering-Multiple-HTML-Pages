const http = require('http');
const fs = require('fs');
const port = 6223;

function requestHandler(req,res){
    console.log(req.url);

    res.writeHead(200, {'Content-type': 'text-html'});

    let filePath;

    switch(req.url){
        case '/':
            filePath = './Main.html';
            break;
        case '/profile':
            filePath = './Profile.html'
            break;
        default:
            filePath = './402.html';
    }
    
    fs.readFile(filePath,function(err,data){
        if(err){
            console.log(`Error occured ${err}`);
            return res.end('<h1>Error Occured!</h1>');
        }
        return res.end(data);
    })
}

const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(`Server is up and runnig on port no : ${port}`);
    }
});