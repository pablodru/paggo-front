import { useEffect, useState, useContext } from "react";
import {
	auth,
	provider,
	signInWithPopup,
	signOut,
} from "../config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { styled } from "styled-components";
import axios from "axios";
import InvoiceContext from "@/contexts/invoiceContext";

export default function Header() {
	const [user, setUser] = useState(null);
	const { setAuthToken, resetAppState } = useContext(InvoiceContext);

	async function signIn(email, token) {
		const URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`;
		const body = { email, token };
		axios
			.post(URL, body)
			.then((res) => {
				setAuthToken(token);
			})
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				setUser(user);
				const token = await user.getIdToken();
				signIn(user.email, token);
			} else {
				setUser(null);
			}
		});

		return () => unsubscribe();
	}, []);

	const handleSignOut = async () => {
		try {
			await signOut(auth);
			resetAppState();
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	const handleSignIn = async () => {
		try {
			await signInWithPopup(auth, provider);
		} catch (error) {
			console.error("Error signing in with Google:", error);
		}
	};

	return (
		<ScHeader>
			<p>InvoiceSnap</p>
			{user ? (
				<>
					<ScSignedIn>Signed in as {user.email}</ScSignedIn>
					<ScButtonSignOut onClick={handleSignOut}>Sign out</ScButtonSignOut>
				</>
			) : (
				<ScSignInButton onClick={handleSignIn}>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIl8zC8WAMHi5JVmKUb3YVvZd5gvoCdy-NQ&s"
				alt="Google Sign-In"
			/>
			Continue with Google
		</ScSignInButton>
				
			)}
		</ScHeader>
	);
}

const ScHeader = styled.div`
	width: 100%;
	height: 80px;
	background-color: #1f3a93;
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 200px;

	p:first-child {
		font-family: "Montserrat", sans-serif;
		font-size: 24px;
		font-weight: bold;
		color: #f39c12;
	}
`;



const ScSignInButton = styled.button`
	width: 15%;
	height: 100%;
	border: 1px solid #fff;
	cursor: pointer;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 10px;
	padding-right: 10px;
	font-family: "Montserrat", sans-serif;
	font-size: 14px;
	font-weight: 600;

	img {
		width: 20%;
		height: 80%;
		object-fit: contain;
	}
`;


const ScSignedIn = styled.p`
	font-size: 14px;
	font-family: "Montserrat", sans-serif;
	font-weight: 400;
	color: #f39c12;
`;

const ScButtonSignOut = styled.button`
	width: 10%;
	cursor: pointer;
	height: 100%;
	border: 1px solid #fff;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 10px;
	padding-right: 10px;
	font-family: "Montserrat", sans-serif;
	font-size: 14px;
	font-weight: 600;
`;
