import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  height: 150px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #1CC8C2;
`

export const Logo = styled.img`
  margin: 0 20px;
  height: 120px;
`

export const Title = styled.h1`
  font-size: 20px;
`

export const Login = styled.div`
  display: flex;
`

export const ButtonLogin = styled.button`
  width: 120px;
  height: 40px;
  margin: 0 20px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
  color: #E3E3E3;
  text-decoration: none;
  background: ${({red})  => red ? '#A10000' : '#0D2F87'};
  &&:active {
    color: #A6A6A6;
  }
  &:hover {
    color: #FFFFFF;
  }
  font-weight: 600;
  font-size: 15px;
`

export const Redirection = styled.a`
  width: 100px;
  height: 30px;
  margin: 0 20px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
  color: #E3E3E3;
  text-decoration: none;
  background: #0D2F87;
  &&:active {
    color: #A6A6A6;
  }
  &:hover {
    color: #FFFFFF;
  }
  padding: 10px;
`

export const StyledLink = styled(Link)`
  width: 100px;
  height: 30px;
  margin: 0 20px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
  color: #E3E3E3;
  text-decoration: none;
  background: #0D2F87;
  &&:active {
    color: #A6A6A6;
  }
  &:hover {
    color: #FFFFFF;
  }
  padding: 10px;
`