import React, { useState } from "react";
import Phone from "../StepPhoneEmail/Phone/Phone";
import Email from "../StepPhoneEmail/Email/Email";
import style from "./StepPhoneEmail.module.css";
const phoneEmailMap = {
  phone: Phone,
  email: Email,
};
const StepPhoneEmail = ({onNext}) => {
  const [type, setType] = useState("phone");

  const Component = phoneEmailMap[type];

  return (
    <>
      <div className={style.cardWrapper}>
        <div>
          <div className={style.buttonWrapper}>
            <button className={`${style.tabButton} ${ type==='phone'? style.active:''}`} onClick={() => setType("phone")}>
              <img src="/images/phone_android.png" alt="phone" />
            </button>
            <button className={`${style.tabButton} ${ type==='email'? style.active:''}`} onClick={() => setType("email")}>
              <img src="/images/mail_outline.png" alt="phone" />
            </button>
          </div>
          <Component onNext={onNext}/>
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
