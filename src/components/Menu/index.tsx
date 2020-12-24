// Perceba que aqui passamos a utilizar RETURN para podermos usar hooks

import {useState} from 'react'

import * as S from './styles'
import {Search} from '@styled-icons/material-outlined'
import {Menu as MenuBurger} from '@styled-icons/material-outlined'
//import {ShoppingCart} from '@styled-icons/material-outlined'
import {MoneyCheckAlt} from '@styled-icons/fa-solid/MoneyCheckAlt'
import { Donate } from '@styled-icons/fa-solid/Donate'
import {Apple} from '@styled-icons/boxicons-logos/Apple'
import {Android} from '@styled-icons/boxicons-logos'
import Button from 'components/Button'
import {Close as CloseMenu} from '@styled-icons/material-outlined'

import MediaMatch from 'components/MediaMatch'


import Logo from 'components/Logo'


export type MenuProps = {
  username?: string;
}


const Menu = ({username}: MenuProps) => {

                // Hooks
  // iOpen = Estado
  // setIsOpen = metódo que alter
  //const [state, setstate] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);

  return (
  <S.Wrapper>
    <MediaMatch lessThan='medium'>
      <S.WrapperIcon aria-label='Open Menu' onClick={() => setIsOpen(true)}>
          <MenuBurger />
      </S.WrapperIcon>
    </MediaMatch>

    <S.LogoWrapper>
        <Logo />
    </S.LogoWrapper>

  <S.MenuGroup>

    <S.WrapperIcon aria-label='ShoppingCart'>
         <MoneyCheckAlt />
    </S.WrapperIcon>

    <S.WrapperIcon aria-label='Search'>
       <Search />
    </S.WrapperIcon>

    {!username && (<MediaMatch greaterThan='medium'>
      <Button>Entrar</Button>
    </MediaMatch>)}

    {!!username && (<MediaMatch greaterThan='medium'>
      <Button>Painel de Controle</Button>
    </MediaMatch>)}


    </S.MenuGroup>



    <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen} onClick={() => setIsOpen(false)}>

      <CloseMenu aria-label="Close Menu"/>
        <S.MenuNav>
          <S.MenuLink href='#'>Home</S.MenuLink>
          <S.MenuLink href='#'>Explorar</S.MenuLink>

          {!!username && (<>
          <S.MenuLink href='#'>Minha Conta</S.MenuLink>
          <S.MenuLink href='#'>Favoritos</S.MenuLink>

          </>)}





          </S.MenuNav>
          {!username && (<>
            <S.RegisterBox>
            <Button fullWidth size='large'>Entrar</Button>
            <span>Ou</span>
            <S.CreateAccount href='#' title='Sign in'>
                Criar conta
            </S.CreateAccount>
          </S.RegisterBox>

          </>)}

        </S.MenuFull>


  </S.Wrapper>
)}

export default Menu
