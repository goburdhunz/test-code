import Cards from './Cards';
import { render, screen } from '@testing-library/react'

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
    it('should render correctly', () => {
        const { container } = render(<Cards {...props} />)
        expect(container).toMatchSnapshot()
    })
    it('should have right values present', () => {
        render(<Cards {...props} />)

        const name = screen.getByText(/Name/)
        const core = screen.getByText(/Core Serial/)
        const Date = screen.getByText(/Date/)
        const payLoadId = screen.getByText(/Payload Id/)
        const payLoadType = screen.getByText(/Payload type/)
        const Success = screen.getByText(/Successful Launch/)

        expect(name).toBeTruthy()
        expect(core).toBeTruthy()
        expect(Date).toBeTruthy()
        expect(payLoadId).toBeTruthy()
        expect(payLoadType).toBeTruthy()
        expect(Success).toBeTruthy()
    })

    it('should render failures if success is false', async () => {
        const failureProps = {
            ...props,
            success: false,
            failures: [{
                reason: 'not enough fuel'
            }]
        }

        render(<Cards {...failureProps} />)


        const success = screen.getByText(/Successful Launch: No/)
        const failure = screen.getByText(/Reason for Failure:not enough fuel/)


        expect(success).toBeTruthy()
        expect(failure).toBeTruthy()
    })
})