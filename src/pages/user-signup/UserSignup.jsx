import React from 'react'
import immenceTextLogo  from "../../assets/images/immence.png"
import styles from "./UserSignup.module.scss"
import Divider from '../../components/divider/Divider'
import Button from "../../components/button/Button"
import { EMAIL, FIRST_NAME, LAST_NAME, PHONE_NUMBER } from '../../constant/formData'
import { signupValidators } from '../../form-cvalidators/signupValidators'
import { useForm } from 'react-hook-form'
import UserListCard from '../../components/userlist-card/UserListCard'
import { useDispatch } from 'react-redux'
import { addUsers } from '../../redux/slice/UserInfoSlice'
const UserSignup = () => {
  const dispatch = useDispatch();

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
     dispatch(addUsers({
      id:Math.random(),
      first_name: data.first_name,
      last_name: data.last_name,
      email:data.email,
      phone: data.phone,
    }));
    reset();
  }
  return (
    <>
          <div className={styles.mainContainer}>
              {/*logo */}
              <div className={styles.logoContainer}>
                <img src={immenceTextLogo} alt='error to display'/>
              </div>
               <Divider customClass={styles.dividerStyle} />
              <div className={styles.container}>
                  {/* create-user form container */}
                  <form onSubmit={handleSubmit(onSubmit)} className={styles.createUserContainer}>
                      <div className={styles.formContainer}>
                          <p className={styles.titleText}>Create User</p>

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
          buttonName="Create"
          type="submit"
            customClass={styles.submitButtonStyle}
          />
           </div>
                  </form>
                  {/* <Divider customClass={styles.dividerCustomStyle} /> */}
                  {/* userList container */}
                  <div className={styles.userListContainer}>
                      <p className={styles.titleText}>Users</p>
                      <UserListCard/>
                  </div>
              </div>
          </div>
    </>
  )
}

export default UserSignup
