import React from 'react'
import { CardMedia } from "@material-ui/core"

import "./styles.css"
import image from "../image/image.jpg"
import dots from "../image/dots.png"

const section2 = ({ user }) => {
    console.log(user)
    return (
        <div className="section-2-constainer">
            <div className="section-2-part-1">
                <div className="section-2-part-1-image-section">
                    <div className="section-2-part-1-image-section-user">
                        {user?.profileImageWeb && (
                            <CardMedia
                                component="img"
                                image={user?.profileImageWeb}
                                title="Paella dish"
                            />
                        )}
                    </div>
                    <div className="section-2-part-1-image-section-bottom"></div>
                    <div className="section-2-part-1-dots-image">
                        <img src={dots} alt="asharInfo" />
                        <img src={dots} alt="asharInfo" />
                        <img src={dots} alt="asharInfo" />
                        <img src={dots} alt="asharInfo" />
                        <img src={dots} alt="asharInfo" />
                        <img src={dots} alt="asharInfo" />
                        <img src={dots} alt="asharInfo" />
                        <img src={dots} alt="asharInfo" />
                        <img src={dots} alt="asharInfo" />
                        <img src={dots} alt="asharInfo" />
                        <img src={dots} alt="asharInfo" />
                        <img src={dots} alt="asharInfo" />
                    </div>
                </div>
                <div className="educational-details">
                    <h1>Educational and Professional Details</h1>
                    <div className="all-educational-details">
                        {user?.education && (
                            <>
                                <p>Education</p> <p>{user?.education}</p>
                            </>
                        )}
                        {user?.occupation && (
                            <>
                                <p>Occupation</p> <p>{user?.occupation}</p>
                            </>
                        )}
                        {user?.income && (
                            <>
                                <p>Income (pre month)</p> <p>{user?.income}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default section2