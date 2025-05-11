import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import TaskKarLogo from "./TaskKarLogo"; // Updated the logo import
import { categories } from "../utils/categories";

function Footer() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://www.github.com" },
    {
      name: "Youtube",
      icon: <FiYoutube />,
      link: "https://www.youtube.com/KishanSheth21/",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/koolkishan/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/koolkishansheth",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/koolkishansheth",
    },
  ];

  const data = [
    {
      headerName: "Categories",
      links: [
        ...categories.map(({ name }) => ({
          name,
          link: `/search?category=${name}`,
        })),
      ],
    },
    {
      headerName: "About",
      links: [
        { name: "Careers", link: "/careers" },
        { name: "Press & News", link: "/press" },
        { name: "Partnerships", link: "/partnerships" },
        { name: "Privacy Policy", link: "/privacy" },
        { name: "Terms of Service", link: "/terms" },
        { name: "Intellectual Property Claims", link: "/ip-claims" },
        { name: "Investor Relations", link: "/investors" },
      ],
    },
    {
      headerName: "Support",
      links: [
        { name: "Help & Support", link: "/support" },
        { name: "Trust & Safety", link: "/trust-safety" },
        { name: "Selling on TaskKar", link: "/selling" },
        { name: "Buying on TaskKar", link: "/buying" },
      ],
    },
    {
      headerName: "Community",
      links: [
        { name: "Community Success Stories", link: "/community/stories" },
        { name: "Community Hub", link: "/community/hub" },
        { name: "Forum", link: "/forum" },
        { name: "Events", link: "/events" },
        { name: "Blog", link: "/blog" },
        { name: "Influencers", link: "/influencers" },
        { name: "Affiliates", link: "/affiliates" },
        { name: "Podcast", link: "/podcast" },
        { name: "Invite a Friend", link: "/invite" },
        { name: "Become a Seller", link: "/become-a-seller" },
        { name: "Community Standards", link: "/community-standards" },
      ],
    },
    {
      headerName: "TaskKar Services",
      links: [
        { name: "TaskKar Business", link: "/business" },
        { name: "TaskKar Pro", link: "/pro" },
        { name: "TaskKar Logo Maker", link: "/logo-maker" },
        { name: "TaskKar Guides", link: "/guides" },
        { name: "Get Inspired", link: "/inspiration" },
        { name: "TaskKar Select", link: "/select" },
        { name: "TaskKar Workspace", link: "/workspace" },
        { name: "Learn", link: "/learn" },
        { name: "Working Not Working", link: "/working" },
      ],
    },
  ];

  return (
    <footer className="w-full px-10 py-16 bg-[#1F2937] text-gray-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {data.map(({ headerName, links }) => (
          <div key={headerName}>
            <h3 className="text-lg font-semibold text-white mb-4">{headerName}</h3>
            <ul className="space-y-2">
              {links.map(({ name, link }) => (
                <li key={name}>
                  <Link
                    href={link}
                    className="hover:text-[#1DBF73] transition duration-200"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col lg:flex-row justify-between items-center border-t border-gray-600 pt-8">
        <div className="flex items-center gap-2 text-gray-400">
          <TaskKarLogo fillColor={"#1DBF73"} />
          <p className="text-sm">&copy; {new Date().getFullYear()} TaskKar. All rights reserved.</p>
        </div>
        <ul className="flex gap-4 mt-4 lg:mt-0">
          {socialLinks.map(({ icon, link, name }) => (
            <li key={name} className="text-xl hover:text-[#1DBF73]">
              <Link href={link}>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
