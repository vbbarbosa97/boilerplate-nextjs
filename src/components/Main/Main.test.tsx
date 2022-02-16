import { render, screen } from '@testing-library/react';
import { Main } from './Main';

describe('<Main />', () => {
	it('deve_renderizar_o_heading', () => {
		const { container } = render(<Main />);

		expect(screen.getByRole('heading', { name: /react avançado/i }));
		expect(container.firstChild).toMatchSnapshot();
	});
});
