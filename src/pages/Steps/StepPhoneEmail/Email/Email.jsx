import React, { useState } from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import Textinput from "../../../../components/shared/Input/Textinput";
import styles from "../../StepPhoneEmail/StepPhoneEmail.module.css";

const Email = ({onNext}) => {
  const [Email, setEmail] = useState("");
  return (
    <Card heading={"Enter your email id"} icon={"email"}>
      <Textinput
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"umesh@gmail.com"}
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

export default Email;
