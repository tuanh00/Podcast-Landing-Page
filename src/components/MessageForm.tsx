import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MessageFormContainer, ThankYouMessage } from "./styledComponents";

export const MessageForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_podcast_id", // Replace with your EmailJS service ID
        "template_8fq91ei", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          message: formData.message,
          to_name: "Tu Anh - June265zz",
        },
        "JA5ZYYrPmI0ueqoe7" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setShowThankYou(true); // Show thank-you message
          setTimeout(() => setShowThankYou(false), 2000); // Hide it after 2 seconds
          setFormData({ name: "", message: "" }); // Clear the form
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      {showThankYou ? (
        <ThankYouMessage>
          <div className="image-section"></div>
          <div className="text-section">
            <h2>Thank You!</h2>
            <p>Your message has been received.</p>
          </div>
        </ThankYouMessage>
      ) : (
        <MessageFormContainer>
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Watch your thoughts; they become words..."
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
          <div className="content-container">
            <p>
              Your feedback matters! Let me know how I can improve or what you
              liked about the podcast.
            </p>
          </div>
        </MessageFormContainer>
      )}
    </>
  );
};
