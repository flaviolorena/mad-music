import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 200px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--mediumgrey);
  border: 5px solid;
  border-color: ${props => props.border ? "var(--highlight)": "var(--secondary)"};
  overflow: hidden;
  margin: 5px 5px;
  padding: 5px 10px;
  cursor: pointer;
  @media(max-width: 900px) {
    margin: 10px 10px;

}
    
`
  
  
  export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
  padding: 15px 0;
  color: var(--lightgrey);
  overflow:hidden;

  
  `
  export const Info = styled.p`
  font-size: 14px;
  line-height: 20px;
  padding: 5px 0;
  color: var(--lightgrey);
  overflow:hidden;

  
`


