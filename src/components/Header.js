import { styled } from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
	const { data: session } = useSession();

	return (
		<ScHeader>
			<p>InvoiceSnap</p>
			{session ? (
				<>
					<p>Signed in as {session.user.email}</p>
					<button onClick={() => signOut()}>Sign out</button>
				</>
			) : (
				<button onClick={() => signIn("google")}>
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIl8zC8WAMHi5JVmKUb3YVvZd5gvoCdy-NQ&s" />
					Continue with Google
				</button>
			)}
		</ScHeader>
	);
}

const ScHeader = styled.div`
	width: 100%;
	height: 80px;
	background-color: #1f3a93;
	position:fixed;
	top:0;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 200px;

	p {
		font-family: "Montserrat", sans-serif;
		font-size: 24px;
		font-weight: bold;
		color: #f39c12;
	}

	button {
		width: 15%;
		height: 100%;
		border: 1px solid #fff;
    background-color: #fff;
    display:flex;
    align-items:center;
    justify-content: space-between;
    border-radius: 10px;
    padding-right: 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;

    img {
      width:20%;
      height: 80%;
      object-fit: contain;
    }
	}
`;
