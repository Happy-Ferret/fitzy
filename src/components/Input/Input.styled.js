import styled from 'styled-components';

import { colors } from '../../theme/theme';
import { errorMixin } from '../../styles/mixins';
import { font } from '../../styles/font';
import { spacing } from '../../styles/spacing';

const FormField = styled.label`
  position: relative;
  display: block;
  margin-bottom: ${spacing.xl};

  ${errorMixin};
`;

const FormError = styled.span`
  display: block;
  color: ${colors.errorActive};
  padding-left: ${spacing.s};
  font-size: ${font.s};
  margin-top: ${spacing.s};
`;

const FitzyLabel = styled.label`
  position: absolute;
  display: inline-block;
  max-width: 100%;
  font-size: ${font.s};
  color: #fff;
  top: 1rem;
  left: ${spacing.s};
  transition: all 0.3s ease;
  pointer-events: none;
  transform-origin: 0 0;
`;

const FitzyInput = styled.input`
  position: relative;
  display: block;
  padding: ${spacing.m} ${spacing.s};
  line-height: 1rem;
  font-size: 1rem;
  font-weight: normal;
  width: 100%;

  background-color: transparent;
  border: none;
  border: 1px solid transparent;
  border-bottom: 1px solid ${p => p.theme.Input.border};
  color: #fff;
  transition: border 0.3s ease-in-out;

  ~ label {
    color: ${p => p.theme.Input.label};
    transform: ${({ value }) =>
    value ? `translateY(-${spacing.xxl})` : 'translateY(0)'};
    opacity: ${({ value }) => (value ? '1' : '0')};
    pointer-events: none;
  }

  &::-webkit-input-placeholder {
    color: ${p => p.theme.Input.placeholder};
  }

  &:focus {
    border-bottom: 1px solid ${p => p.theme.Input.borderActive};
    outline: none;

    & ~ label {
      color: ${p => p.theme.Input.labelActive};
    }
  }
`;

/** @component */
export { FitzyInput, FormField, FitzyLabel, FormError };
