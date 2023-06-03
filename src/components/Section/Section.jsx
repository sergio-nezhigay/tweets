import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionStyled = styled.section`
  padding: 96px 0 20px;
`;
const Titlehidden = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Section = ({ title, children }) => {
  return (
    <SectionStyled sx={{ padding: 3 }} component="fieldset">
      <Titlehidden>{title}</Titlehidden>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
