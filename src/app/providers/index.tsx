import { MaterialUIProvider } from './material-provider'

export const Providers = ({children}: { children: React.ReactNode }) => {
		return <MaterialUIProvider>{children}</MaterialUIProvider>
	}