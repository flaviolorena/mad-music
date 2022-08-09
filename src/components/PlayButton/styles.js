import styled from "styled-components"
import { FiPlay } from "react-icons/fi";

export const Button = styled.div`
  display: flex;
  padding: 5px 5px;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  cursor: pointer;
  border-radius: 8px;
  text-align: center;
  background-color: var(--highlight);
  color: var(--white);


`
export const Play = styled(FiPlay)`

`
export const Text = styled.p`
  font-size: 15px;
  font-weight: bold;
  padding: 5px;
  color: var(--white);
`
