import whatsApp from "../../icons/whatsapp.svg";
import facebook from "../../icons/facebook.svg";
import twitter from "../../icons/twitter.svg";
import instegram from "../../icons/instegram.svg";
import telegram from "../../icons/telegram.svg";
import mail from "../../icons/mail.svg";
import phone from "../../icons/phone.svg";
import sitemapIcon1 from "../../icons/sitemap-contect_icon-1.svg";
import sitemapIcon2 from "../../icons/sitemap-contect_icon-2.svg";
import sitemapIcon3 from "../../icons/sitemap-contect_icon-3.svg";
export const links = [
  {
    arText: "الرئيسية",
    link: "/",
  },
  {
    arText: "عن الشركة",
    link: "/about",
  },
  {
    arText: "بوابة المشترك ",
    link: "/news",
  },

  {
    arText: "التوظيف ",
    link: "/safty",
  },
  {
    arText: "المناقصات ",
    link: "/safty",
  },
  {
    arText: "مواقع عملنا",
    link: "/safty",
  },
];

export const contacts = [
  {
    text: "+90 555 094 79 27",
    icon: phone,
  },
  {
    text: "info@akenergy.com.tr",
    icon: mail,
  },
];
export const socialLink = [
  {
    icon: whatsApp,
    link: "www.google.com",
  },
  {
    icon: facebook,
    link: "#",
  },
  {
    icon: twitter,
    link: "#",
  },
  {
    icon: instegram,
    link: "#",
  },
  {
    icon: telegram,
    link: "#",
  },
];

export const siteMap = [
  {
    text: "تركيا-غازي عنتاب-مركز المدينة",
    title: "الموقع الرئيسي",
    icon: sitemapIcon3,
  },
  {
    text: contacts[1].text,
    title: "اﻹيميل",
    icon: sitemapIcon2,
  },
  {
    text: contacts[0].text,
    title: "رقم الهاتف",
    icon: sitemapIcon1,
  },
];
