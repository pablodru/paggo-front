import { styled } from "styled-components";
import { useContext } from "react";
import InvoiceContext from "@/contexts/invoiceContext";

export default function RightSection() {
	const { uploadResponse, uploadLoading } = useContext(InvoiceContext);

	if (uploadResponse) {
		const textArray = uploadResponse.ocrText.split("\n");

		return (
			<ScRightSection>
				<p>Your text below</p>
				<ScWords>
					{textArray.map((word, i) => (
						<ScWordBox key={i}>{word}</ScWordBox>
					))}
				</ScWords>
			</ScRightSection>
		);
	}
	return (
		<ScRightSection>
			<p>Your text below</p>
			{/* <p>No upload yet</p> */}
			{!uploadLoading && <p>No upload yet</p>}
			{uploadLoading && <img src='https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700' />}
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

	img {
		width: 60%;
		height: 40%;
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
