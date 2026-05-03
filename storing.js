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
            width: 350px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
        }

        /* 👇 This makes images stay in one line */
        .images {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            margin-top: 15px;
        }

        img {
            width: 150px;
            height: 200px;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <div class="box">
        <h1>Welcome to the About Page</h1>
        <p>This is the About Page</p>
        <p>Mazinka is GOAT </p>

        <div class="images">
            <img src="https://thumbs.dreamstime.com/b/goat-19732474.jpg" alt="Goat">
            <h1>=</h1>
            <img src="https://media.licdn.com/dms/image/v2/D4E03AQHC_DEH-J2OPg/profile-displayphoto-crop_800_800/B4EZgoGwLhGUAI-/0/1753019516448?e=1779321600&v=beta&t=2030-3gePayKGwTM2r9y7HWM51CaBOkjqhFMDUO8y5A" alt="Goat">
        </div>
    </div>
</body>
</html>
    `);
    }
});
server.listen(3000);