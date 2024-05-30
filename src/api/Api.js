//  Api call get, post , return data post or send token and data,

import axios from "axios";

const API_URL = 'https://yourapi.com/api';

const getResponse = (data) => {
    console.log(data)
    if(data.data.status == 200) {
        if(typeof data.data.data != "undefined") {
            return data.data.data;
            // return Object.entries(data.data.data);
        }
    }
    return data.data.message;
}


// *************************************************

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
// *********************************************************

/** used to get documents */

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

// ******************************************************

/** Login API send number and get token, msg */

/* Used to login
* @postData -> form data (mobile_no);
*/

export const getLogin = async (postData) => {
   try {
       postData.api = 'login'
       const response = await axios.post(/*BASE_URL*/ postData, {
           headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
           }
       });
       // return getResponse(response);
       return response.data;
       // return response.data.token;
   } catch (error) {
       console.log(error);
   }
}

// ***********************************************************

/* Used to Day Rental Cabs
* @postData -> form data ();
*/

export const getDayRentalCabDetails = () =>{
    try {


    }
    catch {

    }
}

// ***********************************************************

/*****
 * Used to add contact us page enquiry
 * @postData -> form data (name, email, phone, message, captcha)
 */

export const makeEnquiry = async (postData) => {
    try {
        postData.api = 'contact-enquiry'
        const response = await axios.post(/*BASE_URL*/ postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}

/************************************************************* */

/*****
 * Used to verify Number
 * @postData -> form data (number, otp)
 */
export const verifyNumber = async (postData) => {
    try {
        postData.api = 'verify-number'
        const response = await axios.post(/*BASE_URL*/ postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}

/***************************************************************** */

/*****
 * Used to verify Number
 * @postData -> form data (number, otp)
 */

export const getTestmonials = async () => {
    try {
        const response = await axios.get( /*BASE_URL*/ + '/get-testmonials' );
        let data = response.data.data;
        return data;
    } catch (error) {
        console.error(error);
        // trigger error alert
        // something went wrong. Please check internet connection.
    }
}

/******************************************************************** */

/*****
 * Used to add updata data
 * @postData -> form data()
 */

export const updateProfile = async (api, token) => {
    try {
        const postData = {
            api: api,
            token: token
        }
        const response = await axios.put(/*BASE_URL*/ postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
       
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}
/************************************************************ */