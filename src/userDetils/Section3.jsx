import { CardMedia } from "@material-ui/core";
import "./styles.css";

const Section3 = ({ user }) => {
  return (
    <div className="section_conainer">
      {user?.familyImageWeb && (
        <CardMedia
          component="img"
          image={user?.familyImageWeb}
          title="Paella dish"
        />
      )}
      <div className="section_description">
        <h2>03</h2>
        <div className="section_description_main">
          <h2>Family Details</h2>
          <div className="section_details">
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
      </div>
    </div>
  );
};

export default Section3;
