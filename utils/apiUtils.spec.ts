import { fetchSpaceXLaunchData } from './apiUtils';


global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
        json: () => Promise.resolve(setLaunchData({ data: { docs: [{ id: 'qfqfeqqdnjqe' }] } })),
    })
)


const setLaunchData = jest.fn()

describe('spacex fetch api request', () => {

    beforeEach(() => {
        fetchSpaceXLaunchData(setLaunchData)
    });

    it('should call the fetch', async () => {
        expect(fetch).toBeCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith("https://api.spacexdata.com/v5/launches/query", { "body": "{\"query\":{},\"options\":{\"page\":1,\"limit\":10,\"populate\":[{\"path\":\"payloads\",\"select\":{\"type\":1}}]}}", "headers": { "Content-type": "application/json; charset=UTF-8" }, "method": "POST" })
        await expect(setLaunchData).toBeCalledWith({ data: { docs: [{ id: 'qfqfeqqdnjqe' }] } })
    })
})