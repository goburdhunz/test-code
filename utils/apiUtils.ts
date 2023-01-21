import axios from 'axios'
import { LaunchResponseData } from '../types/types'
import Router from 'next/router'

interface ApiResponse {
    data: {
        docs: LaunchResponseData[]
    }
}


export const fetchSpaceXLaunchData = async () => {

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

    const apiCall: Promise<ApiResponse> = await axios({
        url: 'https://api.spacexdata.com/v5/launches/query',
        method: 'post',
        data: JSON.stringify(dataOptions),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).catch((error) => {
        if (error) {
            console.log('error', error)
            Router.push('/_error_')
            return error
        }
    })

    return apiCall
}