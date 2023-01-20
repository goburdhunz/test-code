import Home from "../pages";
import { render, screen, act, waitFor } from '@testing-library/react'
import * as apiUtils from '../utils/apiUtils'

jest.mock("../components/Cards/Cards", () => () => <div>Cards</div>)

const setLaunchData = jest.fn()

const useRouter = jest.spyOn(require('next/router'), 'useRouter')


useRouter.mockImplementation(() => ({
    router: jest.fn()
}))


describe('Homepage tests', () => {
    it('render correctly and match snapshot', () => {
        const fetchSpaceXLaunchDataSpy = jest.spyOn(apiUtils, 'fetchSpaceXLaunchData')


        act(() => {
            render(<Home />)
        })

        const containerWrapper = screen.getByTestId('wrapper')

        waitFor(() => {
            expect(containerWrapper).toBeInTheDocument()
        })

        expect(fetchSpaceXLaunchDataSpy).toHaveBeenCalledWith()
    })
})