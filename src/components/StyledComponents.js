import styled from "styled-components";

export const Container = styled.div`
  /* background-color: blue; */
  display: flex;
  height: 300px;
  width: 900px;
  margin: 64px auto;
  border: 2px solid blue;
`;

export const MainImg = styled.img`
  width: 300px;
  object-fit: cover;
  object-position: top left;
`;

export const ArticlePrev = styled.div`
  padding: 32px;
  border: 2px solid green;
  text-align: left;
  h1 {
      font-size: 1.5em;
      font-weight: 600;
  }
`;

export const Writer = styled.div`
    border: 2px solid red;
    display: flex;
    & > img{
        height: 3.5em;
        border-radius: 50%;
    }
`;

export const ShareModal = styled.div`
    border: 2px solid yellow;
    display: ${(props)=>props.toggle?"block":"none"};
`;
