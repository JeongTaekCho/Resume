"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export default function Resume() {
  return (
    <Wrap>
      <Container>
        <DevImgBox>
          <Image width={60} height={60} src="/images/develop.png" alt="개발자 아이콘" />
        </DevImgBox>
        <SubTitle>INTRODUCE.</SubTitle>
        <ProfileBox>
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
                <Image src="/images/mail.png" width={30} height={30} />
                <Link href="#">cjt3591@gmail.com</Link>
              </InfoBox>
              <InfoBox>
                <Image src="/images/github.png" width={30} height={30} />
                <Link href="https://github.com/JeongTaekCho" target="blank">
                  Github
                </Link>
              </InfoBox>
              <InfoBox>
                <Image src="/images/blog.png" width={30} height={30} />
                <Link href="https://jeong-taek.tistory.com/" target="blank">
                  Blog
                </Link>
              </InfoBox>
            </InfoContainer>
          </IntroduceBox>
          <ProfileImgBox />
        </ProfileBox>
        <ProjectBox>
          <SubTitle>PROJECTS.</SubTitle>
          <ProjectContainer>
            <ProjectTitle>Foodiary</ProjectTitle>
            <ProjectContents>
              <ContentList>
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
              <Image src="/images/foodiary.png" width={400} height={300} />
            </ProjectContents>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectTitle>We-Trekking</ProjectTitle>
            <ProjectContents>
              <ContentList>
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
              <Image src="/images/wetrekking.png" width={550} height={150} />
            </ProjectContents>
          </ProjectContainer>
        </ProjectBox>
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
`;

const IntroduceBox = styled.div``;

const ProfileImgBox = styled.div`
  width: 45rem;
  height: 45rem;
  background: url("/images/profile.jpg");
  background-position: center;
  border-radius: 50%;
`;

const Title = styled.h2`
  font-size: 5.5rem;
  font-weight: 500;
  color: #111;
  margin-bottom: 3.5rem;
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
  a {
    font-size: 1.7rem;
    font-weight: 700;
    color: #111;
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

const ProjectTitle = styled.h4`
  display: inline-block;
  font-size: 4rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 3rem;
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

const ProjectContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentList = styled.ul`
  li {
    display: flex;
    margin-bottom: 3rem;
    span {
      font-size: 2rem;
      font-weight: 400;
      line-height: 1.4;
    }
    .content-title {
      font-size: 2.8rem;
      min-width: 22rem;
      font-weight: 500;
    }
  }
`;
