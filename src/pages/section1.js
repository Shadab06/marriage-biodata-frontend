import React from 'react'
import { CardMedia } from "@material-ui/core"

import image from "../image/image.jpg";
import "./styles.css"
const section1 = ({ user }) => {
    console.log(user)
    return (
        <div className="section1-container">
            <CardMedia
                className="logo-image"
                component="img"
                image={image}
                title="Paella dish"
            />
            <div className="personal-details">
                {user?.name &&
                    <h1>{user.name}</h1>}
                <div className="all-personal-details">
                {user?.religion && (
              <>
                <p>Religion</p> <p>{user?.religion}</p>
              </>
            )}
            {user?.caste && (
              <>
                <p>Caste</p> <p>{user?.caste}</p>
              </>
            )}
            {user?.dob && (
              <>
                <p>Date of Birth</p> <p>{user?.dob}</p>
              </>
            )}
            {user?.age && (
              <>
                <p>Age</p> <p>{user?.age}</p>
              </>
            )}
            {user?.height && (
              <>
                <p>Height</p> <p>{user?.height}</p>
              </>
            )}
            {user?.bloodGroup && (
              <>
                <p>Blood Group</p> <p>{user?.bloodGroup}</p>
              </>
            )}
            {user?.complexion && (
              <>
                <p>Complexion</p> <p>{user?.complexion}</p>
              </>
            )}
            {user?.mobile && (
              <>
                <p>Contact No.</p> <p>(+91) {user?.mobile}</p>
              </>
            )}
            {user?.emaill && (
              <>
                <p>Email</p> <p>{user?.email}</p>
              </>
            )}
                </div>
            </div>
        </div>
    )
}

export default section1