import { render } from '@testing-library/react'
import { App } from 'src/app'

describe('App', () => {
	test('App', () => {
		const {container} = render(<App />)
		expect(container).toBeInTheDocument()
	})
})