"use client";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Chakzohra Masjid",
      desc: "Chakzohra Masjid has been serving the community with Islamic teachings, prayers, and events for many years.",
    },
    ur: {
      title: "چکزہرہ مسجد کے بارے میں",
      desc: "چکزوہرا مسجد کئی سالوں سے اسلامی تعلیمات، نمازوں اور تقریبات کے ساتھ کمیونٹی کی خدمت کر رہی ہے۔",
    },
  };
  return (
    <div style={{ padding: "20px", direction: language === "ur" ? "rtl" : "ltr" }}>
      <h1>{content[language].title}</h1>
      <p>{content[language].desc}</p>
    </div>
  );
};

export default About;
