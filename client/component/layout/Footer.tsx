import styled from 'styled-components';

// ----------------------------------------------------------------------

const StyledFooter = styled.footer`
  color: #78909C;
  font-size: 10px;
  height: 10px;
  display: flex;
  flex: 1;
  padding: 1rem 1rem;
  border-top: 1px solid #37474F;
  justify-content: flex-end;
  align-items: center;
`;

// ----------------------------------------------------------------------

function Footer(): JSX.Element {
  return (
    <StyledFooter>
      Powered by team 32devs
    </StyledFooter>
  );
}

// ----------------------------------------------------------------------

export default Footer;