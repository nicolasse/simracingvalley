import styled from 'styled-components'
import { device } from '../../../device'

export const Container = styled.div`
  @media ${ device.mobileS }{
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 5em;
    z-index: 3;
    display: none;

  } 
  @media ${ device.laptop }{
    position: fixed;
    top: 150px;
    left: 0;
    margin-left: 3%;
    display: flex;
    flex-flow: column nowrap
    justify-content: space-between;
    height: 5em;
  }

`
