import { useState } from 'react';
import { Container } from 'components/Container';
import { /*SearchWithRef,*/ SearchWithoutRef } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';

import { defaultUser } from 'mock';
import { GithubError, GithubUser, LocalGithubUser } from 'types';
import { isGithubUser } from 'utils';
import { extractLocalUser } from 'utils/extract-local-user';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = `${BASE_URL}${username}`;
    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <TheHeader />
      {/* <SearchWithRef hasError onSubmit={fetchUser} /> */}
      <br />
      <SearchWithoutRef onSubmit={fetchUser} hasError={!user} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
