import { LaunchResponseData } from '../types/types'


export const fetchSpaceXLaunchData = (setLaunchData: (responseData: LaunchResponseData[]) => void) => {
    // passing in specific query options for page number, limit to 10 entries and a populate option 
    // which merges payloads data (specifically type/id) into the launches response => payloads field
    const dataOptions = {
        query: {},
        options: {
            page: 1,
            limit: 10,
            populate: [{
                "path": "payloads",
                "select": {
                    "type": 1
                },
            }]
        }
    }

    try {
        fetch('https://api.spacexdata.com/v5/launches/query', {
            method: 'POST', body: JSON.stringify(dataOptions),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => setLaunchData(data?.docs)
            );
    } catch (error) {
        console.log('error', error)
    }
}
