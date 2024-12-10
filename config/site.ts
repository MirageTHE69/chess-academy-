export const siteConfig = {
  name: "Chess Cott Street",
  description: "Chess coaching and training center",
  logo: "/logo.svg", // You can replace this with your actual logo path
  nav: [
    { title: "Home", href: "/" },
    { title: "Chess Coaching", href: "/chess-coaching" },
    { title: "Upcoming Events", href: "/upcoming-events" },
    { title: "Student Achievements", href: "/student-achievements" },
    { title: "About Us", href: "/about-us" },
    { title: "Contact Us", href: "/contact-us" },
  ],
  hero: {
    title: "Welcome to Chess Cott Street",
    description:
      "Discover the art of chess with professional coaching and training",
    image: "/herochess.webp",
  },
};

export type SiteConfig = typeof siteConfig;
