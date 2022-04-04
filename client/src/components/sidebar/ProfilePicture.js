import React from "react";
import { CgProfile } from "react-icons/cg";

import "../../style/global.scss";

function ProfilePicture() {
  return (
    <div className="profile-picture">
      <CgProfile style={{ width: "50px", height: "50px", color: "#aebac1" }} />
    </div>
  );
}

export default ProfilePicture;
