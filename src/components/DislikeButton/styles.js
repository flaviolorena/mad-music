import { FiThumbsDown } from "react-icons/fi";
import styled from "styled-components";

export const Button = styled.button`
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

`
export const Thumb = styled(FiThumbsDown)`
  width: 20px;
  height: 20px;
  color: ${props => props.info.dislike ? "var(--highlight)" : "var(--lightgrey)"};

`
