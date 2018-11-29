import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: sans-serif;
  background-color: #EFEFEF;
  height: calc(100vh - 250px);
`

export const TextBlog = styled.textarea`
  width: 50%;
  height: 40%
  border-radius: 15px;
  display: initial;
  border: 1px solid #A8A8A8;
  margin: 10px;
  outline: none;
  padding: 5px;
`

export const TitleBlog = styled.input`
  width: 50%;
  height 30px;
  border-radius: 15px;
  border: 1px solid #A8A8A8;
  margin: 10px;
  outline: none;
  padding: 5px;
`

export const SendData = styled.button`
  width: 150px;
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
  font-weight: 600;
  font-size: 15px;
`

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
`

export const Spinner = styled.img`
`

export const SpinnerContent = styled.div`
  display: ${({display}) => display ? 'flex' : 'none'};
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,.25);
  position: absolute;
  margin: 0;
  align-items: center;
  justify-content: center;
`