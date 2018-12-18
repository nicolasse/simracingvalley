import styled from 'styled-components'
import { device } from '../../../device'

export const Content = styled.div`
  @media ${device.mobileS}{
  height: 80vh;
  }
  @media ${device.laptop}{
  height: 500px;
  }
`
export const Wrapper  = styled.div`
  flex-direction: column;
  margin: auto;
  @media ${device.mobileS}{
    padding: 5px;
  }
  @media ${device.laptop}{
    padding: 30px;
  }

`
