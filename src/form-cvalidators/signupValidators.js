import { EMAIL, FIRST_NAME, LAST_NAME, PHONE_NUMBER } from "../constant/formData";

export const signupValidators = {
[FIRST_NAME]: {
    required: 'Please enter your first name',
  },
 [LAST_NAME]: {
    required: 'Please enter your last name',
  },
 
  [EMAIL]: {
    required: 'Please enter your email',
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Please enter a valid email address',
    },
    },
   [PHONE_NUMBER]: {
    required: 'Please enter your phone number',
    pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid 10-digit mobile number"
            }
    },
 
};