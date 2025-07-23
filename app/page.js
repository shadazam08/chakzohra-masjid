// "use client";
// import { useMemo, useEffect, useState } from "react";
// import { useLanguage } from "./context/LanguageContext";
// import styled from "styled-components";
// import moment from "moment-hijri";
// import { translations } from "./i18n/translations";
// import timeTable from "./assets/timeTableEnglish.json";
// // import text from "./../node_modules/dom-helpers/esm/text";

// // Convert numbers to Urdu digits
// const toUrduDigits = (num) => num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

// const formatDate = (date, language) => {
//   const d = date.getDate();
//   const m = date.getMonth() + 1;
//   const y = date.getFullYear();
//   return language === "ur" ? `${toUrduDigits(d)}-${toUrduDigits(m)}-${toUrduDigits(y)}` : `${d}-${m}-${y}`;
// };

// const getHijriDate = (language) => {
//   const hijri = moment().format("iD-iM-iYYYY");
//   const [d, m, y] = hijri.split("-");
//   return language === "ur"
//     ? `${toUrduDigits(d)} - ${getHijriMonthName(m, "ur")} - ${toUrduDigits(y)} ھ`
//     : `${d} - ${getHijriMonthName(m, "en")} - ${y} AH`;
// };

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

// // All prayer keys
// const prayerKeys = ["fajr", "sun_rise", "dhuhr", "asr", "maghrib", "isha"];
// const highlightKeys = ["fajr", "dhuhr", "asr", "maghrib", "isha"]; // Highlight only these

// const Home = () => {
//   const { language } = useLanguage();
//   const text = translations[language];
//   const now = useMemo(() => new Date(), []);
//   const currentMonth = now.toLocaleString("en-US", { month: "long" }).toLowerCase();
//   const currentDate = now.getDate();
//   const monthData = useMemo(() => timeTable[currentMonth], [currentMonth]);
//   const todayData = useMemo(() => monthData?.find((day) => parseInt(day.date) === currentDate), [monthData, currentDate]);

//   const [currentPrayer, setCurrentPrayer] = useState("");

//   useEffect(() => {
//     if (!todayData) return;

//     const getMinutes = (t) => {
//       const [h, m, period] = t.match(/(\d+):(\d+)\s?(AM|PM)/i).slice(1);
//       const hour24 = period === "PM" && h !== "12" ? parseInt(h) + 12 : parseInt(h);
//       return hour24 * 60 + parseInt(m);
//     };
//     const nowMin = now.getHours() * 60 + now.getMinutes();
//     for (let i = 0; i < highlightKeys.length - 1; i++) {
//       const start = getMinutes(todayData[highlightKeys[i]]);
//       const end = getMinutes(todayData[highlightKeys[i + 1]]);
//       if (nowMin >= start && nowMin < end) {
//         setCurrentPrayer(highlightKeys[i]);
//         return;
//       }
//     }
//     setCurrentPrayer("isha");
//   }, [todayData, now]);

//   return (
//     <Container dir={language === "ur" ? "rtl" : "ltr"}>
//       <Header>
//         <StyledDate>
//           {text.dateLabel} {formatDate(now, language)}
//         </StyledDate>
//         <StyledDate>
//           {text.hijriDate} {getHijriDate(language)}
//         </StyledDate>
//       </Header>

//       <h3>{text.prayerTimes}</h3>

//       <CardsRow>
//         {prayerKeys.map((key) => {
//           const shouldHighlight = highlightKeys.includes(key);
//           const isActive = shouldHighlight && key === currentPrayer;

//           return (
//             <PrayerCard key={key} $active={isActive}>
//               <h5>{text.prayers?.[key]}</h5>
//               <Time>{todayData?.[key] || "--"}</Time>
//             </PrayerCard>
//           );
//         })}
//       </CardsRow>
//     </Container>
//   );
// };

// export default Home;

// // Styled Components
// const Container = styled.div`
//   padding: 20px;
//   min-height: 100vh;
//   background: #e8f2f1;
//   font-family: "Noto Sans", "Noto Nastaliq Urdu", sans-serif;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin-bottom: 20px;
// `;

// const CardsRow = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 15px;
// `;

// const PrayerCard = styled.div`
//   background: ${({ $active }) => ($active ? "#117a65" : "#fff")};
//   color: ${({ $active }) => ($active ? "#fff" : "#000")};
//   border-radius: 16px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   padding: 20px;
//   text-align: center;
//   min-width: 140px;
// `;

// const Time = styled.p`
//   font-size: 1.2rem;
//   font-weight: bold;
//   margin: 5px 0 0;
// `;

// const StyledDate = styled.h4`
//   font-weight: 600;
//   &::after {
//     content: "";
//     display: block;
//     height: 2px;
//     width: 100%;
//     background: linear-gradient(to right, #117a65, #0d6efd);
//     margin: 10px auto 0;
//     border-radius: 2px;
//   }
// `;


import Homes from "./home/page";

const Home = () => {
  return (
    // <div>
      <Homes />
    // </div>
  );
}

export default Home;