const profileController = (req, res) => {
  res.status(200);
  res.json([{
    id: 1,
    name: "Caleb Adebayo",
    role: "Frontend-Focused Full-Stack Engineer",
    location: "British Columbia, Canada",
    description:
      "Building scalable, high-performance web applications with React, Next.js, TypeScript, and Node.js. Passionate about clean architecture, exceptional user experiences, and production-ready software.",
    image:
      "https://res.cloudinary.com/dp5cyx4fa/image/upload/v1783631921/calebProfilee_n4f2vh.jpg",
    socials: {
      github: "https://github.com/calebtolorunleke",
      linkedin: "https://linkedin.com/in/calebtolorunleke",
      portfolio: "https://calebadebayo.dev/",
    },
  }]);
};

module.exports = { profileController };
