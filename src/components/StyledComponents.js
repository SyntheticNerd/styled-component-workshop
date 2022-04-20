import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  height: 300px;
  width: 800px;
`;

export const MainImg = styled.img`
  object-fit: cover;
  width: 300px;
`;

export const ArticlePrev = styled.div`
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
  & > img {
    // selects the immediate child of the parent component
    height: 100%;
    border-radius: 50%;
  }
  & div {
    height: fit-content;
    margin-left: 16px;
    color: hsl(217, 19%, 35%);
  }
`;

export const ShareModal = styled.div`
  display: ${(props) => (props.toggle ? "flex" : "none")};

  ${(props) =>
    props.toggle &&
    `
     @media(max-width: 800px){
        

     }
  `}
`;
