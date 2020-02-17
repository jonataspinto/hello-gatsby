import PropTypes from "prop-types"
import React from "react"

import * as S from './styled'
import Avatar from '../Avatar'

const Header = ({ siteTitle }) => (
  <S.Header>
    <div>
      <h1>
        <S.link to="/">
          {siteTitle}
        </S.link>
      </h1>
    </div>
    <Avatar/>
  </S.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
