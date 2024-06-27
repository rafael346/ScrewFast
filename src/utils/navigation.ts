// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Contato", url: "/contact" },
//  { name: "Parceiros", url: "/services" },
 // { name: "Sobre", url: "/" },
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
  facebook: "https://play.google.com/store/apps/details?id=app.clubedoembaixador&pcampaignid=web_share",
  x: "https://apps.apple.com/br/app/clube-do-embaixador/id1661573170",
 
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};