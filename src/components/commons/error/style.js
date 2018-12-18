import styled from 'styled-components'

export const P = styled.div`
  font-weight: bold;
  position: absolute;
`
export const Close = styled.div`
  margin-left: auto;
  cursor: pointer;

`
export const Container = styled.div`
  z-index: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 1em;
  background:  #ff8080;
  position: fixed;
  top: 0;
  margin-top: 50px;
  left: 0;
  right: 0;
  ${props => props.hidden ? 'visibility: hidden; opacity: 0;   ' : 'opacity: 1; visibility: visible'}
transition:all 0.3s linear;
`
