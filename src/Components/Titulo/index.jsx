import styled from "styled-components";

// Metodo por styled components (Não é necessário ter um arquivo CSS)
const Titulo = styled.h1`
  color: ${({ theme }) => theme.text};
  padding: 25px 0;
`;

export default Titulo;
