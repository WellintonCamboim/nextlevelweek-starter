const express = require("express")

const server = express()

//configurar pasta pública
server.use(express.static("public"))

//configurar caminhos(rotas) da minha aplicação
//home
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

//create-point
server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

//start server
server.listen(3000)