import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import bottle_home from 'assets/images/mobile/bottle_home_mobile@1x.png';
import bottle_homex2 from 'assets/images/mobile/bottle_home_mobile@2x.png';
import bottle_home_tab from 'assets/images/tablet/bottle_home_tablet@1x.png';
import bottle_homex_tab2 from 'assets/images/tablet/bottle_home_tablet@2x.png';
import home_desk from 'assets/images/desc/bottle_home_desk.png';
import home_deskx2 from 'assets/images/desc/bottle_home_deskx2.png';

export const DailyBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 24px;
  position: relative;
`;

export const BackgroundHome = styled.div`
  background-position: center;
  background-image: -webkit-image-set(
    url(${bottle_home}) 1x,
    url(${bottle_homex2}) 2x
  );
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 208px;

  @media screen and (min-width: ${theme.breakpoint.tablet}) {
    background-image: -webkit-image-set(
      url(${bottle_home_tab}) 1x,
      url(${bottle_homex_tab2}) 2x
    );
    height: 386px;
    margin-top: -114px;
    background-position: center top;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    background-image: -webkit-image-set(
      url(${home_desk}) 1x,
      url(${home_deskx2}) 2x
    );
    width: 592px;
    height: 548px;
  }
`;

export const NormaTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;

  margin-bottom: 16px;

  color: ${theme.colors.black};
  text-align: center;
`;

export const NormaAllWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 8px 20px;
  padding-top: 20px;
  align-items: center;
  width: 170px;

  border-radius: 10px;
  border: 1px solid ${theme.colors.lightBlue};
  box-shadow: ${theme.boxShadowBtn.Btn};

  p {
    font-size: 22px;
    font-weight: 700;
    line-height: 1;

    color: ${theme.colors.blue};
    display: block;
  }
  a {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: 0;
    padding-top: 2px;

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

export const NormaWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin: 0 auto;
`;
