import styled from 'styled-components'

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
  width: 100px;
  height: 30px;
  margin: 0 20px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
  background: #E3E3E3;
  &&:active {
    background-color: #A6A6A6;
  }
  &:hover {
    background: #FFFFFF;
  }

`

export const Redirect = styled.a`
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