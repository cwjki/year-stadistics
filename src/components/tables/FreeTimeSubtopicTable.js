import React from "react";

const FreeTimeSubtopicTable = ({ data, column }) => {
	console.log(data);
	console.log(column);

	return (
		<div className="table-responsive">
			<table className="table-dark table-striped table-hover table align-middle">
				<thead>
					<tr>
						{column.map((item, index) => (
							<TableHeadItem item={item} />
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<TableRow item={item} column={column} />
					))}
				</tbody>
			</table>
		</div>
	);
};

const TableHeadItem = ({ item }) => <th scope="col">{item.heading}</th>;

const TableRow = ({ item, column }) => (
	<tr>
		{column.map((columnItem, index) => {
			return <td>{item[`${columnItem.value}`]}</td>;
		})}
	</tr>
);

export default FreeTimeSubtopicTable;
