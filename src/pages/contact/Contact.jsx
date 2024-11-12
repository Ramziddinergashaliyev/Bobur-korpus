import React from "react";
import "./contact.scss";
import { useGetValue } from "../../hooks/useGetValue";

const initialState = {
  fname: "",
  email: "",
  message: "",
};

const BOT_TOKEN = "7177611291:AAEVLXDpqfpajh7Obmq0VWV_D0TDGoMwm5Y";
const CHAT_ID = "-1002148512889";
const USER_ID = "1431700586";

const Contact = () => {
  const { formData, setFormData, handleChange } = useGetValue(initialState);

  const handleSendMessage = (e) => {
    e.preventDefault();
    let text = "Buyurtma:%0A";
    text += `FirstName: <b>${formData.fname}</b>%0A`;
    text += `LastName: <b>${formData.email}</b>%0A%0A`;
    text += `Email Address: <b>${formData.message}</b>%0A`;

    let url = ` https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
    console.log("ok");
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setFormData(initialState);
    // toast.success("Xabar jo'natildi");
  };

  return (
    <div className="contact">
      <div className="container">
        <form action="" onSubmit={handleSendMessage} className="contact__form">
          <label htmlFor="">
            <span>Full Name</span>
            <input
              required
              type="text"
              value={formData.fname}
              name="fname"
              onChange={handleChange}
              placeholder="Your Name"
            />
          </label>
          <label htmlFor="">
            <span>Email address</span>
            <input
              required
              type="text"
              value={formData.email}
              name="email"
              onChange={handleChange}
              placeholder="Your email"
            />
          </label>
          <label htmlFor="">
            <span>Message</span>
            <textarea
              value={formData.message}
              name="message"
              onChange={handleChange}
              placeholder="Your message"
            ></textarea>
          </label>
          <button className="contact__form__btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
