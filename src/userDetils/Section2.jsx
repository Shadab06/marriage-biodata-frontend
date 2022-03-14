import { CardMedia } from "@material-ui/core";
import "./styles.css";

const Section2 = ({ user }) => {
  return (
    <div className="section_conainer">
      <div style={{ marginLeft: "100px" }} className="section_description">
        <h2>02</h2>
        <div className="section_description_main">
          <h2>Educational Details</h2>
          <div className="section_details">
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
      {user?.profileImageWeb && (
        <CardMedia
          component="img"
          image={user?.profileImageWeb}
          title="Paella dish"
        />
      )}
    </div>
  );
};

export default Section2;
