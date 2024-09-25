import React from 'react'
import styles from "./popup.module.scss"
import Button from '../button/Button'
import { CloseIcon } from '../../assets/svg'
import Divider from '../divider/Divider'
import { EMAIL, FIRST_NAME, LAST_NAME, PHONE_NUMBER } from '../../constant/formData'
import { signupValidators } from '../../form-cvalidators/signupValidators'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/slice/UserInfoSlice'

const Popup = ({user, handleClose }) => {
    const dispatch = useDispatch();
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      [FIRST_NAME]: user.first_name,
      [LAST_NAME]: user.last_name,
      [EMAIL]: user.email,
      [PHONE_NUMBER]: user.phone,
    }
  })

    const onSubmit = (data) => {      
    dispatch(updateUser({
      ...user, 
      first_name: data.first_name,
      last_name: data.last_name,
      email:data.email,
      phone: data.phone,
    })); 
    handleClose();
    }
  return (
    <>
      <div className={styles.popupContainer}>
              <div className={styles.container}>
                  <div className={styles.titleContainer}>
                  <div className={styles.popupTitle}>Edit Details</div>
                      <CloseIcon handleClick={() => handleClose()} />
                  </div>
                  <Divider customClass={styles.dividerStyle} />
                  
                  <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)} >
                      <div className={styles.leftFormFieldContainer}>
                          {/* first name field */}
            <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={FIRST_NAME} className={styles.labelStyle}>
              First Name
            </label>
          </span>
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="Enter your first name"
              className={styles.inputFieldStyle}
              {...register(FIRST_NAME, signupValidators[FIRST_NAME])}
            />
            <p className={styles.errorText}>
              {errors.first_name && (
                <span className="error">{errors.first_name.message}</span>
              )}
            </p>
          </div>
                          </div>
                          {/* email field */}
                           <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={EMAIL} className={styles.labelStyle}>
              Email Address
            </label>
          </span>
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="Enter your email"
              className={styles.inputFieldStyle}
              {...register(EMAIL, signupValidators[EMAIL])}
            />
            <p className={styles.errorText}>
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </p>
          </div>
          </div>
                      </div>
                      <div className={styles.rightFormFieldContainer}>
                          {/* last name field */}
                           <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={LAST_NAME} className={styles.labelStyle}>
              Last Name
            </label>
          </span>
          <div className={styles.inputFieldContainer}>
            <input
              type="text"
              placeholder="Enter your last name"
              className={styles.inputFieldStyle}
              {...register(LAST_NAME, signupValidators[LAST_NAME])}
            />
            <p className={styles.errorText}>
              {errors.last_name && (
                <span className="error">{errors.last_name.message}</span>
              )}
            </p>
          </div>
                          </div>
                          
                          {/* phone number field */}
        <div className={styles.loginForm}>
          <span className={styles.iconLabelStyle}>
            <label htmlFor={PHONE_NUMBER} className={styles.labelStyle}>
              Phone Number
            </label>
          </span>
          <div>
            
              <input
                type="text"
                placeholder="Enter your phone number"
                className={styles.inputFieldStyle}
                {...register(PHONE_NUMBER, signupValidators[PHONE_NUMBER])}
              />
            <p className={styles.errorText}>
              {errors.phone && (
                <span className="error">{errors.phone.message}</span>
              )}
            </p>
          </div>
                          </div>
                          <Button
          buttonName="Save"
          type="submit"
            customClass={styles.submitButtonStyle}
          />
                      </div>
                       
                  </form>
    
      </div>
    </div>
    </>
  )
}

export default Popup
