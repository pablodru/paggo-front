import { styled } from "styled-components";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import axios from "axios";

export default function MainSection() {
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
	min-height: 800px;
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
