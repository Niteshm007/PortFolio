import React, { useState, useRef } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const variants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error,setError] = useState(null);
  const [success,setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    // Set loading to true while sending the email
    setLoading(true);

    emailjs
      .sendForm(
        "service_c3lt4lb",
        "template_98xn03s",
        formRef.current,
        "epKfi4gkhLsQfyZ6u"
      )
      .then(
        (result) => {
          // Show success toast
          toast.success("Message sent successfully",{
            autoClose:2000,
          });
          setSuccess(true);

          // Reset input fields
          setInputValues({
            user_name: "",
            user_email: "",
            message: "",
          });

          // Reset loading state
          setLoading(false);
        },
        (error) => {
          // Show error toast
          toast.error("Message not sent",{
            autoClose:2000,
          });
          setError(true);

          // Reset loading state
          setLoading(false);
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return (
    <>
    <motion.div
      className="Contact container-md"
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="row">
        <h3 className="section_title">Get In <span>Touch</span></h3>
        <div className="col-md-6">
          <motion.div className="leftContainer" variants={variants}>
            <motion.h1 variants={variants} style={{ color: "var(--first-color)" }}>
              Contact Me
            </motion.h1>

            <motion.div className="item" variants={variants}>
              <h3>Email</h3>
              <p>📫 Niteshmalvi74@gmail.com</p>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <h3>Contact</h3>
              <p>📞+91 7374866730</p>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <h3>Address</h3>
              <p>
                🏡 B-303, Krish Elite, S.P. Ring Road, Nikol, Ahmedabad, Gujarat
              </p>
            </motion.div>
          </motion.div>
          <div className="contact_socials">
                <a
                  href="https://instagram.com/nitesh_malvi_007?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noreferrer"
                  className="contact_social-link"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/nitesh-malviya-01b572247"
                  target="_blank"
                  rel="noreferrer"
                  className="contact_social-link"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Niteshm007"
                  target="_blank"
                  rel="noreferrer"
                  className="contact_social-link"
                >
                  <FaGithub />
                </a>
              </div>
        </div>
        <div className="col-md-6">
          <motion.div
            className="rightContainer"
          >
           <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <input
              type="text"
              required
              placeholder="Name"
              name="user_name"
              value={inputValues.user_name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="user_email"
              value={inputValues.user_email}
              onChange={handleInputChange}
            />
            <textarea
              rows={8}
              placeholder="Message"
              name="message"
              value={inputValues.message}
              onChange={handleInputChange}
            />
            <button className="button" type="submit" value="Send" disabled={loading}>
      {loading ? (
        <span style={{ fontWeight: 'bold', color: 'black' }}>Sending...</span>
      ) : (
        <>
          Send Message
          <span className="button_icon contact_button_icon">
            <FiSend />
          </span>
        </>
      )}
    </button>
            {error && ""}
            {success && ""}
          </motion.form>      
          </motion.div>
        </div>
      </div>
    </motion.div>
    <ToastContainer/>
    </>
  );
};

export default Contact;


              <button className="button">
                Send Message
                <span className="button_icon contact_button_icon">
                  <FiSend />
                </span>
              </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
