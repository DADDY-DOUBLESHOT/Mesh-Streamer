const express =require("express");
const app=express();
const fs=require("fs");

app.get("/",function(req,res)
{
    // res.send("Pornhub not working .....");
    location.assign('index.html');
});


app.get("/video",function(req,res)
{
   
    
    const range=req.headers.range;
    const video="scifi.mp4";
    const videosize=fs.statSync(video).size;
    if(range)
    {

        let[start,end]=range.replace(/bytes=/,'').split('-');
        start=parseInt(start,10);
        end=end?parseInt(end,10):videosize-1;
        headers={
            'Content-Range':`bytes ${start}-${end}/${videosize}`,
            'Accept-Ranges':'bytes',
            'Content-Length':(start-end)+1,
            'Content-Type':'video/mp4'
        };
        res.writeHead(206,headers);
        const stream=fs.createReadStream(video,{start,end});
        stream.pipe(res);


    }
    else{
       
        headers={
            'Content-Length':videosize,
            'Content-Type':'video/mp4'
        };

        res.writeHead(200,headers);
        const stream=fs.createReadStream(video);
         stream.pipe(res);
     

    }

    
});
app.get("/1",function(req,res)
{ 
    const range=req.headers.range;
    const video="scifi.mp4";
    const videosize=fs.statSync(video).size;
    if(range)
    {

        let[start,end]=range.replace(/bytes=/,'').split('-');
        start=parseInt(start,10);
        end=end?parseInt(end,10):videosize-1;
        headers={
            'Content-Range':`bytes ${start}-${end}/${videosize}`,
            'Accept-Ranges':'bytes',
            'Content-Length':(start-end)+1,
            'Content-Type':'video/mp4'
        };
        res.writeHead(206,headers);
        const stream=fs.createReadStream(video,{start,end});
        stream.pipe(res);


    }
    else{
       
        headers={
            'Content-Length':videosize,
            'Content-Type':'video/mp4'
        };

        res.writeHead(200,headers);
        const stream=fs.createReadStream(video);
         stream.pipe(res);
     

    } 
});
app.get("/2",function(req,res)
{
   
    
    const range=req.headers.range;
    const video="demo.mp4";
    const videosize=fs.statSync(video).size;
    if(range)
    {

        let[start,end]=range.replace(/bytes=/,'').split('-');
        start=parseInt(start,10);
        end=end?parseInt(end,10):videosize-1;
        headers={
            'Content-Range':`bytes ${start}-${end}/${videosize}`,
            'Accept-Ranges':'bytes',
            'Content-Length':(start-end)+1,
            'Content-Type':'video/mp4'
        };
        res.writeHead(206,headers);
        const stream=fs.createReadStream(video,{start,end});
        stream.pipe(res);


    }
    else{
       
        headers={
            'Content-Length':videosize,
            'Content-Type':'video/mp4'
        };

        res.writeHead(200,headers);
        const stream=fs.createReadStream(video);
         stream.pipe(res);
     

    }

    
});
app.listen(6969,function(req,res)
{
    console.log("Server Started...");
});