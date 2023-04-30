import React from "react";
import "./profile.css"

const Profile = (props) => {
    return(
        <>
            <hr />
            <div className="account">
                <img src= {props.path} alt="profile" className="pict" />
                <p className="nameOfProfile"> {props.NameProfile} </p>
            </div>
        </>
    );
};

export default Profile;

