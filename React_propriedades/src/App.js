import React from "react";
import Section from "./components/Header";
import Main from "./components/Main";

export default function App() {
	return (
		<>
			<Section title='Header' />
			<Main>
				<p>Conteudo de Header</p>
			</Main>
			<Section title='Serviçoes' />
			<Main>
				<p>Conteudo de Serviçoes</p>
			</Main>
			<Section title='Sobre' />
			<Main>
				<p>Conteudo de Sobre</p>
			</Main>
			<Section title='Footer' />
			<Main>
				<p>Conteudo de Footer</p>
			</Main>
		</>
	);
}
