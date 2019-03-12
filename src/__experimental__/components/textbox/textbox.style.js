import styled from 'styled-components';

const TextboxStyle = styled.div`
  display: flex;
  flex-wrap: wrap;

  & + & {
    margin-top: 20px;
  }
`;

export default TextboxStyle;
