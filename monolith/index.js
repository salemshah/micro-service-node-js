const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const extractRoute = require('../helper/extractMethos')

const controllerPath = path.join(__dirname, "controllers")

for (const fileName of fs.readdirSync(controllerPath)) {
    const filePath = path.join(controllerPath, fileName)
    const controller = require(filePath)

    console.log(extractRoute(controller.toString()))

    for(const route of extractRoute(controller.toString())) {
        app[route.method](route.url, controller[route.action])
    }
}


const PORT = 3000
app.listen(PORT, () => console.log(`Server is running on post : ${PORT}`))