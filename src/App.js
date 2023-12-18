import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Header from "./components/Header"

function App() {
	return (
		<>
			<div className="main-body">
				<Header />
				<Form />
				<Footer />
			</div>
		</>
	)
}

export default App
