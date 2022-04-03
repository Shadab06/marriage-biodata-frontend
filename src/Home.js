import React, { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./styles.css";
import Logo from "./images/image.jpg";
import image from "./images/bride-holds-beautiful-bridal-bouquet-close-up_8353-10474-16.jpg";
import dots from "./images/dots.png";

const Home = () => {
  const [user, setUser] = useState("");

  let { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(
        `http://142.93.218.129:2001/api/user/get/${id}`
      );
      setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <div className="main-container">
      <div className="container-1-image">
        <img className="container-1-image" src={Logo} alt="marriage biodata" />
      </div>
      <div className="container-1-detail">
        <div className="container-1-details">
        {user?.name && <h1>{user.name}</h1>}
        {user?.mobile && <h3>97478976922</h3>}
        {user?.email && <h5>{user.email}</h5>}
        <hr className="hr-line" />
          <div className="full-details" style={{ marginTop: "10px" }}>
            {user?.religion && (
              <>
                <p>Religion</p> <p>{user?.religion}</p>
              </>
            )}
          </div>
          <div className="full-details">
            {user?.caste && (
              <>
                <p>Caste</p> <p>{user?.caste}</p>
              </>
            )}
          </div>
          <div className="full-details">
            {user?.dob && (
              <>
                <p>DoB</p> <p>{user?.dob}</p>
              </>
            )}
          </div>
          <div className="full-details">
            {user?.age && (
              <>
                <p>Age</p> <p>{user?.age}</p>
              </>
            )}
          </div>
          <div className="full-details">
            {user?.height && (
              <>
                <p>Height</p> <p>{user?.height}</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="section-2-image">
        <div className="image-bg-colour"></div>
        <div className="dot-image">
          <img src={dots} alt="marriage biodata" />
          <img src={dots} alt="marriage biodata" />
          <img src={dots} alt="marriage biodata" />
          <img src={dots} alt="marriage biodata" />
          <img src={dots} alt="marriage biodata" />
          <img src={dots} alt="marriage biodata" />
          <img src={dots} alt="marriage biodata" />
          <img src={dots} alt="marriage biodata" />
          <img src={dots} alt="marriage biodata" />
        </div>
        <div className="user-image-section">
          {user?.profileImageWeb && (
            <CardMedia
              className="user-image"
              component="img"
              height="140"
              image={user.profileImageWeb}
              alt="marriage biodata"
            />
          )}
        </div>
      </div>
      <div className="section-2-horoscope">
        <div className="section-2-horoscope-colour">
          <h1>Horoscope Details</h1>
          <div className="horoscope-all-details">
            <hr className="hr-line2" />
            <div className="full-details">
              {user?.timeOfBirth && (
                <>
                  <p>Time of Birth</p> <p>{user.timeOfBirth}</p>
                </>
              )}
            </div>
            <div className="full-details">
              {user?.placeOfBirth && (
                <>
                  <p>Place of Birth</p> <p>{user.placeOfBirth}</p>
                </>
              )}
            </div>
            <div className="full-details">
              {user?.mangal && (
                <>
                  <p>Mangal</p> <p>{user.mangal}</p>
                </>
              )}
            </div>
            <div className="full-details">
              {user?.kuldevak && (
                <>
                  <p>Kuldevak/Gotra</p> <p>Islam</p>
                </>
              )}
            </div>
          </div>
          <div className="user-image-section-2">
            {user?.otherImages && (
              <CardMedia
                className="user-image-2"
                component="img"
                height="140"
                image={user.otherImagesWeb}
                alt="marriage biodata"
              />
            )}
          </div>
          <div className="section-2-family-details">
            <h1>Family Details</h1>
            <hr className="hr-line3" />
            <div className="section-2-family-all-details">
              <div className="full-details" style={{ marginTop: "10px" }}>
                {user?.fatherName && (
                  <>
                    <p>Father Name</p> <p>{user?.fatherName}</p>
                  </>
                )}
              </div>
              <div className="full-details">
                {user?.fatherOccupation && (
                  <>
                    <p>Father Occupation</p> <p>{user?.fatherOccupation}</p>
                  </>
                )}
              </div>
              <div className="full-details">
                {user?.motherName && (
                  <>
                    <p>Mother Name</p> <p>{user?.motherName}</p>
                  </>
                )}
              </div>
              <div className="full-details">
                {user?.motherOccupation && (
                  <>
                    <p>Mother Occupation</p> <p>{user?.motherOccupation}</p>
                  </>
                )}
              </div>
              <div className="full-details">
                {user?.siblings && (
                  <>
                    <p>Siblings</p> <p>{user?.siblings}</p>
                  </>
                )}
              </div>
              <div className="full-details">
                {user?.brother && (
                  <>
                    <p>Brother(s)</p> <p>{user?.brother}</p>
                  </>
                )}
              </div>
              <div className="full-details">
                {user?.sister && (
                  <>
                    <p>Sister(s)</p> <p>{user?.sister}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3-expectations">
        <div className="section-3-image">
          <h1>Live life happily</h1>
          <hr className="hr-line4" />
          <img src={image} alt="marriage biodata" />
        </div>
        <div className="section-3-hobbies">
          <h3>Hobbies</h3>
          <div className="horizontal-bar"></div>
          {user?.hobbies && (
            <div className="hobbies-all-details">{user.hobbies}</div>
          )}
          <div className="section-3-expection">
            <h3 style={{ marginTop: "40px", marginLeft: "40px" }}>
              Expectations
            </h3>
            <div
              className="horizontal-bar"
              style={{ marginLeft: "40px" }}
            ></div>
            <div className="expectations-all-details">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              impedit ea illum! A, neque? Officiis ipsa necessitatibus, eligendi
              blanditiis ullam nesciunt nihil reprehenderit ipsum eaque
              voluptatibus sapiente maxime totam, alias repellendus, nobis atque
              non? Mollitia corrupti dolore veritatis provident
            </div>
          </div>
        </div>
      </div>
      <div className="section-4-image-galary">
        <h1>Photo Gallery</h1>
        <hr
          className="hr-line4"
          style={{ marginLeft: "40px", width: "250px" }}
        />
        <div className="galary-section">
          <img src={image} alt="marriage biodata" />
          <img src={image} alt="marriage biodata" />
        </div>
      </div>
      <div className="section-5-contacts">
        <h1>Address & Location</h1>
        <hr className="hr-line4" style={{ width: "250px" }} />
        <p>
          The residential address of {user?.name} is given below where the other
          family memberscan also reside.
        </p>
        <div className="user-cotact-details">
          {user?.address && (
            <>
              <p>Address</p> <p>{user.address}</p>
            </>
          )}
          {user?.city && (
            <>
              <p>City</p> <p>{user.city}</p>
            </>
          )}
          {user?.pincode && (
            <>
              <p>Pincode</p> <p>{user.pincode}</p>
            </>
          )}
          {user?.state && (
            <>
              <p>State</p> <p>{user.state}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
