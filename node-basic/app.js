const fs = require('fs')
const fileName = "target.txt"

const errHandle = err => console.log(err);

const dataHandle = data => console.log(data.toString());

fs.readFile(fileName, (err, data) => {
  if(err) errHandle(err);
  dataHandle(data);
});

console.log('Node js async programming...'); 
