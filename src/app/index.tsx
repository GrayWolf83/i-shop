import { Button } from '@mui/material';
import { Providers } from './providers';

export const App = () => {
	return (
		<Providers>
			<h1>App</h1>
			<Button variant="contained">Button</Button>
		</Providers>
	);
};