import { useContext } from "react";
import { styled } from "styled-components";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import InvoiceContext from "@/contexts/invoiceContext";

export default function MainSection() {
	const { authToken } = useContext(InvoiceContext);
	return (
		<ScMain>
			<LeftSection />
			<ScLine></ScLine>
			<RightSection />
		</ScMain>
	);
}

const ScMain = styled.div`
	display: flex;
	justify-content: space-between;
	width: 85%;
	min-height: 801px;
	margin: 130px auto 50px auto;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
	overflow: hidden;
`;

const ScLine = styled.div`
	margin: auto auto;
	width: 2px;
	height: 600px;
	background-color: #f39c12;
`;

const ScSignInMessage = styled.p`
	margin: auto auto;
	font-size: 24px;
	font-weight: bold;
	color: #1f3a93;
`;
