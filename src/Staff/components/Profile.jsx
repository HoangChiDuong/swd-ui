import React from "react";
import ProfileHeader from "./ProfileHeader";
import '../styles/Profile.css';
import avatar from '~/assets/avatar.jpg';
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { useSelector } from "react-redux";
import { GiPositionMarker } from "react-icons/gi";
const Profile = () => {
    const user = useSelector((state) => state.userInfo.user);
    // const { error: errorDelete, success: successDelete } = productDelete;

    return (
        <div className="profile">
            <ProfileHeader />

            <div className="user--profile">
                <div className="user--detail">
                    <img src={(user && user.images) ? user.images : avatar} />

                    <h3 className="username">{user?.userName || null}</h3>
                </div>
                <div className="user--courses">
                    <div className="courses">
                        <div className="courses--detail">
                            <div className="courses--cover">
                                <GiPositionMarker />
                            </div>
                            <div className="courses-name">
                                <input type="text" className="title" placeholder={user?.position || null} />
                            </div>
                        </div>
                    </div>
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
                                <input type="email" className="title" placeholder={user?.email || null} />
                            </div>
                        </div>
                    </div>
                    <div className="courses">

                        <div className="courses--detail">
                            <div className="courses--cover">
                                <MdOutlineLocalPhone />
                            </div>
                            <div className="courses-name">
                                <input type="text" className="title" placeholder={user?.phone || null} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;