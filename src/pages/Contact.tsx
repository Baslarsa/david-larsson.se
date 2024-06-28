import { motion } from "framer-motion";
import PageTitle from "../components/text/PageTitle";
import TextField from "../components/input/TextField";
import TextArea from "../components/input/TextArea";
import PrimaryButton from "../components/button/PrimaryButton";
import { useState } from "react";
import Paragraph from "../components/text/Paragraph";
import constants from "../utils/constants";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSendEmail = () => {
    if (!name || !email || !message) {
      return;
    }
    console.log(constants.emailEndpoint);
    setButtonText("Sending...");
    fetch(constants.emailEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setButtonText("Email sent!");
      })
      .catch((error) => {
        setButtonText("Cound not send email");
        console.error("Error:", error);
      });

    clearForm();
  };

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
      exit={{ y: "100%", opacity: 0, transition: { duration: 0.5 } }}
      transition={{ ease: "easeIn" }}
      className="dark:text-white text-black h-full w-full"
    >
      <div className="w-full h-full md:px-16 md:py-12 px-8 py-6 flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full">
          <div className="pr-12 text-center md:text-left">
            <PageTitle title="Contact" />
            <Paragraph className="py-4">
              I'm always interested in hearing about new projects, so if you
              have a project you'd like to discuss, don't hesitate to contact me
            </Paragraph>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full">
          <div className="w-full h-full px-8 py-6 bg-offWhite dark:bg-offBlack flex flex-col gap-6">
            <TextField title="Name" value={name} onChange={setName} />
            <TextField title="Email" value={email} onChange={setEmail} />
            <TextArea title="Message" value={message} onChange={setMessage} />
            <PrimaryButton label={buttonText} onClick={handleSendEmail} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
