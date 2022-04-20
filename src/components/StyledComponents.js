import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 300px;
  width: 800px;
  margin: 64px auto;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.2);
`;

export const MainImg = styled.img`
  width: 300px;
  object-fit: cover;
  object-position: top left;
  border-radius: 16px 0px 0px 16px;
`;

export const ArticlePrev = styled.div`
  padding: 32px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: 1.5em;
    font-weight: 600;
    color: hsl(217, 19%, 35%);
  }
  p {
    color: hsl(214, 17%, 51%);
    font-weight: 400;
  }
`;

export const Writer = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  align-items: center;
  & > img {
    height: 100%;
    border-radius: 50%;
  }
  & div {
    height: fit-content;
    margin-left: 16px;
    color: hsl(217, 19%, 35%);
  }
`;

export const ShareBtn = styled.button`
  border: none;
  outline: none;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  margin-left: auto;
  background-image: url(${process.env.PUBLIC_URL + "/images/icon-share.svg"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
  background-color: hsl(210, 46%, 95%);
  &:hover {
    background-color: hsl(217, 19%, 35%);
  }
  &:focus {
    background-color: hsl(217, 19%, 35%);
  }
`;

export const ShareModal = styled.div`
  display: ${(props) => (props.toggle ? "flex" : "none")};
  background-color: hsl(217, 19%, 35%);
  align-items: center;
  position: absolute;
  padding: 16px 32px;
  border-radius: 12px;
  top: -140%;
  right: 1.5em;
  transform: translateX(50%);
  & > * {
    margin: 0px 8px;
  }
  & img {
    height: fit-content;
    object-fit: none;
  }
  & > p {
    font-weight: 600;
    letter-spacing: 4px;
  }
  &::after {
    content: "";
    position: absolute;
    background-color: hsl(217, 19%, 35%);
    padding: 12px;
    transform: rotate(45deg) translateX(-50%);
    z-index: -1;
    bottom: -16px;
    left: 50%;
  }
`;

