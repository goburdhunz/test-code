import axios from 'axios'


export const fetchSpaceXLaunchData = () => {
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

    return axios({
        url: 'https://api.spacexdata.com/v5/launches/query',
        method: 'post',
        data: JSON.stringify(dataOptions),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => {
        return response
    })
}
