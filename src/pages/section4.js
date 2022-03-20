import React from 'react'

import "./styles.css"

const section4 = ({ user }) => {
  console.log(user);
  return (
    <div className="section-4-container">
      <h1>Location Details</h1>
      <div className="section-4-detils">
        {user?.address && <>
          <p>Address</p> <p>{user.address}</p>
        </>}
        {user?.district && <>
          <p>District</p> <p>{user.district}</p>
        </>}
        {user?.pincode && <>
          <p>Pincode</p> <p>{user.pincode}</p>
        </>}
        {user?.state && <>
          <p>State</p> <p>{user.state}</p>
        </>}
      </div>
    </div>
  )
}

export default section4