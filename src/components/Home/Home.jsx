// import React, { useMemo } from "react";
// import { Table } from "react-bootstrap";
// import moment from "moment-hijri"; // ✅ Accurate Hijri Dates
// import { translations } from "../../i18n/translations.js";
// import styled from "styled-components";
// import timeTable from "../../assets/timeTableEnglish.json";

// // ✅ Convert English digits to Urdu
// const toUrduDigits = (num) => num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

// // ✅ Format Gregorian Date
// const formatDate = (date, language) => {
//   const d = date.getDate();
//   const m = date.getMonth() + 1;
//   const y = date.getFullYear();
//   return language === "ur" ? `${toUrduDigits(d)}-${toUrduDigits(m)}-${toUrduDigits(y)}` : `${d}-${m}-${y}`;
// };

// // ✅ Accurate Hijri Date using `moment-hijri`
// const getHijriDate = (language) => {
//   const hijri = moment().format("iD-iM-iYYYY"); // e.g., "21-01-1447"
//   const [d, m, y] = hijri.split("-");

//   return language === "ur" ? `${toUrduDigits(d)} ${getHijriMonthName(m, "ur")} ${toUrduDigits(y)} ھ` : `${d} ${getHijriMonthName(m, "en")} ${y} AH`;
// };

// // ✅ Hijri Month Name Mapping
// const getHijriMonthName = (monthNumber, lang) => {
//   const monthsEn = [
//     "Muharram",
//     "Safar",
//     "Rabi al-Awwal",
//     "Rabi al-Thani",
//     "Jumada al-Awwal",
//     "Jumada al-Thani",
//     "Rajab",
//     "Sha'ban",
//     "Ramadan",
//     "Shawwal",
//     "Dhul Qadah",
//     "Dhul Hijjah",
//   ];

//   const monthsUr = [
//     "محرم",
//     "صفر",
//     "ربیع الاول",
//     "ربیع الثانی",
//     "جمادی الاول",
//     "جمادی الثانی",
//     "رجب",
//     "شعبان",
//     "رمضان",
//     "شوال",
//     "ذوالقعدہ",
//     "ذوالحجہ",
//   ];

//   return lang === "ur" ? monthsUr[parseInt(monthNumber, 10) - 1] : monthsEn[parseInt(monthNumber, 10) - 1];
// };

// // Prayer keys
// const prayerKeys = ["fajr", "sun_rise", "dhuhr", "asr", "maghrib", "isha"];

// const Home = ({ language, darkMode }) => {
//   const text = translations[language];
//   const now = new Date();

//   const currentMonth = now.toLocaleString("en-US", { month: "long" }).toLowerCase();
//   const currentDate = now.getDate();

//   const monthData = useMemo(() => timeTable[currentMonth], [currentMonth]);
//   const todayData = useMemo(() => {
//     return monthData?.find((day) => parseInt(day.date) === currentDate);
//   }, [monthData, currentDate]);

//   return (
//     <Container dir={language === "ur" ? "rtl" : "ltr"}>
//       <FlexRow>
//         <span>
//           {text.dateLabel} {formatDate(now, language)}
//         </span>
//         {text.title}
//         <span>
//           {text.hijriDate} {getHijriDate(language)}
//         </span>
//       </FlexRow>

//       {/* <p>{text.desc}</p> */}

//       <StyledTable responsive striped bordered hover variant={darkMode ? "dark" : "light"}>
//         <thead>
//           <h4 >{text.prayerTimes}</h4>
//           <tr>
//             {prayerKeys.map((key) => (
//               <th key={key}>{text.prayers?.[key]}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {todayData ? (
//             <tr>
//               {prayerKeys.map((key) => (
//                 <td key={key}>{todayData[key]}</td>
//               ))}
//             </tr>
//           ) : (
//             <tr>
//               <td colSpan={prayerKeys.length} className="text-center">
//                 {text.noData}
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </StyledTable>
//     </Container>
//   );
// };

// export default Home;

// // Styled Components
// const Container = styled.div`
//   padding: 20px;
//   min-height: 100vh;
//   font-family: "Noto Sans", "Noto Nastaliq Urdu", sans-serif !important;
//   background: lightyellow; /* just for testing */
// `;

// const StyledTable = styled(Table)`
//   margin-top: 30px;
//   th,
//   td {
//     text-align: center;
//     vertical-align: middle;
//   }
// `;

// const FlexRow = styled.h4`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 10px; /* Optional: handles wrapping on small screens */
// `;

import React, { useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment-hijri";
import { translations } from "../../i18n/translations.js";
import timeTable from "../../assets/timeTableEnglish.json";

const toUrduDigits = (num) => num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const formatDate = (date, language) => {
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  return language === "ur" ? `${toUrduDigits(d)}-${toUrduDigits(m)}-${toUrduDigits(y)}` : `${d}-${m}-${y}`;
};

const getHijriDate = (language) => {
  const hijri = moment().format("iD-iM-iYYYY");
  const [d, m, y] = hijri.split("-");
  return language === "ur"
    ? `${toUrduDigits(d)} - ${getHijriMonthName(m, "ur")} - ${toUrduDigits(y)} ھ`
    : `${d} - ${getHijriMonthName(m, "en")} - ${y} AH`;
};

const getHijriMonthName = (monthNumber, lang) => {
  const monthsEn = [
    "Muharram",
    "Safar",
    "Rabi al-Awwal",
    "Rabi al-Thani",
    "Jumada al-Awwal",
    "Jumada al-Thani",
    "Rajab",
    "Sha'ban",
    "Ramadan",
    "Shawwal",
    "Dhul Qadah",
    "Dhul Hijjah",
  ];
  const monthsUr = [
    "محرم",
    "صفر",
    "ربیع الاول",
    "ربیع الثانی",
    "جمادی الاول",
    "جمادی الثانی",
    "رجب",
    "شعبان",
    "رمضان",
    "شوال",
    "ذوالقعدہ",
    "ذوالحجہ",
  ];
  return lang === "ur" ? monthsUr[parseInt(monthNumber, 10) - 1] : monthsEn[parseInt(monthNumber, 10) - 1];
};

const prayerKeys = ["fajr", "sun_rise", "dhuhr", "asr", "maghrib", "isha"];

const Home = ({ language }) => {
  const text = translations[language];
  // const now = new Date();
  const now = useMemo(() => new Date(), []);
  const currentMonth = now.toLocaleString("en-US", { month: "long" }).toLowerCase();
  const currentDate = now.getDate();

  const monthData = useMemo(() => timeTable[currentMonth], [currentMonth]);
  const todayData = useMemo(() => monthData?.find((day) => parseInt(day.date) === currentDate), [monthData, currentDate]);

  const [currentPrayer, setCurrentPrayer] = useState("");

  useEffect(() => {
    if (!todayData) return;

    const getMinutes = (t) => {
      const [h, m, period] = t.match(/(\d+):(\d+)\s?(AM|PM)/i).slice(1);
      const hour24 = period === "PM" && h !== "12" ? parseInt(h) + 12 : parseInt(h);
      return hour24 * 60 + parseInt(m);
    };

    const nowMin = now.getHours() * 60 + now.getMinutes();
    for (let i = 0; i < prayerKeys.length - 1; i++) {
      const start = getMinutes(todayData[prayerKeys[i]]);
      const end = getMinutes(todayData[prayerKeys[i + 1]]);
      if (nowMin >= start && nowMin < end) {
        setCurrentPrayer(prayerKeys[i]);
        return;
      }
    }
    setCurrentPrayer("isha");
  }, [todayData, now]);

  return (
    <Container dir={language === "ur" ? "rtl" : "ltr"}>
      <Header>
        <StyledDate>
          {text.dateLabel} {formatDate(now, language)}
        </StyledDate>
        <StyledTitle>{text.title}</StyledTitle>
        <StyledDate>
          {text.hijriDate} {getHijriDate(language)}
        </StyledDate>
      </Header>

      <h3>{text.prayerTimes}</h3>

      <CardsRow>
        {prayerKeys.map((key) => (
          <PrayerCard key={key} $active={key === currentPrayer}>
            <h5>{text.prayers?.[key]}</h5>
            <Time>{todayData?.[key] || "--"}</Time>
          </PrayerCard>
        ))}
      </CardsRow>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 20px;
  min-height: 100vh;
  ${"" /* background: lightyellow; */}
  background: #e8f2f1;

  font-family: "Noto Sans", "Noto Nastaliq Urdu", sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 0.1rem;
`;

const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const PrayerCard = styled.div`
  background: ${({ $active }) => ($active ? "#117a65" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
  padding: 20px;
  text-align: center;
  min-width: 140px;
`;

const Time = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px 0 0;
`;

const StyledTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: #0d6efd;
  position: relative;
  display: inline-block;
  margin: 0 auto;

  &::after {
    content: "";
    display: block;
    height: 3px;
    width: 50%;
    ${"" /* background-color: #117a65; */}
    background: linear-gradient(to right, #117a65, #0d6efd);
    margin: 6px auto 0;
    border-radius: 2px;
  }
`;

const StyledDate = styled.h4`
  font-weight: 600;
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    ${"" /* background-color: #117a65; */}
    background: linear-gradient(to right, #117a65, #0d6efd);
    margin: 10px auto 0;
    border-radius: 2px;
  }
`;
