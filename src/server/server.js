import express from "express"
import path from "path"

const app = express()

app.use(express.static(path.resolve("./", "dist")))

app.get("/api", (req, res) => {
	req.send({api: "text"})
})

app.get("*", function(req, res) {
	res.sendFile(path.resolve("./", "dist", "index.html"))
})

app.listen(3000, () => {
	console.log("server running")
})