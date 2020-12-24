import { fireEvent, render, screen } from '@testing-library/react'
import { renderWithTheme } from 'tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the meu', () => {
    renderWithTheme(<Menu/>)

    expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/ShoppingCart/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Search/i)).toBeInTheDocument()


  })

    it('should render the open/close', () => {
      renderWithTheme(<Menu />)
      //select the menu
      const fullMenuElemento = screen.getByRole('navigation', {hidden: true})
      //Verifica se está escondido
      expect(fullMenuElemento.getAttribute('aria-hidden')).toBe('true');
      expect(fullMenuElemento).toHaveStyle({ opacity: 0 })
      //clicar no botão e verificar se abriu
       fireEvent.click(screen.getByLabelText(/open menu/i));
       expect(fullMenuElemento.getAttribute('aria-hidden')).toBe('false');
       expect(fullMenuElemento).toHaveStyle({ opacity: 1 })
       //clicar no botão e verificar se fechou
       fireEvent.click(screen.getByLabelText(/close menu/i));
       expect(fullMenuElemento.getAttribute('aria-hidden')).toBe('true');
       expect(fullMenuElemento).toHaveStyle({ opacity: 0 })





    });


})
