const {photos, commentsArr} = require("./consts");

const http = require('http');
const fs = require('fs');
const {setResponseParameters} = require("./utils");
const port = 4001
fs.writeFileSync('photos.txt', JSON.stringify(photos));
fs.writeFileSync('comments.txt', JSON.stringify(commentsArr));

http.createServer(
    function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
    const url = req.url;
    const method = req.method
    if (method === 'GET') {
        if (url === '/photos') {
            const data = fs.readFileSync('photos.txt', 'utf8')
            setResponseParameters(res,200,data)
        } else if (url === '/comments') {
            const data = fs.readFileSync('comments.txt', 'utf8')
            setResponseParameters(res,200,data)
        } else {
            setResponseParameters(res,404,'Ресурс не знайдений')
        }
    }
    else if (method === 'POST') {
            let data = "";
            req.on("data", chunk => {
                data += chunk;
            });
            req.on("end", () => {
                fs.writeFileSync('data.txt',data)
                if(data.length === 0) {
                    setResponseParameters(res,404,'Данні не отримані')
                }
                else if(data.length !== 0) {
                    setResponseParameters(res,200,'Данні успішно отримані')
                }
            });
    }
    else {
        setResponseParameters(res,404,'Ресурс не знайдений')
    }
}).listen(port, function () {
    console.log('Server start at port 4001')
})



