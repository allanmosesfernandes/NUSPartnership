import React from "react";
import { useState } from "react";

const Item = () => {
	return <div></div>;
};

const TableHeaders = () => {
	return <div></div>;
};

const TableFilters = ({ data, onChange, value }) => {
	const handleChange = (event) => {
		const text = event.target.value;
		onChange(text);
	};
	return (
		<div className="flex gap-2.5">
			{data.map((filter) => {
				const activatedClass = filter === value;
				return (
					<button
						className={
							!activatedClass
								? "rounded border p-1.5 hover:bg-gray-100"
								: "rounded border p-1.5 bg-gray-100"
						}
						onClick={handleChange}
					>
						{filter}
					</button>
				);
			})}
		</div>
	);
};

const ResourcesTable = (props) => {
	const [activeFilter, setFilter] = useState("All");

	var { tableHeaders, tableFilters } = props;

	tableFilters = tableFilters || ["All", "Active", "Completed"];
	tableHeaders = tableHeaders || ["File name", "File size", "Last uploaded"];

	const handleFilterChange = (value) => {
		setFilter(value);
	};

	return (
		<table>
			<div className="rounded-lg p-4 border flex flex-col gap-3 bg-white text-black">
				Table Filters
				<TableFilters
					data={tableFilters}
					onChange={handleFilterChange}
					value={activeFilter}
				/>
				{/*Line Break*/}
				<span className="border-b flex" />
				{/*Table Headers*/}
				<TableHeaders data={tableHeaders} />
			</div>
			{props.children}
		</table>
	);
};

export default ResourcesTable;

//Them ones where all ur friends have jobs but ur the jobless out of all of them
