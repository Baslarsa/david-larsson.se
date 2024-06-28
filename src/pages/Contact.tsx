import { motion } from "framer-motion";
import PageTitle from "../components/text/PageTitle";
import TextField from "../components/input/TextField";
import TextArea from "../components/input/TextArea";
import PrimaryButton from "../components/button/PrimaryButton";
import { useState } from "react";
import Paragraph from "../components/text/Paragraph";
import constants from "../utils/constants";
import { useFormik } from "formik";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      const { name, email, message } = values;
      if (!name || !email || !message) {
        return;
      }

      setButtonText("Sending...");
      await fetch(constants.emailEndpoint, {
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
        .then((data) => {
          console.log("Success:", data);
          setButtonText("Sent!");
        })
        .catch((error) => {
          console.error("Error:", error);
          setButtonText("Could not send email");
        });
      formik.resetForm();
    },
    validate: (values) => {
      const errors: { name?: string; email?: string; message?: string } = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.message) {
        errors.message = "Required";
      }
      return errors;
    },
  });

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
          <div className="md:pr-12 text-center md:text-left">
            <PageTitle title="Contact" />
            <Paragraph className="py-4">
              I'm always interested in hearing about new projects, so if you
              have a project you'd like to discuss, don't hesitate to contact me
            </Paragraph>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full">
          <div className="w-full h-full bg-offWhite dark:bg-offBlack">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-6"
            >
              <TextField
                name="name"
                id="name"
                title="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name}
              />
              <TextField
                name="email"
                id="email"
                title="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
              />
              <TextArea
                name="message"
                id="message"
                title="Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.errors.message}
              />
              <PrimaryButton label={buttonText} type="submit" />
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
