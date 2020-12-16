import { screen } from '@testing-library/react'
import { renderWithTheme } from 'tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white heading by default', () => {
    renderWithTheme(<Heading color="white">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a white heading with a line to the left side', () => {
    renderWithTheme(<Heading leftLine>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #ff972f',
      'padding-left': '0.8rem'
      //2.4rem
    })
  })
})
