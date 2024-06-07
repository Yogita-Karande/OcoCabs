import axios from "axios";

const API_URL = 'http://ococabs.com/web-api';

const getResponse = (data) => {
    console.log(data)
    if (data.data.status == 200) {
        if (typeof data.data.data != "undefined") {
            return data.data.data;
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
        const response = await axios.post('http://ococabs.com/web-api', postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

/* Used to send Otp
* @postData -> form data (api, mobile_no);
*/

export const sendOtp = async (postData) => {
    try {
        postData.api = 'send-otp'
        const response = await axios.post("http://ococabs.com/web-api", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

/*****
* Used to verify Number
* @postData -> form data ( api, otp)
*/

export const verifyOtp = async (postData) => {
    try {
        postData.api = 'verify-otp'
        const response = await axios.post("http://ococabs.com/web-api", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return response
    } catch (error) {
        console.log(error);
    }
}

/*****
* Used to verify login
* @postData -> form data ( api, token)
*/

export const verifylogin = async (postData) => {
    try {
        postData.api = 'verify-login'
        const response = await axios.post("http://ococabs.com/web-api", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return response
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
        const response = await axios.post("http://ococabs.com/web-api", postData, {
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
 * Used to testmonials
 * @postData -> form data (api)
 */

export const getTestmonials = async () => {
    try {
        const response = await axios.get("http://ococabs.com/web-api");
        let data = response.data.data;
        return data;
    } catch (error) {
        console.error(error);
        // trigger error alert
        // something went wrong. Please check internet connection.
    }
}

/*****
 * Used to add updata data
 * @postData -> form data(api , token)
 */

export const updateProfile = async (api, token,updateValues) => {
    try {
        const postData = {
            api: api,
            token: token,
            updateValues :{...updateValues}
        }
        const response = await axios.put("http://ococabs.com/web-api", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}

/*****
 * Used to get rental package
 * @postData -> form data (api)
 */

export const getRentalPackage = async () => {
    try {
        const response = await axios.get("http://ococabs.com/web-api");
        let data = response.data.data;
        return data;
    } catch (error) {
        console.error(error);
        // trigger error alert
        // something went wrong. Please check internet connection.
    }
}

/*****
 * Used to get notifications
 * @postData -> form data (api , token )
 */

export const getNotifications = async (api, token) => {
    try {
        const postData = {
            api: api,
            token: token
        }
        const response = await axios.put("http://ococabs.com/web-api", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}

/*****
 * Used to get Profile
 * @postData -> form data (api , token )
 */

export const getProfile = async (api, token) => {
    try {
        const postData = {
            api: api,
            token: token
        }
        const response = await axios.put("http://ococabs.com/web-api", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}

/*****
 * Used to upload profile photo 
 * @postData -> form data (api , token )
 */

export const uploadProfile = async (api, token) => {
    try {
        const postData = {
            api: api,
            token: token
        }
        const response = await axios.put("http://ococabs.com/web-api", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}

/*****
 * Used to get user boookings
 * @postData -> form data (api , token )
 */

export const getUserBooking = async (api, token) => {
    try {
        const postData = {
            api: api,
            token: token
        }
        const response = await axios.put("http://ococabs.com/web-api", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}


/*****
 * Used to get boooking Details
 * @postData -> form data (api , token )
 */

export const getBookingDetails = async (api, token) => {
    try {
        const postData = {
            api: api,
            token: token
        }
        const response = await axios.put("http://ococabs.com/web-api", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}

/*****
 * Used to get route Details
 * @postData -> form data (api , token )
 */

export const getRouteDetails = async (api, token) => {
    try {
        const postData = {
            api: api,
            token: token
        }
        const response = await axios.put("http://ococabs.com/web-api", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}

/*****
 * Used to add get route details
 * @postData -> form data(api , token , destination , time , ret_time , type)
 */

export const routeDetails = async (api, token,formvalues) => {
    try {
        const postData = {
            api: api,
            token: token,
            formvalues :{...formvalues}
        }
        const response = await axios.put("http://ococabs.com/web-api", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}


/*****
 * Used to create booking
 * @postData -> form data(api , token , source, destination, time , ret_time, type , car_type)
 */

export const createBooking = async (api, token,formvalues) => {
    try {
        const postData = {
            api: api,
            token: token,
            formvalues :{...formvalues}
        }
        const response = await axios.put("http://ococabs.com/web-api", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}

/*****
 * Used to create booking
 * @postData -> form data(api , token , source, destination, time , ret_time, type , car_type)
 */

export const cancelBooking = async (api, token,formvalues) => {
    try {
        const postData = {
            api: api,
            token: token,
            formvalues :{...formvalues}
        }
        const response = await axios.put("http://ococabs.com/web-api", postData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        return getResponse(response);
    } catch (error) {
        console.log(error);
    }
}