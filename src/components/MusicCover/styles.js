import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 200px;
  justify-content: center;
  align-items: center;
  background-color: var(--mediumgrey);
  border: 5px solid;
  border-color: var(--highlight);
  overflow:hidden;
  margin: 0 5px;
    
`
  
  
  export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  line-height: 20px;
  padding: 5px 5px;
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


