import { CardMedia } from "@material-ui/core";
import "./styles.css";

const Section1 = ({ user }) => {
  return (
    <div className="section_conainer">
      {user?.profileImageWeb && (
        <CardMedia
          component="img"
          image={user?.profileImageWeb}
          title="Paella dish"
        />
      )}
      <div className="section_description">
        <h2>01</h2>
        <div className="section_description_main">
          <h1>{user?.name}</h1>
          <h2>Personal Details</h2>
          <div className="section_details">
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
    </div>
  );
};

export default Section1;
