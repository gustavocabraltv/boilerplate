import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 7rem;
    height: 9rem;
  `,

  large: () => css`
    width: 15rem;
    height: 18rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
  width: 5.8rem;
  height: 4.5rem;
  svg {
    height: 4.5rem;
  }
  `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
  `}
`
