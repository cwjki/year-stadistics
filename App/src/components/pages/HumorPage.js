import React, { useState, useCallback } from "react";
import axios from "axios";
import HumorSurvey from "../surveys/HumorSurvey";
import Thanks from "../Thanks";

const HumorPage = () => {
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
				<HumorSurvey showCompletedPage={(data) => onCompletePage(data)} />
			) : (
				setFinalPage()
			)}
		</div>
	);
};

export default HumorPage;
