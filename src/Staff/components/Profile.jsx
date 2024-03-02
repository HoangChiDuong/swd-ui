import React from "react";
import ProfileHeader from "./ProfileHeader";
import '../styles/Profile.css';
import avatar from '~/assets/avatar.jpg';
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
const Profile = () => {

    return (
        <div className="profile">
            <ProfileHeader />

            <div className="user--profile">
                <div className="user--detail">
                    <img src={avatar} />
                    <h3 className="username">Thanh Dinh</h3>
                    <span className="profession">HR</span>
                </div>
                <div className="user--courses">
                    <div className="courses">
                        <div className="courses--detail">
                            <div className="courses--cover">
                                <CiCalendarDate />
                            </div>
                            <div className="courses-name">
                                <input type="date" className="title" value="2002-03-14" />
                            </div>
                        </div>
                    </div>
                    <div className="courses">
                        <div className="courses--detail">
                            <div className="courses--cover">
                                <MdOutlineMail />
                            </div>
                            <div className="courses-name">
                                <input type="email" className="title" placeholder="Thanh123@gmail.com" />
                            </div>
                        </div>
                    </div>
                    <div className="courses">

                        <div className="courses--detail">
                            <div className="courses--cover">
                                <MdOutlineLocalPhone />
                            </div>
                            <div className="courses-name">
                                <input type="text" className="title" placeholder="0123456789" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;