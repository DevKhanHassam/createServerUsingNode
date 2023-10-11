const http =  require("http");


const server = http.createServer((req,res)=>{
    
    if(req.url=='/')
    {   res.write('Hello to the HOME Page')
        res.end()

        // Istead of write res.write and then res.end you can
        // jusrt write res.end("hello to the home page")
      }

    else if(req.url=='/about')
    {res.end('Hello to the About Page')}

    else if(req.url=='/new' || req.url=='/news')
    {res.end('Hello to the News Page')}

    else if(req.url=='/contact')
    {res.end('Hello to the Contact Page')}

    else
    {
        res.writeHead(404,{"content-type": "text/html"});       // we can check the header of the page by going to network tab in the browser
        res.end('<h1> 404 Error Page </h1>')
    }

});


server.listen(9000,"127.0.0.1",()=>{console.log("listening")});
