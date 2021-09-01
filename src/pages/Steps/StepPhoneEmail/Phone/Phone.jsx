import React, { useState } from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import Textinput from "../../../../components/shared/Input/Textinput";
import styles from "../../StepPhoneEmail/StepPhoneEmail.module.css";
const Phone = ({onNext}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Card heading={"Enter your phone number"} icon={"phone"}>
      <Textinput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder={"+919717910813"}
      />

      <div>
        <div className={styles.phoneButtonWrapper}>
          <Button title={`Next`} logo={"arrow-forward"} onClick={onNext}></Button>
        </div>
        <p className={styles.phoneParagraph}>
          By entering your number, you're agreeing to our terms of service and
          privacy policy .Thanks
        </p>
      </div>
    </Card>
  );
};

export default Phone;
