import React from 'react'
import * as S from './SideBarStyled'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'

const SideBar = () => (
  <S.SideBar>
    <Profile/>
    <SocialLinks/>
    <MenuLinks />
  </S.SideBar>
)
export default SideBar
