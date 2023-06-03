import React from 'react';
import PropTypes from 'prop-types';

import { Container, Titlehidden, Title, SectionStyled } from './Section.styled';

export const Section = ({ title, children, isHidden }) => {
  return (
    <SectionStyled sx={{ padding: 3 }} component="fieldset">
      <Container>
        {isHidden ? <Titlehidden>{title}</Titlehidden> : <Title>{title}</Title>}
        {children}
      </Container>
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
