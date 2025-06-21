import React from 'react'

const Address = ({ language }) => {
  const content = {
    en: {
      title: 'Masjid Address',
      address:
        'ward:38 Mohallah: Chakzohra, Laheriasarai, Darbhanga, Bihar 846001',
    },
    ur: {
      title: 'مسجد کا پتہ',
      address: 'وارڈ: 38 محلہ: چکجوہرا، لہریاسرائے، دربھنگہ، بہار 846001',
    },
  }

  return (
    <div
      style={{ padding: '20px', direction: language === 'ur' ? 'rtl' : 'ltr' }}
    >
      <h1>{content[language].title}</h1>
      <p>{content[language].address}</p>
    </div>
  )
}

export default Address
