import styled from "@emotion/styled";
import { motion } from "framer-motion";

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
  margin-bottom: 20px;
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
  gap: 20px;
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
    overflow: hidden;
  }
`;

export const PodcastDescription = styled.div`
  flex: 1;
  text-align: left;
  color: #ccc;
  font-size: 0.9rem;
  word-break: break-all; /* Change to break-all */
  overflow-wrap: break-word;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
  a {
    color: #1e90ff;
    text-decoration: none;
    word-break: break-all; /* Ensure links break */
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

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: #000;
  color: #ccc;
  width: 100%;
`;
