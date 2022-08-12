import styled from "styled-components"

export const Container = styled.span`
  display: flex;
  padding: 5px 20px;
  font-size: 14px;
  color: var(--white);
  text-decoration: none;
  text-size: 14px;

  @media(max-width: 900px) {
    padding: 10px 0px;

  }

`
export const Item = styled.a`
  color: var(--white);
  text-decoration: none;
  font-size: 18px;
  @media(max-width: 900px) {
    padding: 15px 0px;
    font-size: 25px;

  }
`
