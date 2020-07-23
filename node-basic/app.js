/* const express = require('express')

const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World from express')
}) 
app.listen(3000) */

const fs = require('fs')
const fileName = "target.txt"

//fs.watch(fileName, () => console.log(`File changed!`))

fs.readFile(fileName, (err, data) => {
  if(err){
    console.log(err);
  }else{
    console.log(data.toString());
  }
});

console.log('Node js async programming...');
