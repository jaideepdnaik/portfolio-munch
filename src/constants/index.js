import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

import resume from "./Resume_Minchu_HR.pdf";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Minchu H R, a passionate HR and Digital Marketing enthusiast, blending creativity and strategy to enhance talent experiences and drive impactful business outcomes. ",
  description:
    "Currently pursuing a PGDM, I specialize in leveraging digital platforms to connect people and amplify organizational growth.",
  resumeLinkText: "Download Resume",
  resumeLink: resume,
};

export const PROJECTS = [
  {
    name: "Research on Digital Marketing Trends Among Youths",
    description: "Exploring youth-driven digital marketing trends.",
    image: projects1,
    link: "https://github.com/your-github/streamerzz",
  },
  {
    name: "Research on Sustainability in the Energy Sector",
    description: "Innovative paths to sustainable energy solutions.",
    image: projects2,
    link: "https://github.com/your-github/nutritrack",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "Highly motivated and detail-oriented HR and Digital Marketing aspirant, currently pursuing Post Graduate Diploma in Management (Class of 2025) with a dual focus on Human Resources and Marketing. My internship experience in Learning and Development has deepened my understanding of organizational behavior and talent development. With a strong interest in social media and human behavior, I aim to harness the power of digital platforms to drive business outcomes and enhance employee experiences. Collaborative, analytical, and creative, I'm eager to make a meaningful impact in the HR and marketing landscape.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "July 2024 — October 2024",
    title: "Human Resources Intern (L&D)",
    location: "Toyota Kirloskar Motors, Bangalore ",
    description: [
      "Designed and implemented employee training programs, aligning with corporate training strategies.",
      "Conducted skills assessments to identify training needs and supported HR initiatives.",
      "Gained practical insights into Learning & Development within the automotive industry.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "jason@example.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/yourprofile",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Jason Root. All rights reserved.`,
};
