import { styled } from "styled-components";

export default function RightSection() {
	return (
		<ScRightSection>
			<p>Your text below</p>
			<p>
				
			</p>
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
