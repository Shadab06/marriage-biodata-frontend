const Section4 = ({ user }) => {
  return (
    <div className="section4_container">
      <h1>Want to Connect?</h1>
      <div className="connect_details">
        <div className="connect_location">
          {user?.address && (
            <>
              <p>Residential Address </p> <p>{user?.address}</p>
            </>
          )}
          {user?.district && (
            <>
              <p>District</p> <p>{user?.district}</p>
            </>
          )}
          {user?.city && (
            <>
              <p>City</p> <p>{user?.city}</p>
            </>
          )}
          {user?.state && (
            <>
              <p>State</p> <p>{user?.state}</p>
            </>
          )}
          {user?.pincode && (
            <>
              <p>Pincde</p> <p>{user?.pincode}</p>
            </>
          )}
        </div>
        <div className="hr_line"></div>
        {user?.mobile && (
          <div className="connect_phone">
            <p>Contact Number</p> <p>{user?.mobile}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section4;
