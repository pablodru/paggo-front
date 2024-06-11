import { useState, useContext } from "react";
import { styled } from "styled-components";
import CheckIcon from "./CheckIcon";
import axios from "axios";
import InvoiceContext from "@/contexts/invoiceContext";

export default function LeftSection() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [preview, setPreview] = useState(null);
	const { setUploadResponse } = useContext(InvoiceContext);

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

		const headers = { 'Authorization': 'Bearer token' };

		try {
			const response = await axios.post(URL, formData, { headers });
			setUploadResponse(response.data);
		} catch (error) {
			console.error('Error uploading image:', error);
		}
	};

	return (
		<ScLeftSection>
			<p>Turn your invoice image into text</p>
			<form onSubmit={(e) => { e.preventDefault(); sendImage(selectedImage); }}>
				{!preview && (
					<ScFileInput>
						<label htmlFor="fileUpload">Select image</label>
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
				{preview && <ScButton disabled={!preview} type="submit">
					Upload
				</ScButton>}
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
