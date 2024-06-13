import { useState, useContext, useEffect } from "react";
import { styled } from "styled-components";
import CheckIcon from "./CheckIcon";
import axios from "axios";
import InvoiceContext from "@/contexts/invoiceContext";
import Swal from "sweetalert2";

export default function LeftSection() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [preview, setPreview] = useState(null);
	const { authToken, setUploadResponse, uploadResponse } =
		useContext(InvoiceContext);

	useEffect(() => {
		if (authToken === null) {
			setPreview(null);
			setSelectedImage(null);
		}
	}, [authToken]);

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		setSelectedImage(file);

		const reader = new FileReader();
		reader.onloadend = () => {
			setPreview(reader.result);
		};
		reader.readAsDataURL(file);
	};

	const sendImage = async (image) => {
		const URL = `${process.env.NEXT_PUBLIC_API_URL}/upload/image`;
		const formData = new FormData();
		formData.append("file", image);

		const headers = { Authorization: `Bearer ${authToken}` };

		try {
			const response = await axios.post(URL, formData, { headers });
			setUploadResponse(response.data);
		} catch (error) {
			console.error("Error uploading image:", error);
		}
	};

	const handleLabelClick = (event) => {
		if (!authToken) {
			event.preventDefault();
			Swal.fire({
				title: "Error!",
				text: "You need to sign-in to upload an image.",
				icon: "error",
				confirmButtonText: "OK",
			});
		}
	};

	const resetPageState = () => {
		setUploadResponse(null);
		setPreview(null);
		setSelectedImage(null);
	};

	return (
		<ScLeftSection>
			<p>Turn your invoice image into text</p>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					sendImage(selectedImage);
				}}
			>
				{!preview && (
					<ScFileInput>
						<label htmlFor="fileUpload" onClick={(e) => handleLabelClick(e)}>
							Select image
						</label>
						<input
							id="fileUpload"
							type="file"
							accept="image/*"
							onChange={handleImageChange}
						/>
					</ScFileInput>
				)}
				{preview && <ScImagePreview src={preview} alt="Preview" />}
				{preview && <CheckIcon />}
				{preview && !uploadResponse && (
					<ScButton disabled={!preview} type="submit">
						Upload
					</ScButton>
				)}
				{preview && (
					<ScClearButton onClick={() => resetPageState()}>
						Clear all
					</ScClearButton>
				)}
			</form>
		</ScLeftSection>
	);
}

const ScLeftSection = styled.div`
	width: 50%;
	height: 100%;
	padding: 60px 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 100px;

	p:first-child {
		font-size: 30px;
		font-weight: 600;
	}

	form {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 50px;
	}
`;

const ScFileInput = styled.div`
	position: relative;
	label {
		display: inline-block;
		padding: 10px 20px;
		background-color: #f39c12;
		color: white;
		font-size: 24px;
		border-radius: 4px;
		cursor: pointer;
	}

	input[type="file"] {
		display: none;
	}
`;

const ScImagePreview = styled.img`
	width: 200px;
	margin-top: 10px;
	border: 2px solid #ddd;
	border-radius: 6px;
	object-fit: contain;
`;

const ScButton = styled.button`
	padding: 10px 20px;
	background-color: #3498db;
	color: white;
	font-size: 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #2980b9;
	}
`;

const ScClearButton = styled.div`
	padding: 10px 20px;
	background-color: #3498db;
	color: white;
	font-size: 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #2980b9;
	}
`;
