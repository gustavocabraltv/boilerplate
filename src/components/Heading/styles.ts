import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'
import media from 'styled-media-query'

const wrapperModifiers = {
  lefLine: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ leftLine, color, theme }) => css`
    //#mobile
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors[color!]};
    //media.desktop
    ${media.greaterThan('medium')`
font-size: ${theme.font.sizes.xlarge};
`}
    //modifiers
${leftLine && wrapperModifiers.lefLine(theme)};
  `}
`
