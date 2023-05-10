"use client";

import styled from "@emotion/styled";
import Image from "next/image";

export default function Contact() {
  return (
    <Wrap>
      <ContactBox>
        <Image src="/images/mail.png" width={40} height={40} />
        <span>cjt3591@gmail.com</span>
      </ContactBox>
      <ContactBox>
        <Image src="/images/phone.png" width={40} height={40} />
        <span>010-9774-3591</span>
      </ContactBox>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8rem;
`;

const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  span {
    font-size: 5rem;
    font-weight: 500;
    color: #111;
  }
`;
