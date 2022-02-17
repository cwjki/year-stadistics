import React, { useState, useEffect } from "react";
import FreeTimeTopicTable from "../tables/FreeTimeTopicTable";
import FreeTimeSubtopicTable from "../tables/FreeTimeSubtopicTable";

import axios from "axios";

const FreeTimeResultPage = () => {
	const [topicData, setTopicData] = useState([]);
	const [subtopicData, setSubtopicData] = useState([]);

	useEffect(() => {
		axios("http://localhost:8000/topics")
			.then((res) => setTopicData(res.data))
			.catch((err) => console.log(err));

		axios("http://localhost:8000/subtopics")
			.then((res) => setSubtopicData(res.data))
			.catch((err) => console.log(err));
	}, []);

	const column1 = [
		{ heading: "Tema", value: "name" },
		{ heading: "Cantidad de Votos", value: "votes" },
	];

	const column2 = [
		{ heading: "Subtema", value: "name" },
		{ heading: "Cantidad de Votos", value: "votes" },
	];

	return (
		<div>
			<div>
				<nav className="navbar navbar-light mb-3 p-3">
					<form className="container-fluid justify-content-start">
						<a
							href="/results"
							className="btn btn-md btn-outline-success ms-4 mt-2"
							type="button"
						>
							Resultados
						</a>
					</form>
				</nav>
			</div>

			<div className="container">
				<FreeTimeTopicTable data={topicData} column={column1} />
			</div>

			<div className="container mt-5">
				<FreeTimeSubtopicTable data={subtopicData} column={column2} />
			</div>

			<div>
				<nav className="navbar navbar-dark p-3"></nav>
			</div>
		</div>
	);
};

export default FreeTimeResultPage;
