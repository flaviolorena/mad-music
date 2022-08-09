import styled from "styled-components"
import { FiThumbsUp } from "react-icons/fi";

export const Button = styled.div`
  display: flex;
  padding: 5px 5px;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 40px;
  cursor: pointer;
  border-radius: 8px;
  text-align: center;
  background-color: var(--secondary);
  color: var(--white);
  margin: 0 10px;


`
export const Thumb = styled(FiThumbsUp)`
  width: 20px;
  height: 20px;
  color: var(--lightgrey);
  color: var(--highlight);
`
