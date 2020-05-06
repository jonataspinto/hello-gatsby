import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles';

export default function Avatar() {

  const { imgProfile } = useStaticQuery(
    graphql`
      query {
        imgProfile: file(relativePath: {eq: "profile.jpeg" }) {
          childImageSharp {
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <S.Avatar fixed={imgProfile.childImageSharp.fixed} />
  );
}
