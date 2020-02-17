import styled from 'styled-components';
import { Link } from "gatsby"

export const link = styled(Link)``;

export const Header = styled.header`  
  background-color: #c4c4c4;
  margin-bottom: 1.45rem;
  display:flex;
  justify-content: space-around;
  align-items: center;
  div{
    /* margin: 0 auto; */
    max-width: 960;
    padding: 1.45rem 1.0875rem;
    h1{
      margin: 0;
      ${link}{
        color: white;
        text-decoration: none;
      }
    }
  }
`;