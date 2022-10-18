const https = require('https');
const fs = require('fs');

const app = require('./app')

const server = https
.createServer(
    { 
        key: fs.readFileSync("key.pem"), 
        cert: fs.readFileSync("cert.pem")
    }
    , app)
.listen(4000, ()=>console.log('Server running at port 4000'));

app.get('/', (req,res)=>{
    res.send("Hello from express server.")
})