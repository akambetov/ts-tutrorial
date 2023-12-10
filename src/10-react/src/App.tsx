import { Container } from 'components/Container';
import { SearchWithRef, SearchWithoutRef } from 'components/Search';
import { TheHeader } from 'components/TheHeader';

function App() {
  return (
    <Container>
      <TheHeader />
      <SearchWithRef hasError onSubmit={() => {}} />
      <br />
      <SearchWithoutRef hasError onSubmit={() => {}} />
    </Container>
  );
}

export default App;
