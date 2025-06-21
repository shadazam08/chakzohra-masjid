import React from "react";

const Home = ({ language }) => {
  const content = {
    en: {
      title: "Welcome to Chakzohra Masjid",
      desc: "A center for prayer, peace, and community unity.",
    },
    ur: {
      title: "چکزوہرا مسجد میں خوش آمدید",
      desc: "نماز، سکون اور کمیونٹی اتحاد کا مرکز۔",
    },
  };

  return (
    <div style={{ padding: "20px", direction: language === "ur" ? "rtl" : "ltr" }}>
      <h1>{content[language].title}</h1>
      <p>{content[language].desc}</p>
    </div>
  );
};

export default Home;
