import React, { useEffect, useState } from "react";
import CreativityChart from "../charts/CreativityChart";
import HumorChart from "../charts/HumorChart";
import axios from "axios";

const ResultPage = () => {
	const [humorData, setHumorData] = useState([]);
	const [creativityData, setCreativityData] = useState([]);

	useEffect(() => {
		axios("http://localhost:8000/creativity")
			.then((res) => setCreativityData(res.data))
			.catch((err) => console.log(err));

		axios("http://localhost:8000/humor")
			.then((res) => setHumorData(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<div>
				<nav className="navbar navbar-light mb-3 p-3">
					<form className="container-fluid justify-content-start">
						<a
							href="/results"
							className="btn btn-md btn-outline-success"
							type="button"
						>
							Resultados
						</a>
					</form>
				</nav>
			</div>

			<div className="p-3">
				<CreativityChart data={creativityData} />
			</div>

			<div className="ms-5 mt-5">
				<HumorChart data={humorData} />
			</div>
		</div>
	);
};

export default ResultPage;
