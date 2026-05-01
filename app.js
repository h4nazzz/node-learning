const http =require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/about'){
        res.write('Hello World'); 
        res.end();
    }  
    if(req.url == '/'){
        res.writeHead(200,{"content-type":"text/html"});
        res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>About Page</title>
            <style>
                body {
                    font-family: Arial;
                    background-color: #f4f4f4;
                    text-align: center;
                    padding-top: 50px;
                }
                h1 {
                    color: #333;
                }
                p {
                    color: #555;
                    font-size: 18px;
                }
                .box {
                    background: white;
                    padding: 20px;
                    margin: auto;
                    width: 300px;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                }
            </style>
        </head>
        <body>
            <div class="box">
                <h1>Welcome to the About Page</h1>
                <p>This is the About Page</p>
                <p>Mazin is GOAT</p>
            </div>
        </body>
        </html>
    `);
    }
});
server.listen(3000);