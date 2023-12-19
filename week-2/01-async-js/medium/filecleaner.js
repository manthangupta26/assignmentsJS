const fs = require("fs");

fs.readFile('abc.txt','utf-8',(err, data)=>{
    let result = trimExtraSpace(data);
    console.log(result);
})

function trimExtraSpace(a){
    let trimmedSpace = a.trim();
    trimmedSpace = trimmedSpace.replace(/\s+/g,' ')
    return trimmedSpace;
}
