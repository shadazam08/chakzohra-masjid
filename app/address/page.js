'use client'
import React from 'react'
import { useLanguage } from "../context/LanguageContext";
import styled from "styled-components";
import { MapPin } from 'lucide-react';

const Address = () => {
    const { language } = useLanguage();

    const content = {
    en: {
      title: "Address",
      address: "Ward:38, Mohallah: Chakzohra, Laheriasarai, Darbhanga, Bihar-846001",
      button: "Get Directions",
    },
    ur: {
      // title: "مسجد کا پتہ",
      title: " پتہ",
      address: "وارڈ: 38، محلہ: چکزہرہ، لہریاسرائے، دربھنگہ، بہار-۸۴۶۰۰۱ ",
      button: "راستہ حاصل کریں",
    },
  };

  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps?q=Chakzohra+Masjid", "_blank");
  };

  return (
    <Wrapper dir={language === "ur" ? "rtl" : "ltr"}>
      <Card>
        <Header>
          <MapPin size={28} strokeWidth={2.2} />
          <Title>{content[language].title}</Title>
        </Header>

        <AddressText>{content[language].address}</AddressText>

        <MapWrapper>
          <iframe
            title="Masjid Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.137999723768!2d85.8872019748682!3d26.127043093413437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb9830c9cb0af%3A0x6f13b5dfa217d394!2sChakzohra%20Masjid!5e0!3m2!1sen!2sus!4v1752811912214!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapWrapper>

        <Button onClick={openGoogleMaps}>{content[language].button}</Button>
      </Card>
    </Wrapper>
  );
}

export default Address;


const Wrapper = styled.div`
  padding: 10px;
  font-family: "Noto Sans", "Noto Nastaliq Urdu", sans-serif;
  background: #e8f2f1;
  min-height: 85vh;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  background: #fff;
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  color: #117a65;
  ${"" /* color: #2c3e50; */}
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const AddressText = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 20px;
`;

const MapWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #117a65;
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    ${"" /* background-color: #084298; */}
    background-color: #000000 !important;
    color: #1ec0a2 !important;
  }
`;
