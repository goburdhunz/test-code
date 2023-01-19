import Cards from './Cards';
import { render } from '@testing-library/react'

jest.mock('./Cards.module.css')

const props = {
    name: 'falcon8',
    date_utc: '2006-03-24T22:30:00.000Z',
    cores: [{
        core: "5e9e289df35918033d3b2623"
    }],
    payloads: [{ id: "5eb0e4b5b6c3bb0006eeb1e1", type: "Satellite" }],
    success: true,
    failures: undefined,
    links: { patch: { small: "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png" } }
}

describe('Cards component', () => {
    it('should render correctly', async () => {
        const { container } = render(<Cards {...props} />)
        expect(container).toMatchSnapshot()
    })
})