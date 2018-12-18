import styled from 'styled-components'
import { device } from '../../../device'

export const Button = styled.button`
  font-size: 20px;
  text-align: center;
  padding: 0;
  font-weight: bold;
  width: 30px;
  height: 30px;
  border: 3px black solid;
  border-radius: 15px;
  margin: 10px;
  background: white;
  color: black;
`

export const Container = styled.div`
  z-index: 2;
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin:  auto;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  cursor: default;
`
export const Inner = styled.div`
  position: relative
  @media${device.mobileS}{
  flex: 1 0 50%;
  }
  @media${device.laptop}{
  flex: 0 0 50%;
  top: 15%;
  }
  display: flex;
  height: 500px;
  background: white;
  border: 1px grey solid;
  border-radius: 5px;
  overflow-y: auto;
  color: black;
`
