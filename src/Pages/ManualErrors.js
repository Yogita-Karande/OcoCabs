import React from 'react';

function ManualErrors() {

    const validate = (values) => {
        const errors = {};
    
        if (!values.name) {
          errors.name = "This field is required";
        }
    
        if (!values.message) {
          errors.message = "This field is required";
        }
    
        if (!values.number) {
          errors.number = "This field is required";
        }
    
        if (!values.email) {
          errors.email = "This field is required";
        }
    
        if (!values.captcha) {
          errors.captcha = "This field is required";
        }
    
        return errors;
      };
    
  return (
    <div>ManualErrors</div>
  )
}

export default ManualErrors