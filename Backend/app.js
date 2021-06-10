const express = require("express")
const cros = require("cors")
const db = require("./database/mySql")
var app = express()
const path = require("path")
const morgan = require("morgan")
const port = 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use("/download", express.static(path.join(__dirname + "/download")))

app.use(cros({
    origin: "http://localhost:3000",
    credentials: true
}))

app.get("/", (req, res) => {
    return res.send(`Hai, Welcome Back. If You Want To Create A <a href="/createtables">Table</a>`)
})

app.use("/createtables", require("./routers/tables"))
app.use("/ota", require("./routers/ota"))
app.use("/uwa", require("./routers/uwa"))
app.use("/soldering",require("./routers/soldering"))
app.use("/vaccume",require("./routers/vaccume"))
app.use("/thermal",require("./routers/thermal"))

//invalid router
app.get("*", (req, res) => {
    return res.send("page not found")
})





app.listen(port, () => { console.log(`App running on http://localhost:${port}`) })