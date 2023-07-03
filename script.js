const {publications, commentsCount, photosCount, comments, names} = require("./consts");

const http = require('http');
const fs = require('fs');
const port = 4001
fs.writeFileSync('photos.txt', JSON.stringify(publications));
fs.writeFileSync('comments.txt', JSON.stringify(publications));
http.createServer(
    function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, {'Content-Type': 'application/json'});
    const url = req.url;
    const method = req.method
    if (method === 'GET') {
        if (url === '/photos') {
            const data = fs.readFileSync('photos.txt', 'utf8')
            res.write(data);
            res.end();
        } else if (url === '/comments') {
            const data = fs.readFileSync('comments.txt', 'utf8')
            res.write(data);
            res.end();
        } else {
            res.write('Help,Its a BIG problem!');
            res.end();
        }
    }
}).listen(port, function () {
    console.log('Server start at port 4001')
})



