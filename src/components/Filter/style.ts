import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `};
  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `};
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;