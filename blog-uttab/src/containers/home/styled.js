import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  background-color: #EFEFEF;
  height: calc(100vh - 250px);
  overflow: scroll;
`

export const Left = styled.div`
  flex-grow: 4;
  overflow-y: scroll;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const Right = styled.aside`
  flex-grow: 1;
`