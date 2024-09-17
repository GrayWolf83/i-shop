import { ThemeProvider } from '@emotion/react';
import {theme} from "./theme";

export const MaterialUIProvider = ({children}: { children: React.ReactNode }) => {
	

	return <ThemeProvider theme={theme}>
		{children}
	</ThemeProvider>
};