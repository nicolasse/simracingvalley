import { device } from '../../device'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media ${device.mobileS}{
    flex: 0 0 100%;
    font-size: 0.8em;
  }
  @media ${device.laptop}{
    flex: 0 0  auto;

    font-size: 1em;
  }
`
