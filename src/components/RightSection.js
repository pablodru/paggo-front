import { styled } from "styled-components";
import { useContext } from "react";
import InvoiceContext from "@/contexts/invoiceContext";

export default function RightSection() {
	const { uploadResponse } = useContext(InvoiceContext);
	if (uploadResponse) {
		const textArray = uploadResponse.ocrText.split("\n");
		console.log(textArray);

		return (
			<ScRightSection>
				<p>Your text below</p>
				<ScWords>
					{textArray.map((word) => (
						<ScWordBox>{word}</ScWordBox>
					))}
				</ScWords>
			</ScRightSection>
		);
	}

	return (
		<ScRightSection>
			<p>Your text below</p>
			<p>No upload yet</p>
		</ScRightSection>
	);
}

const ScRightSection = styled.div`
	width: 50%;
	height: 100%;
	padding: 60px 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 100px;

	p:first-child {
		font-size: 30px;
		font-weight: 600;
	}

	p:last-child {
		font-size: 16px;
		line-height: 1.5;
	}
`;

const ScWords = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
`;

const ScWordBox = styled.div`
	padding: 5px;
	border: 1px solid #1f3a93;
	border-radius: 5px;
`;