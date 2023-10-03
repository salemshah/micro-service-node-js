const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

const controllerPath = path.join(__dirname + "/monolith/controllers")

console.log(controllerPath)

for(const fileName of fs.readdirSync(controllerPath)){
    console.log(fileName)
    const filePath = path.join(controllerPath, fileName)
    const controller = require(filePath)
    console.log(filePath, controller.toString(), controller)
}


const PORT = 3000
app.listen(PORT, () => console.log(`Server is running on post : ${PORT}`))