import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  CardContainer,
  HeadingContainer,
  Heading,
  Image,
  InputTextContainer,
  ToolsList,
  ToolItem,
  Button,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldIcon = isBold ? '#faff00' : '#f1f5f9'
    const italicIcon = isItalic ? '#faff00' : '#f1f5f9'
    const underlineIcon = isUnderline ? '#faff00' : '#f1f5f9'

    return (
      <AppContainer>
        <CardContainer>
          <HeadingContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadingContainer>
          <InputTextContainer>
            <ToolsList>
              <ToolItem>
                <Button
                  data-testid="bold"
                  iconColor={boldIcon}
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </Button>
              </ToolItem>
              <ToolItem>
                <Button
                  data-testid="italic"
                  iconColor={italicIcon}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </ToolItem>
              <ToolItem>
                <Button
                  data-testid="underline"
                  iconColor={underlineIcon}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ToolItem>
            </ToolsList>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </InputTextContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}
export default TextEditor
