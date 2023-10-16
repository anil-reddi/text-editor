import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  background-color: #1b1c22;
  height: 80%;
  width: 80%;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const HeadingContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 700;
`
export const Image = styled.img`
  height: 75%;
`
export const InputTextContainer = styled.div`
  width: 50%;
  height: 530px;
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 2px solid #334155;
  border-radius: 12px;
`
export const ToolsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 2px solid #334155;
  width: 100%;
`
export const ToolItem = styled.li`
  list-style-type: none;
  display: flex;
`
export const Button = styled.button`
  background-color: transparent;
  color: ${props => props.iconColor};
  margin-left: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const TextArea = styled.textarea`
  height: 100%;
  width: 100%;
  background-color: #25262c;
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 20px;
  padding: 20px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  border: none;
  outline: none;
  cursor: pointer;
`
