import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  background-color: #EFEFEF;
  height: calc(100vh - 250px);
  overflow: scroll;
`

export const Content = styled.article`
  display: flex;
  width: 600px;
  min-height: 160px !important;
  flex-direction: column;
  border-radius: 15px;
  margin: auto;
  border: 1px solid #A8A8A8;
  background-color: #fff;
  color: #848584;
`

export const UserData = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #A8A8A8;
  padding: 5px;
`

export const BlogContent = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  border-radius: 5px;
  color: #848584;
  padding: 5px;
`

export const BlogData = styled.div`
  height: 20px;
  border-top: 1px solid #A8A8A8;
  padding: 5px;
  display: flex;
  justify-content: flex-end;
`

export const SmallText = styled.span`
  font-size: 12px;
`

export const Paragraph = styled.p`
  font-size: 14px;
  text-align: justify;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 50px;
  margin: 5px 0;
`

export const Title = styled.a`
  font-size: 18px;
  font-weight: 800;
  margin: 0;
  color: #474747;
`