import React, { useState } from "react";
import { sendGridEmail } from "react-native-sendgrid";
// import ValidationComponent from "react-native-form-validator/src/ValidationComponent";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
} from "../components/contact-us-form.styles";
import { Spacer } from "../../components/spacer.component";

const SENDGRIDAPIKEY = "YOURAPIKEY";
const FROMEMAIL = "neerajgupta12300.com";
const TOMEMAIL = "info@redpositive.in";
const SUBJECT = "You have a new message";

export default ContactUsScreen = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const clearFields = () => {
    setName("")
    setPhone("")
    setEmail("")
    setMessage("")
  }

  // _onSubmit = () => {
  //   validate({
  //     name: {minlength:3, maxlength:7, required: true},
  //     email: {email: true, required: true},
  //     number: {numbers: true, required: true},
  //   });
  // }
  
  const sendEmail = ({ name, phone, email, message }) => {
    const ContactDetails = "Contact Data: " + name + " Mail: " + email + " Phone: " + phone + " Message: " + message;
		const sendRequest = sendGridEmail(SENDGRIDAPIKEY, TOMEMAIL, FROMEMAIL, SUBJECT, ContactDetails )
    sendRequest.then((response) => {
      clearFields();
	    console.log("Success")
	  }).catch((error) =>{
	    console.log(error)
	  });
  }
  
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Spacer size="large">
          <AuthInput
            label="Name"
            value={name}
            textContentType="text"
            keyboardType="default"
            autoCapitalize="none"
            onChangeText={(u) => setName(u)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Phone"
            value={phone}
            textContentType="Phone"
            keyboardType="numeric"
            onChangeText={(u) => setPhone(u)}
          />
        </Spacer>
        <Spacer size="large">
         <AuthInput
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="message"
            value={message}
            textContentType="default"
            autoCapitalize="none"
            onChangeText={(u) => setMessage(u)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => sendEmail(name, phone, email, message)}
          >
            Submit
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
