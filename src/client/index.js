import React from "react"
import ReactDOM from "react-dom"

fetch("/api/").then(responce => {
	console.log(responce.json())
})

const Index = () => {
	return  <div>Hello React!</div>
}

ReactDOM.render(<Index />, document.getElementById("index"))