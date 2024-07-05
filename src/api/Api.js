import axios from "axios";

export let BASE_URL = 'https://www.ococabs.com/web-api';

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

/*****
 * Used to add contact us page
 * @postData -> form data (name, email, phone, message, type , subject)
 */

export const makeEnquiry = async (postData) => {
    try {
        postData.api = 'create-enquiry'
        const response = await axios.post(BASE_URL, postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        console.log(response)
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}

/*****
* Used to get page content
* @postData -> form data ( api, page)
*/

export const getPageContent = async (page) => {
    try {
        const postData = {
            api: 'get-policies',
            page: page
        };
        const response = await axios.get(BASE_URL, {
            params: postData
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}


/* Used to send Otp
* @postData -> form data (api, mobile_no);
*/

export const receiveotp = async (postData) => {
    try {
        postData.api = 'send-otp'
        const response = await axios.post(BASE_URL, postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return (response);
    } catch (error) {
        console.log(error);
    }
}

/*****
* Used to verify Number
* @postData -> form data ( api, otp , mobile_no)
*/

export const verifyOtp = async (postData) => {
    try {
        postData.api = 'verify-login'
        const response = await axios.post(BASE_URL, postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return (response);
    } catch (error) {
        console.log(error);
    }
}

/*****
 * Used to get rental package
 * @postData -> form data (api)
 */

export const getRentalPackage = async (page) => {
    try {
        const postData = {
            api:'get-rental-package',
            page: page
        };
        const response = await axios.post(BASE_URL, postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

/*****
 * Used to add get route details for one way
 * @postData -> form data(api , token , destination , time , type)
 */

export const getRouteDetails = async (postData) => {
    try {
        postData.api = 'get-route-details'
        const response = await axios.post(BASE_URL, postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return (response);
    } catch (error) {
        console.log(error);
    }
}

/*****
 * Used to get notifications
 * @postData -> form data (api , token )
 */

export const getNotifications = async (api,token) => {
    try {
        const postData = {
            api:api,
            token: token
        };
        const response = await axios.post(BASE_URL, postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return (response.data.data);
    
    } catch (error) {
        console.log(error);
    }
}

/*****
 * Used to upload profile photo
 * @postData -> form data (api , token )
 */

export const updateProfile = async (postData) => {
    try {
        postData.api ='update-profile'
        const response = await axios.post(BASE_URL, postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        console.log(response.data)
        return (response);
    
    } catch (error) {
        console.log(error);
    }
}


/*****
 * Used to upload profile
 * @postData -> form data (api , token )
 */

export const getProfile = async (token) => {
    try {
        const postData = {
            api:'get-profile',
            token: token
        };
        const response = await axios.post(BASE_URL,postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return (response);
    
    } catch (error) {
        console.log(error);
    }
}


/*****
 * Used to upload profile
 * @postData -> form data (api , token )
 */

export const uploadProfilePhoto = async (formData) => {
    try {
        const response = await axios.post(BASE_URL,formData , {
            headers: {
            //   'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'multipart/form-data'
            }
        });
        return (response);
    
    } catch (error) {
        console.log(error);
    }
}

/*****
 * Used to upload profile
 * @postData -> form data (api , token )
 */

export const createBooking = async ( formvalues ,token) => {
    try {
        const postData = {
            api:'get-booking-details',
            token: token,
            formvalues: formvalues
        };
        const response = await axios.post(BASE_URL, postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        console.log(response.data)
        return (response);
    } catch (error) {
        console.log(error);
    }
}

/*****
 * Used to upload profile
 * @postData -> form data (api , token )
 */

export const getUserBooking = async (token) => {
    try {
        const postData = {
            api:'get-user-booking',
            token: token,
        };
        const response = await axios.post(BASE_URL, postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return (response.data);
    } catch (error) {
        console.log(error);
    }
}   

/*****
 * Used to upload profile
 * @postData -> form data (api , token )
 */

export const cancelBooking = async (token , booking_id) => {
    try {
        const postData = {
            api:'cancel-booking',
            booking_id: booking_id,
            token : token
        };
        const response = await axios.post(BASE_URL, postData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return (response.data);
    } catch (error) {
        console.log(error);
    }
}   
