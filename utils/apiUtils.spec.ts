import { fetchSpaceXLaunchData } from './apiUtils';
import axios from 'axios';

jest.mock('axios');

const mockedAxios = axios as unknown as jest.Mock;



describe('spacex axios get api request', () => {


    it('should call the api with correct body', async () => {

        mockedAxios.mockResolvedValueOnce({
            data: {
                docs: [
                    {
                        id: '2§312j2113',
                        name: 'falcon1'
                    },
                    {
                        id: '§232§42§424',
                        name: 'falcon 6'
                    }
                ],
            }
        })
        const data = await fetchSpaceXLaunchData()

        expect(mockedAxios).toBeCalledWith({ "data": "{\"query\":{},\"options\":{\"page\":1,\"limit\":10,\"populate\":[{\"path\":\"payloads\",\"select\":{\"type\":1}}]}}", "headers": { "Content-type": "application/json; charset=UTF-8" }, "method": "post", "url": "https://api.spacexdata.com/v5/launches/query" })
        await expect(data).toEqual({
            data: {
                docs: [
                    {
                        id: '2§312j2113',
                        name: 'falcon1'
                    },
                    {
                        id: '§232§42§424',
                        name: 'falcon 6'
                    }
                ],
            }
        })
    })

    it('should call the api with correct body', async () => {
        mockedAxios.mockResolvedValueOnce({
            response: {
                status: 400
            },
            message: "Request failed with status code 400"
        })

        const data = await fetchSpaceXLaunchData()

        expect(mockedAxios).toBeCalledWith({ "data": "{\"query\":{},\"options\":{\"page\":1,\"limit\":10,\"populate\":[{\"path\":\"payloads\",\"select\":{\"type\":1}}]}}", "headers": { "Content-type": "application/json; charset=UTF-8" }, "method": "post", "url": "https://api.spacexdata.com/v5/launches/query" })
        await expect(data).toEqual({
            response: {
                status: 400
            },
            message: "Request failed with status code 400"
        })
    })
})