const express = require("express")

const server = express()

//configurar pasta pública
server.use(express.static("public"))

//utilizando template  engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos(rotas) da minha aplicação
//home
server.get("/", (req, res) => {
    return res.render("index.html")
})

//create-point
server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

//start server
server.listen(3000)