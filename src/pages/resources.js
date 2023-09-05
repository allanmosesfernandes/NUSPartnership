import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import Table from "../components/Table";

const ResourcesPage = ({ data }) => {
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
	const tableHeaders = ["ID", "File Name", "File Size", "Last Uploaded"];
	return (
		<div className="mt-40 px-4 flex flex-col ">
			<h2 className="text-oceanBlue text-4xl font-bold my-auto items-center font-body sm:text-5xl ">
				Resources
			</h2>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-2xl">
						<tr>
							{tableHeaders.map((header, i) => {
								return (
									<th
										key={i}
										className="px-6 py-3"
										scope="col"
									>
										{header}
									</th>
								);
							})}
							<th
								className="px-6 py-3"
								scope="col"
							>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{filesList.map((file, i) => {
							const { date, fileSize, mediaItemUrl, title } =
								file;
							const serialNumber = i + 1;
							return (
								<tr
									key={i}
									className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
								>
									<th
										scope="col"
										class="p-4"
									>
										<div class="flex items-center">
											<input
												id="checkbox-all-search"
												type="checkbox"
												class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											/>
											<label
												for="checkbox-all-search"
												class="sr-only"
											>
												checkbox
											</label>
										</div>
									</th>
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										{" "}
										<p>
											{serialNumber < 10
												? `0${serialNumber}`
												: { serialNumber }}
											.
										</p>
									</th>
									<td
										className="px-6 py-4"
										href={mediaItemUrl}
									>
										{title}
									</td>
									<td className="px-6 py-4">
										<p>{fileSize}</p>
									</td>
									<td className="px-6 py-4">
										<p>{date}</p>
									</td>
									<td className="px-6 py-4">
										<p>Edit</p>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ResourcesPage;

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

/**
 * 
 * 	<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-2xl">
						<tr>
							{tableHeaders.map((header, i) => {
								return (
									<th
										key={i}
										className="px-6 py-3"
										scope="col"
									>
										{header}
									</th>
								);
							})}
						</tr>
					</thead>

					<tbody>
						{filesList.map((file, i) => {
							const { date, fileSize, mediaItemUrl, title } =
								file;
							const serialNumber = i + 1;
							return (
								<tr
									key={i}
									className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
								>
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										{" "}
										<p>
											{serialNumber < 10
												? `0${serialNumber}`
												: { serialNumber }}
											.
										</p>
									</th>
									<td
										className="px-6 py-4"
										href={mediaItemUrl}
									>
										{title}
									</td>
									<td className="px-6 py-4">
										<p>{fileSize}</p>
									</td>
									<td className="px-6 py-4">
										<p>{date}</p>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
 */
