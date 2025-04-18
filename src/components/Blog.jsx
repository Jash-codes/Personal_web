import React from 'react';
import './Blog.css';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    icon: "🏆",
    title: "1st Prize – Heart Disease Paper @ GRT Institute (₹1500)",
    link: "https://www.linkedin.com/posts/jashwanth-g-0b0a91276_achievement-paperpresentation-teamwork-activity-7253665368026558464-BP-l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENveEQBE32apm2QdJhpWUizreYm4w2LoA0",
  },
  {
    icon: "🏆",
    title: "1st Prize – MedPredict Paper @ Jerusalem Engineering College (₹2000)",
    link: "https://www.linkedin.com/posts/jashwanth-g-0b0a91276_1stplace-medpredict-aiforhealthcare-activity-7299381709471371264-0Ok1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENveEQBE32apm2QdJhpWUizreYm4w2LoA0",
  },
  {
    icon: "🏅",
    title: "1st Prize – Seal the Deal @ Sri Ramachandra (Medal + Trophy)",
    link: "https://www.linkedin.com/posts/jashwanth-g-0b0a91276_1stprize-achievementunlocked-sealthedeal-activity-7299383790919987200-6VI2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENveEQBE32apm2QdJhpWUizreYm4w2LoA0",
  },
  {
    icon: "🥈",
    title: "2nd Prize – MedPredict Paper @ Rajalakshmi (₹2000)",
    link: "https://www.linkedin.com/posts/jashwanth-g-0b0a91276_achievement-paperpresentation-ai-activity-7301907714480160768-Gh6K?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENveEQBE32apm2QdJhpWUizreYm4w2LoA0",
  },
  {
    icon: "🥈",
    title: "2nd Prize – MedPredict Paper @ Sindhi Arts & Science (Shield + Medal)",
    link: "https://www.linkedin.com/posts/jashwanth-g-0b0a91276_success-paperpresentation-ai-activity-7301905658235301889-bd9L?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENveEQBE32apm2QdJhpWUizreYm4w2LoA0",
  },
  {
    icon: "🎖️",
    title: "Inter College Award – Dr. M.G.R. Educational Institute",
    link: "https://www.linkedin.com/posts/jashwanth-g-0b0a91276_intercollegeeventaward-mgredu-hardworkpaysoff-activity-7316839629872107520-Y16b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENveEQBE32apm2QdJhpWUizreYm4w2LoA0",
  },
  {
    icon: "💻",
    title: "Hackathon @ VIT – EmpowerTech Participation",
    link: "https://www.linkedin.com/posts/jashwanth-g-0b0a91276_empowertech-hackathonexperience-vitchennai-activity-7316838464052776961-DNBW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENveEQBE32apm2QdJhpWUizreYm4w2LoA0",
  },
];

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <h2>Awards & Achievements</h2>
      <div className="blog-list">
        {blogPosts.map((post, i) => (
          <motion.a
            href={post.link}
            className="blog-card"
            key={i}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="blog-icon">{post.icon}</div>
            <p>{post.title}</p>
            <span className="blog-link">View on LinkedIn ↗</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Blog;
