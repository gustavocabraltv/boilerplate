import styled,{css} from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
${({theme}) => css `
  display: flex;
  align-items: center;
  padding: ${theme.spacings.small} 0;
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
`}

`

export const WrapperIcon = styled.div`
${({theme})=> css `
color: ${theme.colors.black};
width: 3rem;
cursor: pointer;

`}
`

export const LogoWrapper = styled.div`
${media.lessThan('medium')`
      margin-top: 2.1rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      >div {
  padding-top: 1rem;
  width: 3rem;
}
`}

position: absolute;
padding-top: 4rem;
left: 7%;
transform: translateX(-50%);

svg {
  height: 5rem;
}
`
export const MenuGroup = styled.div`
${({theme}) => css `

    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    >div {
      margin-left: ${theme.spacings.xsmall}
    }

`}

`



//


type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
      padding-top: 2rem;
      svg {
        width: 4rem;
      }
    }
    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
    }
  `}
`
export const Download = styled.div `
display: flex;
flex-direction: row;
`

export const Button = styled.button`
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const MenuNav = styled.div `
display: flex;
flex-direction: column;
height: 100%;
align-items: center;
justify-content: center;

`


export const RegisterBox = styled.div `
  ${({theme}) => css `

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    >span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.spacings.xsmall};
    }

  `}

`

export const CreateAccount = styled.a `
  ${({theme}) => css`

    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};

  `}
`
