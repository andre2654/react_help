import React from "react";
import Header from "./components/Header";
import imageExample from "./assets/example.jpg";

export default function App() {
	return (
		<>
			<Header />
			<img width='100%' height='300px' src={imageExample} />
		</>
	);
}
