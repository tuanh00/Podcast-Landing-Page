import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  Header,
  PodcastSection,
  PodcastCard,
  PodcastIframeWrapper,
  PodcastDescription,
} from "./styledComponents";

export const LandingPage: React.FC = () => {
  const episodes = [
    {
      id: 1,
      src: "https://www.buzzsprout.com/2425240/episodes/16121487-episode-1-how-i-used-chatgpt-to-score-100-on-my-coding-project?client_source=small_player&iframe=true",
      title:
        "Huynh Tu Anh Chau's Podcast, Episode 1 - How I Used ChatGPT to Score 100% on My Coding Project!",
      description: (
        <>
          <p>
            In this episode, I recount my experience of applying ChatGPT to
            achieve a perfect score on a technical project. I also highlight the
            importance of foundational knowledge in programming, how to ask
            precise questions to get accurate answers from AI, and the
            limitations of relying solely on AI without understanding the
            underlying concepts.
          </p>
          <p>Sources:</p>
          <p>
            <span role="img" aria-label="link">
              🔗
            </span>{" "}
            <a
              href="https://www.wired.com/story/17-tips-better-chatgpt-prompts/"
              target="_blank"
            >
              17 Tips to Take Your ChatGPT Prompts to the Next Level | WIRED
            </a>
            <br />
            <span role="img" aria-label="link">
              🔗
            </span>{" "}
            <a
              href="https://www.wsj.com/tech/ai/chat-gpt-tips-ai-responses-d48a8f6d?utm_source=chatgpt.com"
              target="_blank"
            >
              Six Secrets For Using ChatGPT and Other AI Chatbots Like a Pro -
              WSJ
            </a>
          </p>
        </>
      ),
    },
    {
      id: 2,
      src: "https://www.buzzsprout.com/2425240/episodes/16165349-episode-2-ai-changed-my-life-how-artificial-intelligence-helps-with-adhd?client_source=small_player&iframe=true",
      title:
        "Huynh Tu Anh Chau's Podcast, Episode 2 - AI Changed My Life: How Artificial Intelligence Helps with ADHD",
      description: (
        <>
          <p>
            This episode delves into how AI tools can support individuals with
            ADHD by offering personalized assistance without judgment. While we
            have discussed how AI impacts the external world, we have not yet
            explored how AI affects the sensitive inner aspects of everyone's
            life—not just students dealing with disorders or intangible health
            issues like mental health. It's worthwhile to take time to care for
            one's life and raise awareness about one's own health. I'll also
            mention AI-driven apps and platforms that aid in time management.
          </p>
          <p>Sources:</p>
          <p>
            <span role="img" aria-label="link">
              🔗
            </span>{" "}
            <a
              href="https://www.additudemag.com/chatgpt-ai-adhd-executive-function-support/"
              target="_blank"
            >
              AI for ADHD: How to Make ChatGPT Work for You
            </a>
            <br />
            <span role="img" aria-label="link">
              🔗
            </span>{" "}
            <a href="https://www.cdc.gov/adhd/about/index.html" target="_blank">
              About Attention-Deficit / Hyperactivity Disorder (ADHD)
            </a>
            <br />
            <span role="img" aria-label="link">
              🔗
            </span>{" "}
            <a
              href="https://www.theguardian.com/commentisfree/article/2024/sep/11/fearing-ai-i-was-reluctant-to-use-chatgpt-but-friends-it-changed-my-life"
              target="_blank"
            >
              Fearing AI, I was reluctant to use ChatGPT. But friends, it
              changed my life | Van Badham | The Guardian
            </a>
          </p>
        </>
      ),
    },
    {
      id: 3,
      src: "https://www.buzzsprout.com/2425240/episodes/16165377-episode-3-the-ai-job-takeover-will-ai-replace-programmers?client_source=small_player&iframe=true",
      title:
        "Huynh Tu Anh Chau's Podcast, Episode 3 - The AI Job Takeover: Will AI Replace Programmers?",
      description: (
        <>
          <p>
            This episode explores the fears and realities surrounding AI
            automation in the tech industry. Debate whether AI will render
            certain jobs obsolete or create new opportunities. This topic
            relates to the future of the technological workforce, and since
            everyone is experiencing its impact, I think it would be great to
            discuss it. One's own experiences reinforce different points of
            view, so discussing this topic can provide valuable insights.
          </p>
          <p>Sources:</p>
          <p>
            <span role="img" aria-label="link">
              🔗
            </span>{" "}
            <a
              href="https://lasallecollege.lcieducation.com/en/news-and-events/events/2024/11/techweek-2024"
              target="_blank"
            >
              Presentation by Kaveh Bakhtiyari: "ChatGPT and Hallucination: An
              Intro into Large Language Models," TechWeek at LaSalle College.
            </a>
          </p>
        </>
      ),
    },
  ];

  return (
    <Container>
      <Header>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Unlocking AI: From Perfect Scores to Job Takeovers—A Student's Journey
        </motion.h1>
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          This podcast explores the transformative impact of Artificial
          Intelligence (AI) on education, personal development, and
          cybersecurity. As a student in Computer Science, I think the theme is
          worth pursuing because it highlights real-world applications and the
          implications of AI that are both beneficial and cautionary.
        </motion.p>
      </Header>
      <PodcastSection>
        {episodes.map((episode, index) => (
          <PodcastCard
            key={episode.id}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
            >
              <PodcastIframeWrapper>
                <iframe
                  src={episode.src}
                  loading="lazy"
                  title={episode.title}
                ></iframe>
              </PodcastIframeWrapper>
            </motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
            >
              <PodcastDescription>{episode.description}</PodcastDescription>
            </motion.div>
          </PodcastCard>
        ))}
      </PodcastSection>
    </Container>
  );
};
