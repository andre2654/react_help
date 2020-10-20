import React, { useState } from "react";
import Section from "./components/Header";

export default function App() {
	/**
	 * ! Conceito errado, pois não utiliza o conceito de estado do react
	const projects = ["Header", "Serviçoes", "Sobre", "Footer"]; // ! Variavel não iniciada como um estado

	function handleAddProject() {
		// ! Isso não vai funcionar pois o react não está observando essa variavel
		projects.push(`Nova Seção ${Date.now()}`);
		console.log(projects);
	}

	return (
		<>
			{projects.map((project, index) => (
				<Section key={index} title={project} />
			))}
			<button onClick={handleAddProject}>Adicionar Seção</button>
		</>
	);
	*/

	const [projects, setProject] = useState([
		"Header",
		"Serviçoes",
		"Sobre",
		"Footer",
	]); // * Iniciado como um estado
	/**
	 * ? o primeiro (projects) é a varuavek com o seu valor inicial
	 * ? o segundo (setProject) é a função para atualizar o valor de projects
	 */

	function handleAddProject() {
		/**
		 * ! Novo conceito é a Imutabilidade
		 * ! Significa não mudar o valor original
		 * ! e sim criar uma nova variavel
		 */
		// setProject(projects.push(`Nova Seção ${Date.now()}`)); // ! Push altera o valor inicial

		// * Precisamos criar um nvoo array
		setProject([...projects, `Nova Seção ${Date.now()}`]); // * Aqui estamos criando um novo array
		// * Copiamos todos os dados do antigo '...projects' e então adicionamos o novo valor
	}

	return (
		<>
			{projects.map((project, index) => (
				<Section key={index} title={project} />
			))}
			<button onClick={handleAddProject}>Adicionar Seção</button>
		</>
	);
}
