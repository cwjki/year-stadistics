import React, { useState, useCallback } from "react";
import FreeTimeSurvey from "../surveys/FreeTimeSurvey";
import Thanks from "../Thanks";
import axios from "axios";

const FreeTimePage = () => {
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
				<FreeTimeSurvey showCompletedPage={(data) => onCompletePage(data)} />
			) : (
				setFinalPage()
			)}
		</div>
	);
};

export default FreeTimePage;
