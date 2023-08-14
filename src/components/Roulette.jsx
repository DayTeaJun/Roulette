import React, { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ContentsWrap = styled.div`
  width: 500px;
  height: 500px;
  text-align: center;
  border-radius: 5px;
  border: solid 1px black;
`;

const ContentsStopBtn = styled.button`
  height: 40px;
  padding: 0 50px;
  border-radius: 10px;
  border: none;
  background-color: skyblue;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const FlexWrap = styled.div`
  gap: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Roulette() {
  const [currentRule, setCurrentRule] = useState(1);
  const contents = [
    "녜힁제조기",
    "악몽",
    "4인강제전",
    "지츠 다이스 룰",
    "꼭가야할초월",
    "꼭가야할불멸",
    "꼭가야할영원/제한",
    "갈수있는캐릭4개",
    "강원랜디",
    "이캐릭들금지에요",
    "이캐릭들필수에요",
    "기적!신세계보상치기",
    "마뎀전/물뎀전/원딜전",
    "필수!랜덤유닛",
    "인생의고도전",
  ];

  const changeContents = () => {
    setCurrentRule(Math.floor(Math.random() * contents.length));
  };

  let randomGame;

  const RandomGame = (e) => {
    e.preventDefault();
    changeContents();
    randomGame = setInterval(() => {
      changeContents();
    }, 70);
    setTimeout(() => {
      clearInterval(randomGame);
    }, 2000);
  };

  return (
    <Wrap>
      <FlexWrap>
        <h1>듀얼 컨텐츠</h1>
      </FlexWrap>
      <ContentsWrap>
        <h2>{contents[currentRule]}</h2>
      </ContentsWrap>
      <ContentsStopBtn onClick={(e) => RandomGame(e)}>뽑기</ContentsStopBtn>
    </Wrap>
  );
}
