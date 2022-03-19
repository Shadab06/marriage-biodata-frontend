import React from 'react'
import { CardMedia } from "@material-ui/core"

import image from "../image/image.jpg"

const section3 = ({ user }) => {
    console.log(user)
    return (
        <div className="section-3-container">
            <div className="family-details">
                <h1>Family Details</h1>
                <div className="all-family-details">
                    {user?.fatherName && (
                        <>
                            <p>Father Name</p> <p>{user?.fatherName}</p>
                        </>
                    )}
                    {user?.fatherOccupationher && (
                        <>
                            <p>Father Occupation</p> <p>{user?.fatherOccupation}</p>
                        </>
                    )}
                    {user?.motherName && (
                        <>
                            <p>Mother Name</p> <p>{user?.motherName}</p>
                        </>
                    )}
                    {user?.motherOccupation && (
                        <>
                            <p>Mother Occupation</p> <p>{user?.motherOccupation}</p>
                        </>
                    )}
                    {user?.siblings && (
                        <>
                            <p>
                                No. of Siblings <br />
                                (Brothers and Sisters)
                            </p>
                            <p>{user?.siblings}</p>
                        </>
                    )}
                    {user?.brother && (
                        <>
                            <p>Brother(s)</p> <p>{user?.brother}</p>
                        </>
                    )}
                    {user?.sister && (
                        <>
                            <p>Sister(s)</p> <p>{user?.sister}</p>
                        </>
                    )}
                </div>
            </div>
            {user?.familyImageWeb && (
                <div className="section-3-image">
                    <CardMedia
                        component="img"
                        image={user?.familyImageWeb}
                        title="Paella dish"
                    />
                </div>
            )}
        </div>
    )
}

export default section3