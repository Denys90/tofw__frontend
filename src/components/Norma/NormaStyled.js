import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const NormaDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  width: 170px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.lightBlue};
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  padding-top: 22px;
`;

export const NormaTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  /* font-family: 'Roboto-Medium'; */
  color: ${theme.colors.black};
  text-align: center;
  line-height: 1;
`;

export const NormaWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 12px;

  p {
    line-height: 1;
    font-size: 22px;
    font-weight: 600;
    color: ${theme.colors.blue};
    display: block;
  }
  a {
    margin-bottom: 0;
    padding-top: 2px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    color: ${theme.colors.skyBlue};
    cursor: pointer;
    background: transparent;

    &:hover,
    &:focus {
      text-decoration: underline;
      color: ${theme.colors.orange};
    }
  }
`;
