import { motion } from "framer-motion";
import { BLOGS } from "../constants";

const Blogs = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.8,
      },
    }),
  };

  return (
    <section className="px-6 py-10 min-h-screen" id="blogs">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Check About My Blogs
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOGS.map((blog, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={childVariants}
          >
            <div className="flex items-center mb-4">
              <img
                src={blog.image}
                alt={blog.name}
                className="w-12 h-12 rounded-full mr-4"
                loading="lazy"
              />
              <div>
                <h2 className="text-lg font-semibold">{blog.name}</h2>
                <p className="text-sm font-light">{blog.title}</p>
              </div>
            </div>

            <p className="leading-relaxed">
              {blog.feedback}
              <br />
              <br />
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Read More
              </a>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
