import { Container } from 'components/Container';
import { SearchWithRef, SearchWithoutRef } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';

import { defaultUser } from 'mock';

function App() {
  return (
    <Container>
      <TheHeader />
      <SearchWithRef hasError onSubmit={() => {}} />
      <br />
      <SearchWithoutRef hasError onSubmit={() => {}} />
      <UserCard {...defaultUser} />
    </Container>
  );
}

export default App;
