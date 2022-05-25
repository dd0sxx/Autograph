import styled from "styled-components";

export const Body = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  margin-top: 40px;
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  color: #282c34;
  cursor: pointer;
  font-size: 16px;
  margin: 0px 20px;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
`;

export const Container = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  height: calc(100vh);
`;

export const Header = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  min-height: 70px;
`;

export const Image = styled.img`
  height: 40vmin;
  margin-bottom: 16px;
  pointer-events: none;
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #61dafb;
  text-decoration: underline;
`;

export const Subscription = styled.div`
  display: flex;
  justify-content: space-between;
  `
export const SubscriptionContainer = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  width: 90vw;
  max-width: 900px;
  padding: 10px;
`
export const ListContainer = styled.div`
  margin: 10px 10px 10px 50px;
`
export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 10px 50px;
`
export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  `
export const Flex = styled.div`
  display: flex;
`

export const Label = styled.div`
  padding-right: 15px;
`