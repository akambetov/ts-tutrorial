import { Container } from 'components/Container';
import { SearchWithRef } from 'components/Search';
import { TheHeader } from 'components/TheHeader';

function App() {
  return (
    <Container>
      <TheHeader />
      <SearchWithRef hasError onSubmit={() => {}} />
    </Container>
  );
}

export default App;
