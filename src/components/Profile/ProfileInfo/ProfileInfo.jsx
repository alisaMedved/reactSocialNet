import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import Contacts from "./Contacts/Contacts";
import HaveJob from "./../../../assets/images/HaveJob.jpg";
import NeedToJob from "./../../../assets/images/NeedToJob.jpg";
import userPhotoLarge from "./../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    const {userProfile} = props;
    return (
        <>
            {
                !userProfile ? <Preloader/> : <div>
                <div>
                    <img className={s.banner} src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
                </div>
                <div className={s.descriptionBlock}>
                    <div className={s.AvaAboutMe}>
                    <img src={userProfile.photos.large ? userProfile.photos.large : userPhotoLarge}
                         className={s.avatarka}/>
                    <div className={s.aboutMe}>
                      <h3>{userProfile.fullName}</h3>
                        <p>About me: {userProfile.aboutMe}</p>
                        <img src={userProfile.lookingForAJob ? NeedToJob : HaveJob} className={s.job}/>
                        <p>Как я ищу работу:
                            {userProfile.lookingForAJobDescription}</p>

                        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                    </div>
                    <div>
                        <h3>contacts</h3>
                        {Object.entries(userProfile.contacts)
                            .map(mas => { if (mas[1]) {
                                return <Contacts contactKey={mas[0]} contactValue={mas[1]} />
                            }
                            })
                        }
                    </div>
                </div>
            </div> }
            </>
    );
};

export default ProfileInfo;
