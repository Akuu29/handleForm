import React from "react"
import ReactDOM from "react-dom"

fetch("/api/").then(responce => {
	console.log(responce.json())
})

export const Index = () => {
	return (
		<div>
			<form method="post" action="#">
				<div>
					<div>Contact Form</div>
					<dl>
						<dt>
							<label>Name</label>
						</dt>
						<dd>
							<input type="text" mexLength="10" placeholder="First Name"/>
							<input type="text" maxLength="10" placeholder="Last Name" />
						</dd>
					</dl>
					<dl>
						<dt>
							<label>Other</label>
						</dt>
						<dd>
							<textarea row="5" placeholder="Other" />
						</dd>
					</dl>
					<div>
						<button type="submit">
							SENT
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

ReactDOM.render(<Index />, document.getElementById("index"))