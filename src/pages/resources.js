//import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import ResourcesTable from "../components/ResourcesTable";
import download from "../assets/images/download.svg";

/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 */
function humanFileSize(bytes, si = false, dp = 1) {
	const thresh = si ? 1000 : 1024;

	if (Math.abs(bytes) < thresh) {
		return bytes + " B";
	}

	const units = si
		? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
		: ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
	let u = -1;
	const r = 10 ** dp;

	do {
		bytes /= thresh;
		++u;
	} while (
		Math.round(Math.abs(bytes) * r) / r >= thresh &&
		u < units.length - 1
	);

	return bytes.toFixed(dp) + " " + units[u];
}

function formatDateToCustomFormat(inputDate) {
	// Create a Date object from the input date
	const date = new Date(inputDate);

	// Define an array to store the names of months
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	// Extract the month, day, and year
	const month = months[date.getMonth()];
	const day = date.getDate();
	const year = date.getFullYear();

	// Format the date string
	const formattedDate = `${month} ${day}, ${year}`;

	return formattedDate;
}

// Example usage:
const inputDate = "2023-02-11";
const formattedDate = formatDateToCustomFormat(inputDate);
console.log(formattedDate); // Output: Feb 11, 2023

const ResourcesPage = ({ data }) => {
	const [activeFilter, setFilter] = useState(0);
	/*
	const { nodes } = data?.allWpLodu;
	console.log(nodes);
	const filesList = nodes.map((node) => {
		const fileData = node.fileUpload.fileUpload;
		return {
			mediaItemUrl: fileData.mediaItemUrl,
			fileSize: fileData.fileSize,
			date: fileData.date,
			title: fileData.title,
		};
	});
	*/

	const filesList = [
		{
			mediaItemUrl: "google.com",
			fileSize: "10274",
			date: "01-03-2021",
			title: "Nottingham_resources_folder-file",
		},
	];

	const tableHeaders = ["File Name", "File Size", "Last Uploaded"];
	const tableFilters = ["All", "NTU", "UON"];

	return (
		<div className="mt-32 p-10 flex flex-col gap-10">
			<h2 className="text-oceanBlue text-4xl font-bold font-body sm:text-5xl">
				Resources
			</h2>

			<div className="w-full relative overflow-x-auto">
				<div className="rounded-3xl p-5 border flex flex-col bg-white text-black/40 text-sm gap-6">
					<ul className="gap-7 flex">
						{tableFilters.map((filter, i) => {
							const activatedFilter = i === activeFilter;
							return (
								<button
									className={
										!activatedFilter
											? "rounded-xl"
											: "bg-blue-200 rounded-xl"
									}
									onClick={() => setFilter(i)}
								>
									<li
										key={i}
										className={
											!activatedFilter
												? "text-base p-3 px-5 duration-200 hover:text-black/70"
												: "text-base p-3 px-5 duration-200 text-blue-500 "
										}
									>
										{filter}
									</li>
								</button>
							);
						})}
					</ul>
					<span className="border-b flex" />
					<ul className="flex justify-start items-center text-left gap-10">
						<li>
							<p>ID</p>
						</li>
						{tableHeaders.map((header, i) => {
							if (i === 0) {
								return (
									<li
										key={i}
										className="w-96 text-ellipsis overflow-hidden"
									>
										<p>{header}</p>
									</li>
								);
							}
							return (
								<li
									key={i}
									className="flex-1"
								>
									{header}
								</li>
							);
						})}
						<li className="">
							<p>Action</p>
						</li>
					</ul>
				</div>
				<ul className="flex flex-col text-black text-sm w-full">
					{filesList.map((file, i) => {
						const { date, fileSize, mediaItemUrl, title } = file;
						const serialNumber = i + 1;
						const formattedDate = formatDateToCustomFormat(date);
						return (
							<li
								key={i}
								className="border-b px-8 p-4 flex justify-start items-center text-left gap-10"
							>
								<p>
									{serialNumber < 10
										? `0${serialNumber}`
										: { serialNumber }}
								</p>
								<a
									className="w-96"
									href={mediaItemUrl}
								>
									{title}
								</a>
								<p className="flex-1">
									{humanFileSize(fileSize)}
								</p>
								<p className="flex-1">{formattedDate}</p>
								<button className="flex flex-col ">
									<img
										src={download}
										alt="404 illustration"
										className="w-7"
									/>
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default ResourcesPage;
/*
export const query = graphql`
	query MyQuery {
		allWpLodu {
			nodes {
				title
				fileUpload {
					fileUpload {
						mediaItemUrl
						fileSize
						date
						title
					}
				}
				id
			}
		}
	}
`;
*/
