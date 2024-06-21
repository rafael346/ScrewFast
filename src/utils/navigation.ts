// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Contato", url: "/contact" },
//  { name: "Parceiros", url: "/services" },
  { name: "Sobre", url: "/" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "",
    links: [
      { name: "", url: "/" },
      { name: "", url: "/" },
      { name: "", url: "/" },
    ],
  },
   {
   section: "",
    links: [
      { name: "", url: "" },
      { name: "", url: "/" },
      { name: "", url: "#" },
      { name: "", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};