import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";

import resume from "./Resume_Minchu_HR.pdf";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#blogs", label: "Blogs" },
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

export const BLOGS = [
  {
    name: "Memoirs",
    title: "My Unforgettable Journey in Mysore",
    feedback:
      "My three years in Mysore, pursuing a B.Sc. in BMBT at JSS College, were an adventurous journey of unforgettable experiences, deep friendships, and life-changing lessons. Despite the challenges of hostel life during the COVID-19 pandemic, I built lasting bonds, adapted to new realities, and created cherished memories, from navigating warden rules to crafting creative leave excuses.",
    image: person1,
    link: "https://minchuhr.blogspot.com/2024/05/my-unforgettable-journey-in-mysore.html?m=1"
  },
  {
    name: "Andaman Escapade",
    title: "A Short but Memorable Trip to Andaman and Nicobar Islands",
    feedback:
      "Earlier this June, my family and I embarked on a brief yet unforgettable journey to the Andaman and Nicobar Islands. Despite it being monsoon season, which we later learned from the locals is not the ideal time to visit, we thoroughly enjoyed our trip. The best time to visit these islands is from September to April when the weather is more accommodating. Here's a detailed account of our adventure.",
    image: person2,
    link: "https://minchuhr.blogspot.com/2024/06/a-short-but-memorable-trip-to-andaman.html?m=1"
  },
  {
    name: "Homecoming",
    title: "An Inspiring Journey Back Home",
    feedback:
      "After a week of exhausting exams in Bangalore, I finally boarded the bus back to my native place, looking forward to some well-deserved rest. Little did I know that this journey would turn into an enlightening experience, thanks to a chance encounter with a remarkable stranger.",
    image: person3,
    link: "https://minchuhr.blogspot.com/2024/06/an-inspiring-journey-back-home.html?m=1"
  },
  {
    name: "Rekindled Ties",
    title: "Family bonds after a while",
    feedback:
      "After what felt like an eternity, I finally had the opportunity to reconnect with my cousin and spend some truly valuable time together. The occasion was nothing short of enlightening, filled with laughter, late-night stories, and a sense of nostalgia that only family can bring.",
    image: person4,
    link: "https://minchuhr.blogspot.com/2024/11/family-bonds-after-while.html?m=1"
  },
  {
    name: "Toyota Chronicles",
    title: "An Unforgettable Internship Experience at Toyota Kirloskar",
    feedback:
      "My three-month internship at Toyota Kirloskar was an incredible adventure. Immersing myself in the Japanese work culture was a truly enriching experience. The respect, equality, and camaraderie among employees left a lasting impression.",
    image: person5,
    link: "https://minchuhr.blogspot.com/2024/11/an-unforgettable-internship-experience.html?m=1"
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm passionate about leveraging digital platforms and human insights to drive impactful business outcomes and elevate employee experiences. Let's collaborate to create meaningful change and innovation.",
  email: "minchuhr18@gmail.com",
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/art_by_minchu/",
      ariaLabel: "Follow me on Instagram",
      icon: "RiInstagramFill",
    },
    // {
    //   platform: "GitHub",
    //   url: "https://github.com/yourprofile",
    //   ariaLabel: "View my GitHub profile",
    //   icon: "RiGithubFill",
    // },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/minchu-h-r-b6077925a/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Minchu H R. All rights reserved.`,
};
