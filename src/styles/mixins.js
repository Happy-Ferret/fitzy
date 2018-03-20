import { css } from 'styled-components';

import { colors } from '../theme/theme';

/**
 * Helper for bg color, text and text shadow for primary style
 * @param {object} Styled Component Props
 */
export const colorMixin = ({ theme, use, disabled }) => {
  const color = disabled ? 'Disabled' : use;

  return css`
    background-color: ${theme[color].bg};
    color: ${theme[color].text};
    text-shadow: ${theme[color].textShadow};
  `;
};

/**
 * Helper for bg color, text and text shadow for secondary style
 * @param {object} Styled Component Props
 */
export const secondaryMixin = ({ theme, use, disabled }) => {
  const color = disabled ? 'Disabled' : use;

  return css`
    border: 1px solid
      ${color !== 'Secondary' ? theme[color].bg : theme[color].border};
  `;
};

/**
 * Reset default styles on form inputs
 */
export const resetInput = css`
  background: none;
  outline: none;
  border: none;
  appearance: none;
`;

export const errorMixin = ({ warning }) => {
  if (!warning) return;

  return css`
    &:focus-within {
      > * {
        color: ${colors.formWarning} !important;
        border-bottom-color: ${colors.formWarning} !important;
      }
    }
    > * {
      color: ${colors.formWarningActive} !important;
      border-bottom-color: ${colors.formWarningActive} !important;
    }
  `;
};
