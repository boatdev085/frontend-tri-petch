import styled from "styled-components";
import AthletsPage from "./containers/Athlets";
import Players from "./containers/Players";

function App() {
  return (
    <Container>
      <AthletsPage />
      <Players />
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  margin: 0 auto;
`;
