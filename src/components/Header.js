import React from "react";
import PersonIcon from "@material-ui/icons/Person";

function Header() {
  return (
    <div className="header">
      <span className="title">facebook</span>
      <div class="profile">
        <span className="my-profile">Meu perfil</span>
        <PersonIcon className="profile-icon" />
      </div>
    </div>
  );
}

export default Header;
