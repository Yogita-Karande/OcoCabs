import React, { createContext, useState } from 'react';
const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formValues, setFormValues] = useState({});
    return (
        <FormContext.Provider value={{ formValues, setFormValues }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider