"use client";

import { res } from "@/commons/styles/responsive";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Link from "next/link";

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
          <ToResumeBtn animate={{ y: -50, opacity: 1 }} transition={{ delay: 2 }}>
            <Link href="/resume">☛ 이력서 보러가기</Link>
          </ToResumeBtn>
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
    line-height: 1.4;
    @media ${res.tablet} {
      -webkit-text-stroke: 1px #111;
    }
  }
`;

const ToResumeBtn = styled(motion.button)`
  border: 2px solid #111;
  border-radius: 20px;
  padding: 1rem;
  background: #fff;
  display: block;
  margin: 5rem auto 0;
  cursor: pointer;
  opacity: 0;
  position: relative;

  a {
    font-size: 3rem;
    font-weight: 500;
    color: #111;
  }

  /* &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    content: "";
    width: 0;
    height: 3px;
    background-color: orange;
  }*/

  &:hover {
    background-color: #111;
    transition: all 0.2s;
    a {
      color: #fff;
    }
  }
`;
