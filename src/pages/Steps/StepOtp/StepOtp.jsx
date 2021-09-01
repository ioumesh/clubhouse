import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";
import Textinput from "../../../components/shared/Input/Textinput";
import styles from "./StepOtp.module.css";
const StepOtp = (props) => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card heading={"Enter the code we just texted you "} icon={"lock"}>
          <Textinput
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder={"****"}
          />

          <div>
            <div className={styles.phoneButtonWrapper}>
              <Button title={`Next`} logo={"arrow-forward"}></Button>
            </div>
            <p className={styles.phoneParagraph}>
              By entering your number, you're agreeing to our terms of service
              and privacy policy .Thanks
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepOtp;
