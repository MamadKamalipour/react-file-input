"use client";

import { FileInput, InputGroup, Preview } from "@core/index";
import { IFile } from "@core/types";
import ImagePreviewCard from "components/ImagePreviewCard/ImagePreviewCard";
import React from "react";
import styled from "./example1.module.css";

function Example1() {
	return (
		<div>
			<InputGroup isMulti>
				<h2>Select A File </h2>
				<FileInput style={{ color: "transparent" }} acceptedFormats='image' />
				<Preview>
					{({ files, onDelete }) => {
						return (
							<div className={styled.preview_wrapper}>
								{files.map((item: IFile, index) => {
									const { file, type } = item;
									switch (type) {
										case "image":
											return (
												<ImagePreviewCard
													file={file}
													onDeleteImage={() => onDelete(file)}
													key={index}
												/>
											);
										case "video":
											return (
												<div key={index}>
													<video controls>
														<source src={URL.createObjectURL(file)} />
													</video>
													<button onClick={() => onDelete(file)}>
														Delete
													</button>
												</div>
											);
										case "audio":
											return (
												<div key={index}>
													<audio controls>
														<source
															src={URL.createObjectURL(file)}
															type={file.type}
														/>
													</audio>
													<button onClick={() => onDelete(file)}>
														Delete
													</button>
												</div>
											);
										default:
											return (
												<div key={index}>
													<h1>{type}</h1>
													<span>{file.name}</span>
													<button onClick={() => onDelete(file)}>
														Delete
													</button>
												</div>
											);
									}
								})}
							</div>
						);
					}}
				</Preview>
			</InputGroup>
		</div>
	);
}

export default Example1;
