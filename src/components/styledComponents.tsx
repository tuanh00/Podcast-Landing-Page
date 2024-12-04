import styled from "@emotion/styled";
import { motion } from "framer-motion";
import thankYouImage from "../imgs/thank_you_bg.jpg"; // Ensure correct path to the image

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  color: #fff;
  min-height: 100vh;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent white overlay */
  backdrop-filter: blur(5px); /* Apply blur effect */
  -webkit-backdrop-filter: blur(5px); /* For Safari */
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 50px;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    background: linear-gradient(90deg, #0e76a8, #ffffff, #0e76a8);
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    animation: shine 5s linear infinite;
  }
  p {
    font-size: 1.2rem;
    color: #ccc;
  }

  @keyframes shine {
    0% {
      background-position: 200% 50%;
    }
    100% {
      background-position: -200% 50%;
    }
  }
`;

export const PodcastSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  padding-bottom: 100px;
`;

export const PodcastCard = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  gap: 30px;
  box-sizing: border-box;
  @media (max-width: 800px) {
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 10px;
  }
`;

export const PodcastIframeWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  iframe {
    width: 100%;
    height: 200px;
    border: none;
    border-radius: 15px;
  }
`;

export const PodcastDescription = styled.div`
  flex: 1;
  text-align: justify;
  color: #ccc;
  font-size: 1rem; /* Increase font size for better readability */
  line-height: 1.4; /* Add line-height for improved spacing between lines */
  word-break: normal;
  overflow-wrap: break-word;
  white-space: pre-wrap; /* Preserve spaces and wrap lines correctly */
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
  a {
    color: #1e90ff;
    text-decoration: none;
    overflow-wrap: break-word; /* Ensure links wrap properly */
    hyphens: auto; /* Add hyphenation for long links */
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    color: #ccc;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

export const MessageFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
  backdrop-filter: blur(5px); /* Blur effect */
  border-radius: 15px;
  margin: 20px auto;
  width: 100%;
  max-width: 800px;
  color: #fff;
  box-sizing: border-box; /* Ensure padding doesn't overflow */

  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%; /* Make the form take full width */
    box-sizing: border-box;

    input,
    textarea {
      width: 100%; /* Ensure inputs span full width of their container */
      padding: 16px;
      border-radius: 8px;
      border: none;
      font-size: 1.2rem;
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      box-sizing: border-box; /* Include padding in width calculation */

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      height: 150px; /* Adjusted for a better experience */
      resize: none;
      font-family: inherit; /* Use the same font as the rest of the page */
    }

    button {
      width: 100%; /* Button spans the entire width */
      padding: 16px;
      border: none;
      border-radius: 8px;
      background: linear-gradient(
        90deg,
        #c0c0c0,
        #d8d8d8
      ); /* Initial gradient */
      color: #000;
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease; /* Smooth transition for hover effects */

      &:hover {
        background: linear-gradient(
          90deg,
          #d8d8d8,
          #f0f0f0
        ); /* Slightly lighter gradient */
        box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2); /* Subtle shadow effect */
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%; /* Adjust container width for smaller screens */

    h2 {
      font-size: 1.5rem;
    }

    input,
    textarea {
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
    }
  }
`;

export const ThankYouMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 800px;
  height: 300px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  padding: 20px;
  margin: 20px auto;
  animation: fadeInOut 2s ease;
  color: #fff;

  .image-section {
  flex: 1;
  background-image: url(${thankYouImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%; /* Default height */
  border-radius: 15px 0 0 15px;

  @media (max-width: 768px) {
    height: 150px; /* Explicit height for mobile */
    width: 100%; /* Ensure it spans full width */
    border-radius: 15px 15px 0 0; /* Adjust border radius for mobile */
  }
}

  .text-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px;

    h2 {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.9);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .image-section {
      height: 150px;
      border-radius: 15px 15px 0 0;
    }

    .text-section {
      padding: 10px;

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: #000;
  color: #ccc;
  width: 100%;
`;
