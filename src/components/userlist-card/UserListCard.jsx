import React, { useState } from 'react'
import styles from "./UserListCard.module.scss"
import { DeleteIcon, EditIcon, InitialIcon } from '../../assets/svg'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../redux/slice/UserInfoSlice'
import Popup from '../popup/Popup'

const UserListCard = () => {
  const dispatch = useDispatch();
  const usersInfo = useSelector((state) => state.userDetails?.userInfo);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); 

   const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

   const handleModelOpen = (user) => {
    setSelectedUser(user);  
    setIsPopupOpen(true);  
  }

  const handleClose = () => {
    setIsPopupOpen(false);  
    setSelectedUser(null);  
  }
  return (
    <>
       {
        isPopupOpen && selectedUser && (
         <Popup user={selectedUser} handleClose={handleClose} />
        )
      }
      {usersInfo && usersInfo?.length > 0 ? usersInfo?.map((item, i) => {
      
        return (
          <React.Fragment key={i}>
           <div className={styles.mainContainer}>
              <div className={styles.container}>
              <div className={styles.nameInitialContainer}><InitialIcon/></div>
              <div className={styles.userInfoContainer}>
                  <div className={styles.userNameText}>{`${item.first_name} ${item.last_name}`}</div>
                  <div className={styles.userEmailText}>{item?.email}</div>
                  </div>
                  </div>
              <div className={styles.iconContainer}>
                  <EditIcon customClass={styles.editIcon} handleClick={()=>handleModelOpen(item)} />
                  <DeleteIcon  handleClick={() => handleDelete(item?.id)} />
              </div>
      </div>
          </React.Fragment>
        )
      }) : <p className={styles.noUserText}>No users</p>}
          
    </>
  )
}

export default UserListCard
