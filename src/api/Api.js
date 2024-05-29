//  Api call get, post , return data post or send token and data,

import axios from "axios";

const API_URL = 'https://yourapi.com/api';

/** used to get page content */

export const getPageContent = async (page) => {
    try {
        const postData = {
            api:'get-page-content',
            page: page
        };
        const response = await axios.post(/*BASE_URL*/ postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    // trigger error alert
    // something went wrong. Please check internet connection.
    }
}

export const getDocuments = async () => {
    try {
        const response = await axios.get( /*BASE_URL*/ + '/get-documents' );
        let data = response.data.data;
        return data;
    } catch (error) {
        console.error(error);
        // trigger error alert
        // something went wrong. Please check internet connection.
    }
 }

