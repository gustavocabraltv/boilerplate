import { screen } from '@testing-library/react'
import { renderWithTheme } from 'tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/logotipo/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a black when color is passed ', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/logotipo/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white when color is passed ', () => {
    renderWithTheme(<Logo color="white" />)
    expect(screen.getByLabelText(/logotipo/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a bigger logo ', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/logotipo/i).parentElement).toHaveStyle({
      width: '15rem'
    })
  })

  it('should render a normal logo ', () => {
    renderWithTheme(<Logo size="normal" />)
    expect(screen.getByLabelText(/logotipo/i).parentElement).toHaveStyle({
      width: '7rem'
    })
  })
})
