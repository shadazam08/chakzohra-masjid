// import React from "react";

// const Home = ({ language }) => {
//   const content = {
//     en: {
//       title: "Welcome to Chakzohra Masjid",
//       desc: "A center for prayer, peace, and community unity.",
//     },
//     ur: {
//       title: "چکزوہرا مسجد میں خوش آمدید",
//       desc: "نماز، سکون اور کمیونٹی اتحاد کا مرکز۔",
//     },
//   };

//   return (
//     <div style={{ padding: "20px", direction: language === "ur" ? "rtl" : "ltr" }}>
//       <h1>{content[language].title}</h1>
//       <p>{content[language].desc}</p>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Table } from "react-bootstrap";
import timeTable from "../../assets/timeTableEnglish.json";

const Home = ({ language }) => {
  const content = {
    en: {
      title: "Welcome to Chakzohra Masjid",
      desc: "A center for prayer, peace, and community unity.",
      prayerTimes: "Prayer Times",
      prayers: {
        fajr: "Fajr",
        sun_rise: "Sun Rise",
        dhuhr: "Dhuhr",
        asr: "Asr",
        maghrib: "Maghrib",
        isha: "Isha",
      },
      date: "Date",
    },
    ur: {
      title: "چکزوہرا مسجد میں خوش آمدید",
      desc: "نماز، سکون اور کمیونٹی اتحاد کا مرکز۔",
      prayerTimes: "نماز کے اوقات",
      prayers: {
        fajr: "فجر",
        sun_rise: "طلوع آفتاب",
        dhuhr: "ظہر",
        asr: "عصر",
        maghrib: "مغرب",
        isha: "عشاء",
      },
      date: "تاریخ",
    },
  };

  const text = content[language];

  // Get current date info
  const now = new Date();
  const currentMonth = now.toLocaleString("en-US", { month: "long" }).toLowerCase(); // e.g. "july"
  const currentDate = now.getDate(); // e.g. 16

  const monthData = timeTable[currentMonth];
  const todayData = monthData?.find((day) => parseInt(day.date) === currentDate);

  return (
    <div style={{ padding: "20px", direction: language === "ur" ? "rtl" : "ltr", fontFamily: "sans-serif" }}>
      <h1>{text.title}</h1>
      <p>{text.desc}</p>
      {/* Prayer Times */}
      <h2>
        {text.prayerTimes} - {language === "ur" ? " آج کا تاریخ  ۔ " : "Today Date - "}
        {now.toLocaleDateString("en-IN")}
      </h2>
      {/* <h4>
        {language === "ur" ? " آج کا تاریخ  ۔ " : "Today Date."}
        {now.toLocaleDateString("en-IN")}
      </h4> */}
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>{text.prayers.fajr}</th>
            <th>{text.prayers.sun_rise}</th>
            <th>{text.prayers.dhuhr}</th>
            <th>{text.prayers.asr}</th>
            <th>{text.prayers.maghrib}</th>
            <th>{text.prayers.isha}</th>
          </tr>
        </thead>

        {todayData ? (
          <tbody>
            <tr>
              <td>{todayData.fajr}</td>
              <td>{todayData.sun_rise}</td>
              <td>{todayData.dhuhr}</td>
              <td>{todayData.asr}</td>
              <td>{todayData.maghrib}</td>
              <td>{todayData.isha}</td>
            </tr>
          </tbody>
        ) : (
          <p>{language === "ur" ? "آج کا وقت دستیاب نہیں۔" : "No timings available for today."}</p>
        )}
      </Table>
    </div>
  );
};

export default Home;
