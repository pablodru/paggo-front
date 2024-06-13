import { SessionProvider } from "next-auth/react";
import ResetStyle from "@/styles/ResetStyle";
import GlobalStyle from "@/styles/GlobalStyle";
import { InvoiceProvider } from "@/contexts/invoiceContext";

function MyApp({ Component, pageProps }) {
	return (
		<SessionProvider session={pageProps.session}>
			<InvoiceProvider>
				<ResetStyle />
				<GlobalStyle />
				<Component {...pageProps} />
			</InvoiceProvider>
		</SessionProvider>
	);
}

export default MyApp;
