import styled from 'styled-components'
import { device } from '../../device'

export const Wrapper = styled.div`
  margin: 0 auto;
  @media ${device.mobileS}{
    width: 100%;
  }
  @media ${device.laptop}{
    width: 83.3%;
    padding-top: 4em;
  }
  min-height: 60vh;
`
