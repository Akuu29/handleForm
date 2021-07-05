import express from "express"
import path from "path"
import bodyParser from "body-parser"

const app = express()

app.use(express.static(path.resolve("./", "dist")))

app.get("/api", (req, res) => {
	req.send({api: "text"})
})

app.get("*", (req, res) => {
	res.sendFile(path.resolve("./", "dist", "index.html"))
})

app.post("/post", (req, res) => {
	console.log("success")
	// const contactInfo = req.body

	// console.log(contactInfo)
	// const firstName = contactInfo.firstName
	// const lastName = conactInfo.lastName
})

app.listen(3000, () => {
	console.log("server running")
})