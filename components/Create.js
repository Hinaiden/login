import React from "react";
import "./Create.css";

function Create() {
  return (
    <div>
      <div className="nav">
        <button>Acc</button>
        <button>Log</button>
        <button>Cred</button>
        <button>NFT</button>
      </div>
      <div className="center">
        <div className="upper">
          <p>$ROLE /</p>
          <p>$USER_ID</p>
        </div>
        <div className="title">$CREATE_UPDATE Account</div>
        <i class="fa-solid fa-xmark fa-2xl cross"></i>
        <div className="body">
          <input type="text" placeholder="User ID" />
          <input type="text" placeholder="Role" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Company ID" />
          <input type="text" placeholder="Company Address" />
          <input type="text" placeholder="Company Contact" />

          <button className="button">$CREATE_UPDATE</button>
        </div>
      </div>
    </div>
  );
}

export default Create;
