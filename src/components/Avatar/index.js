import React, { useEffect, useState } from 'react';

import * as S from './styles';

export default function Avatar() {
  const [imgProfile, setImgProfile] = useState()
  useEffect(() => {
    fetch('https://api.github.com/users/jonataspinto').then(res=> res.json()).then(res=>{
      const {avatar_url} = res
      setImgProfile(avatar_url)
    })
  }, [imgProfile])
  return (
    <S.Avatar src={imgProfile} loading="lazy" alt="profile"/>
  );
}
