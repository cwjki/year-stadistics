import React, { useState, useCallback } from "react";
import CreativitySurvey from "../surveys/CreativitySurvey";
import Thanks from "../Thanks";
import axios from "axios";

const CreativityPage = () => {
	const [showPage, setShowPage] = useState(true);

	const onCompletePage = useCallback(
		(data) => {
			axios
				.post("http://localhost:8000/posts", data)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));

			setShowPage(!showPage);
		},
		[showPage]
	);

	const setFinalPage = () => {
		return <Thanks />;
	};

	return (
		<div>
			{showPage ? (
				<CreativitySurvey showCompletedPage={(data) => onCompletePage(data)} />
			) : (
				setFinalPage()
			)}
		</div>
	);
};

export default CreativityPage;
