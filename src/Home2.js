import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./style.css";

const Home2 = () => {
  const [user, setUser] = useState("");
  let { user_id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          `http://142.93.218.129:2001/api/user/getOne/${user_id}`
        );

        document.description = `Age: ${data?.age} \n Living in: ${data?.address}`;
        if (data.profileImage) {
          document.getElementById(
            "favicon"
          ).href = `http://142.93.218.129:2001/files/${data?.profileImage}`;
        }

        var myDynamicManifest = {
          name: data?.name,
          short_name: "Site",
          description: data?.age,
          start_url: "",
          background_color: "#000000",
          theme_color: "#0f4a73",
          icons: [
            {
              src: `http://142.93.218.129:2001/files/${data?.profileImage}`,
              sizes: "256x256",
              type: "image/jpg",
            },
          ],
        };
        const stringManifest = JSON.stringify(myDynamicManifest);
        const blob = new Blob([stringManifest], { type: "application/json" });
        const manifestURL = URL.createObjectURL(blob);
        document
          .querySelector("#my-manifest-placeholder")
          .setAttribute("href", manifestURL);

        if (!data?.profileImage) {
          document.getElementById("name-section").style.marginTop = "10px";
        }
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="main-container">
      <div className="section-1 profile-image">
        {user?.profileImage && (
          <img
            src={`http://142.93.218.129:2001/files/${user.profileImage}`}
            alt="pofile image"
          />
        )}
      </div>
      <div className="section-2 basic-details" id="name-section">
        <h1>{user?.name}</h1>
        <hr />
        <div className="basic-details-1">
          {user?.age && (
            <div className="basic-details-11">
              <p>AGE</p>
              <h4>{user.age}</h4>
            </div>
          )}
          <hr />
          {user?.city && (
            <div className="basic-details-12">
              <p>CITY</p>
              <h4>{user.city}</h4>
              <h5>{user?.state}</h5>
            </div>
          )}
          <hr />
          {user?.height && (
            <div className="basic-details-13">
              <p>HEIGHT</p>
              <h4>{user.height}</h4>
            </div>
          )}
        </div>
        <hr />
      </div>
      <div className="section-3">
        {user?.hobbies && (
          <div className="common-detail-header">
            <h4>Hobbies</h4>
            <hr
              style={{
                width: "50px",
                height: "1px",
                backgroundColor: "green",
                marginBottom: "10px",
              }}
            />
          </div>
        )}
        <div className="about-me">
          <p>{user.hobbies}</p>
        </div>
        <div className="common-detail-header">
          <h1>Personal Details</h1>
          <hr
            style={{ width: "100px", height: "1px", backgroundColor: "green" }}
          />
        </div>
        <div className="basic-details-2 basic-details-common">
          {user?.email && (
            <>
              <p>Email:</p> <p>{user.email}</p>
            </>
          )}
          {user?.mobile && (
            <>
              <p>Mobile:</p> <p>{user.mobile}</p>
            </>
          )}
          {user?.dob && (
            <>
              <p>Birth Date:</p> <p>{user.dob}</p>
            </>
          )}
          {user?.age && (
            <>
              <p>Age:</p> <p>{user.age}</p>
            </>
          )}
          {user?.religion && (
            <>
              <p>Religion:</p> <p>{user.religion}</p>
            </>
          )}
          {user?.caste && (
            <>
              <p>Caste:</p> <p>{user.caste}</p>
            </>
          )}
          {user?.bloodGroup && (
            <>
              <p>Blood Group:</p> <p>{user.bloodGroup}</p>
            </>
          )}
        </div>
      </div>
      <div className="section-4">
        {(user?.timeOfBirth ||
          user?.placeOfBirth ||
          user?.mangal ||
          user?.kuldevak) && (
          <div className="common-detail-header">
            <h1>Horoscope Details</h1>
            <hr
              style={{
                width: "100px",
                height: "1px",
                backgroundColor: "white",
                marginBottom: "10px",
              }}
            />
          </div>
        )}
        <div className="basic-details-common horoscope-details">
          {user?.timeOfBirth && (
            <>
              <p>Birth Time:</p> <p>{user.timeOfBirth}</p>
            </>
          )}
          {user?.placeOfBirth && (
            <>
              <p>Birth Place:</p> <p>{user.placeOfBirth}</p>
            </>
          )}
          {user?.mangal && (
            <>
              <p>Mangal:</p> <p>{user.mangal}</p>
            </>
          )}
          {user?.kuldevak && (
            <>
              <p>Kuldevak/Gotra:</p> <p>{user.kuldevak}</p>
            </>
          )}
        </div>
        <div className="common-detail-header">
          <h1>Education Details</h1>
          <hr
            style={{
              width: "100px",
              height: "1px",
              backgroundColor: "white",
              marginBottom: "10px",
            }}
          />
        </div>
        <div className="basic-details-common horoscope-details">
          {user?.education && (
            <>
              <p>Education:</p> <p>{user.education}</p>
            </>
          )}
          {user?.occupation && (
            <>
              <p>Occupation:</p> <p>{user.occupation}</p>
            </>
          )}
          {user?.income && (
            <>
              <p>Income:</p> <p>{user.income}</p>
            </>
          )}
        </div>
      </div>
      <div className="section-5 other-image">
        {user?.otherImages && (
          <img
            src={`http://142.93.218.129:2001/files/${user.otherImages}`}
            alt="other image"
          />
        )}
      </div>
      {user?.expectations && (
        <div className="section-6">
          <div className="common-detail-header">
            <h4>Expectations</h4>
            <hr
              style={{
                width: "100px",
                height: "1px",
                backgroundColor: "green",
                marginBottom: "10px",
              }}
            />
          </div>
          <div className="expectations">
            <p>{user.expectations}</p>
          </div>
        </div>
      )}
      <div className="section-7 family_details">
        <div className="common-detail-header">
          <h1>Family Details</h1>
          <hr
            style={{
              width: "100px",
              height: "1px",
              backgroundColor: "green",
              marginBottom: "10px",
            }}
          />
        </div>
        <div className="basic-details-common family-details">
          {user?.grandFather && (
            <>
              <p>Grand Father:</p> <p>{user.grandFather}</p>
            </>
          )}
          {user?.grandMother && (
            <>
              <p>Grand Mother:</p> <p>{user.grandMother}</p>
            </>
          )}
          {user?.fatherName && (
            <>
              <p>Father Name:</p> <p>{user.fatherName}</p>
            </>
          )}
          {user?.paternalua && (
            <>
              <p>Paternal Uncle/Aunt:</p> <p>{user.paternalua}</p>
            </>
          )}
          {user?.maternalua && (
            <>
              <p>Maternal Uncle/Aunt:</p> <p>{user.maternalua}</p>
            </>
          )}
          {user?.fatherOccupation && (
            <>
              <p>Father Occupation:</p> <p>{user.fatherOccupation}</p>
            </>
          )}
          {user?.motherName && (
            <>
              <p>Mother Name:</p> <p>{user.motherName}</p>
            </>
          )}
          {user?.motherOccupation && (
            <>
              <p>Mother Occupation:</p> <p>{user.motherOccupation}</p>
            </>
          )}
          {user?.siblings && (
            <>
              <p>Siblings:</p> <p>{user.siblings}</p>
            </>
          )}
          {user?.brother && (
            <>
              <p>Brother(s):</p> <p>{user.brother}</p>
            </>
          )}
          {user?.sister && (
            <>
              <p>Sister(s):</p> <p>{user.sister}</p>
            </>
          )}
        </div>
      </div>
      {user?.address && (
        <>
          <div className="common-detail-header">
            <div className="section-8">
              <h1>Location</h1>
              <hr
                style={{
                  width: "100px",
                  height: "1px",
                  backgroundColor: "green",
                  marginBottom: "10px",
                }}
              />
            </div>
          </div>
          <div className="basic-details-common location-details">
            <p>Address:</p>{" "}
            <p>
              {user.address} {user?.pincode}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Home2;
