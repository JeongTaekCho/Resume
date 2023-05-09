"use client";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Wrap>
      <Container>
        <IntroBox>
          <Introduce animate={{ y: -50, opacity: 1 }} transition={{ delay: 0 }}>
            안녕하세요?
          </Introduce>
          <Introduce animate={{ y: -50, opacity: 1 }} transition={{ delay: 1 }}>
            <span>' 고민을 성과로 바꾸는 개발자 '</span> 조정택 입니다.
          </Introduce>
        </IntroBox>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
`;

const Container = styled.div`
  height: 100vh;
  padding: 8rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroBox = styled.div``;

const Introduce = styled(motion.p)`
  font-size: 4.5rem;
  font-weight: 400;
  color: #111;
  text-align: center;
  margin-bottom: 2rem;
  opacity: 0;

  span {
    font-size: 4.5rem;
    font-weight: 600;
    color: #fff;
    -webkit-text-stroke: 2px #111;
  }
`;
