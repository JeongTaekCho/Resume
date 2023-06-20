"use client";

import { res } from "@/commons/styles/responsive";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Wrap>
      <Container>
        <DevImgBox>
          <img width={60} height={60} src="./images/develop.png" alt="개발자 아이콘" />
        </DevImgBox>
        <SubTitle>_INTRODUCE.</SubTitle>
        <ProfileBox data-aos="fade-down">
          <IntroduceBox>
            <Title>안녕하세요, 개발자 조정택 입니다.</Title>
            <IntroText>
              저는 신입 프론트엔드 개발자 입니다. <br />
              많은 사람들의 생각과 고민을 서비스로 만드는 것에 대해 흥미를 느껴 개발자가 되었습니다. <br />
              새로운 것을 배우는데 있어 즐거움을 느끼며 주저함이 없습니다. <br />
              다양한 분야에서 수 많은 개발경험을 쌓고 싶습니다. <br />
              <strong>성실히 개발</strong>하고 <strong>성과로 보답하는 개발자</strong>가 되겠습니다.
            </IntroText>
            <InfoContainer>
              <InfoBox>
                <img src="./images/mail.png" width={30} height={30} />
                <span>cjt3591@gmail.com</span>
              </InfoBox>
              <InfoBox>
                <img src="./images/github.png" width={30} height={30} />
                <Link href="https://github.com/JeongTaekCho" target="blank">
                  Github
                </Link>
              </InfoBox>
              <InfoBox>
                <img src="./images/blog.png" width={30} height={30} />
                <Link href="https://jeong-taek.tistory.com/" target="blank">
                  Blog
                </Link>
              </InfoBox>
            </InfoContainer>
          </IntroduceBox>
          <ProfileImgBox />
        </ProfileBox>
        <ProjectBox>
          <SubTitle>_PROJECTS.</SubTitle>
          <ProjectContainer>
            <ProjectTitleBox>
              <ProjectTitle>Foodiary</ProjectTitle>
              <Link href="https://github.com/JeongTaekCho/foodiary_project_front" target="blank">
                <ProjectDetailBtn>Github &gt;</ProjectDetailBtn>
              </Link>
              <Link href="https://foodiary.netlify.app/" target="blank">
                <ProjectDetailBtn>Go Foodiary &gt;</ProjectDetailBtn>
              </Link>
            </ProjectTitleBox>
            <ProjectContents>
              <ContentList data-aos="fade-right">
                <li>
                  <span className="content-title">작업기간</span>
                  <span>2022.12 ~ 2023.01</span>
                </li>
                <li>
                  <span className="content-title">참여인원</span>
                  <span>Front-end: 2명 / Back-end: 2명</span>
                </li>
                <li>
                  <span className="content-title">설명</span>
                  <span>뭐먹을지 고민하는 사람들을 위한 식단 추천 및 커뮤니티 서비스</span>
                </li>
                <li>
                  <span className="content-title">구현내용</span>
                  <ul>
                    <li>
                      <span>- 식단 랜덤추천</span>
                    </li>
                    <li>
                      <span>- 주차별 식단추천</span>
                    </li>
                    <li>
                      <span>- 커뮤니티 서비스</span>
                    </li>
                    <li>
                      <span>- 고객센터</span>
                    </li>
                    <li>
                      <span>- 좋아요 기능</span>
                    </li>
                    <li>
                      <span>- 스크랩 기능</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="content-title">기술스택</span>
                  <span>
                    Front-end: React, Zustand, Axios, Scss <br /> Back-end: Java, Spring, SQL
                  </span>
                </li>
              </ContentList>
              <img src="./images/foodiary.png" width={400} height={300} data-aos="fade-left" />
            </ProjectContents>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectTitleBox>
              <ProjectTitle>We-Trekking</ProjectTitle>
              <Link href="https://github.com/JeongTaekCho/WeTrekking_client" target="blank">
                <ProjectDetailBtn>Github &gt;</ProjectDetailBtn>
              </Link>
            </ProjectTitleBox>
            <ProjectContents>
              <ContentList data-aos="fade-right">
                <li>
                  <span className="content-title">작업기간</span>
                  <span>2022.10 ~ 2022.11</span>
                </li>
                <li>
                  <span className="content-title">참여인원</span>
                  <span>Front-end: 2명 / Back-end: 4명</span>
                </li>
                <li>
                  <span className="content-title">설명</span>
                  <span>등산을 좋아하는 사람들을 위한 동호회 서비스</span>
                </li>
                <li>
                  <span className="content-title">구현내용</span>
                  <ul>
                    <li>
                      <span>- 동호회 생성/참가신청</span>
                    </li>
                    <li>
                      <span>- 방장 수락/거절 기능</span>
                    </li>
                    <li>
                      <span>- 등산로 추천 기능</span>
                    </li>
                    <li>
                      <span>- 리뷰 기능</span>
                    </li>
                    <li>
                      <span>- 랭킹 기능</span>
                    </li>
                    <li>
                      <span>- 포인트 충전/결제 기능</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="content-title">기술스택</span>
                  <span>
                    Front-end: Next.js, Recoil, GraphQL, Emotion, Ant-Design <br /> Back-end: Node.js, Nest.js, SQL,
                    MongoDB
                  </span>
                </li>
              </ContentList>
              <img src="./images/wetrekking.png" width={450} height={120} data-aos="fade-left" />
            </ProjectContents>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectTitleBox>
              <ProjectTitle>사랑해 지구야</ProjectTitle>
              <Link href="https://github.com/JeongTaekCho/Love-you-Earth" target="blank">
                <ProjectDetailBtn>Github &gt;</ProjectDetailBtn>
              </Link>
            </ProjectTitleBox>
            <ProjectContents>
              <ContentList data-aos="fade-right">
                <li>
                  <span className="content-title">작업기간</span>
                  <span>2023.05 ~ 2023.06</span>
                </li>
                <li>
                  <span className="content-title">참여인원</span>
                  <span>Front-end: 2명 / Back-end: 2명</span>
                </li>
                <li>
                  <span className="content-title">설명</span>
                  <span>
                    환경 문제에 대한 심각성을 알아보고, 그룹별 활동을 통해 재미있게 환경보호 활동에 동참하는 서비스!!
                  </span>
                </li>
                <li>
                  <span className="content-title">구현내용</span>
                  <ul>
                    <li>
                      <span>- 그룹 생성/신청</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="content-title">기술스택</span>
                  <span>
                    Front-end: React, Recoil, Axios, Styled-Components, MUI <br /> Back-end: Node.js, Express, MongoDB
                  </span>
                </li>
              </ContentList>
              <img src="./images/love-earth.png" width={450} height={120} data-aos="fade-left" />
            </ProjectContents>
          </ProjectContainer>
        </ProjectBox>
        <SkillBox>
          <SubTitle>_SKILL.</SubTitle>
          <SkillContainer data-aos="fade-up">
            <RoleTitle>프론트엔드</RoleTitle>
            <ContentList>
              <li>
                <span className="content-title">HTML / CSS</span>
                <span>시멘틱 태그를 준수하며 생각하는 디자인을 그대로 구현할 수 있습니다.</span>
              </li>
              <li>
                <span className="content-title">JavaScript</span>
                <span>
                  ES6를 포함한 자바스크립트 문법에 익숙하며 현재는 자바스크립트 동작원리에 대해 조금 더 깊게 공부하는
                  중입니다.
                </span>
              </li>
              <li>
                <span className="content-title">React</span>
                <span>
                  함수형 컴포넌트에 익숙하며 컴포넌트를 분리하여 디자인하는데 익숙합니다. 반복되는 로직을 분리하여
                  사용하기 위해 Custom Hook을 제작하여 사용하며 생명주기를 다루는데 익숙합니다.
                </span>
              </li>
              <li>
                <span className="content-title">GraphQL</span>
                <span>REST-API와 GraphQL의 장단점을 구분하여 상황에 맞는 데이터 통신을 할 수 있습니다.</span>
              </li>
              <li>
                <span className="content-title">Next.js</span>
                <span>
                  Next12 버전으로 공부를 해왔었는데 현재 Next13 버전도 학습중에 있습니다. 서버 사이드 렌더링을 구현 할
                  수 있습니다.
                </span>
              </li>
              <li>
                <span className="content-title">전역 상태관리</span>
                <span>Recoil을 통한 전역 상태관리를 할 수 있으며 현재 Redux / Zustand도 지속적으로 학습중입니다.</span>
              </li>
            </ContentList>
          </SkillContainer>
          <SkillContainer data-aos="fade-up">
            <RoleTitle>백엔드</RoleTitle>
            <ContentList>
              <li>
                <span className="content-title">Node.js / Express</span>
                <span>Node와 Express를 통해 간단한 서버를 구현할 수 있습니다.</span>
              </li>
              <li>
                <span className="content-title">MongoDB</span>
                <span>MongoDB / mongoose를 통해 모델링을 할 수 있고 CRUD구현이 가능합니다.</span>
              </li>
              <li>
                <span className="content-title">SQL</span>
                <span>SQL을 활용하여 테이블 관계를 형성할 수 있으며, 상세문법을 지속적으로 학습중에 있습니다.</span>
              </li>
            </ContentList>
          </SkillContainer>
        </SkillBox>
        <EducationBox>
          <SubTitle>_EDUCATION.</SubTitle>
          <EducationContainer data-aos="fade-up">
            <ContentList>
              <li>
                <span className="content-title">
                  엘리스 AI트랙 7기 ~ING
                  <br />
                  <span>(2023.02 ~ 2023.08)</span>
                </span>
                <span>
                  1. 리액트와 Node.js를 통한 웹개발의 전반적인 내용 학습 / 2. SQL, 파이썬을 활용한 데이터 분석 / 3.
                  AI활용 <br /> 각 파트가 마칠 때마다 팀 프로젝트를 시행하여 총 3회 팀 프로젝트를 경험합니다.
                </span>
              </li>
              <li>
                <span className="content-title">
                  원티드 프리온보딩 8차
                  <br />
                  <span>(2022.12 ~ 2023.01)</span>
                </span>
                <span>매 주 기업과제를 해결하며 리액트의 최적화 방법 등의 심화적인 내용을 학습 하였습니다.</span>
              </li>
              <li>
                <span className="content-title">
                  코드캠프 FE 9기
                  <br />
                  <span>(2022.08 ~ 2022.11)</span>
                </span>
                <span>Next.js를 주로 배우며 프론트엔드의 전반적인 내용을 학습 하였습니다.</span>
              </li>
            </ContentList>
          </EducationContainer>
        </EducationBox>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 8rem 6rem;
`;

const DevImgBox = styled.div`
  margin: 5rem 0;
`;

const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8rem;

  @media ${res.tablet} {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 8rem;
  }
`;

const IntroduceBox = styled.div``;

const ProfileImgBox = styled.div`
  width: 45rem;
  height: 45rem;
  background: url("./images/profile.jpg");
  background-position: center;
  border-radius: 50%;

  @media ${res.mobile} {
    width: 55rem;
    height: 55rem;
  }
`;

const Title = styled.h2`
  font-size: 5.5rem;
  font-weight: 500;
  color: #111;
  margin-bottom: 3.5rem;

  @media ${res.mobile} {
    font-size: 4.2rem;
  }
`;

const IntroText = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #000;
  line-height: 1.6;
  letter-spacing: 1.5px;
  strong {
    font-size: 1.8rem;
    font-weight: 700;

    @media ${res.mobile} {
      font-size: 2.2rem;
    }
  }

  @media ${res.mobile} {
    font-size: 2.2rem;
  }
`;

const InfoContainer = styled.div`
  margin-top: 3rem;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  span {
    font-size: 1.7rem;
    font-weight: 700;
    color: #111;
    @media ${res.mobile} {
      font-size: 2.2rem;
    }
  }

  a {
    font-size: 1.7rem;
    font-weight: 700;
    color: #111;

    @media ${res.mobile} {
      font-size: 2.2rem;
    }
  }

  a:hover {
    text-decoration: underline;
  }
`;

const ProjectBox = styled.div`
  width: 100%;
`;

const SubTitle = styled.h3`
  font-size: 3rem;
  font-weight: 500;
  color: #111;
  margin-bottom: 6rem;
`;

const ProjectContainer = styled.div`
  margin-bottom: 10rem;
`;

const ProjectTitleBox = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 3rem;
`;

const ProjectTitle = styled.h4`
  display: inline-block;
  font-size: 4rem;
  font-weight: 600;
  color: #111;
  position: relative;
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 12px;
    background-color: orange;
    position: absolute;
    left: 0;
    bottom: 3px;
    z-index: -1;
  }
`;

const ProjectDetailBtn = styled.button`
  border: none;
  background-color: #000;
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
  padding: 1rem;
  cursor: pointer;
`;

const ProjectContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${res.tablet} {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 8rem;

    img {
      width: 60%;
      height: auto;
    }
  }
`;

const ContentList = styled.ul`
  li {
    display: flex;
    margin-bottom: 3rem;
    @media ${res.mobile} {
      flex-direction: column;
      gap: 2rem;
    }
    span {
      font-size: 2rem;
      font-weight: 400;
      line-height: 1.4;
      display: flex;
      align-items: center;
    }
    .content-title {
      font-size: 2.8rem;
      min-width: 22rem;
      font-weight: 500;
    }
  }
`;

const SkillBox = styled.div`
  margin-bottom: 12rem;
`;

const SkillContainer = styled.div`
  &:first-of-type {
    margin-bottom: 10rem;
  }
  ul {
    li {
      margin-bottom: 4rem;
      .content-title {
        min-width: 28rem;
      }
    }
  }
`;

const RoleTitle = styled.h5`
  font-size: 4rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 3.5rem;
`;

const EducationBox = styled.div``;

const EducationContainer = styled.div`
  ul {
    li {
      .content-title {
        min-width: 28rem;
        font-size: 2.4rem;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        span {
          font-size: 1.8rem;
          font-weight: 400;
          color: #aaa;
        }
      }
    }
  }
`;
