import { Button } from 'components/Button';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import styles from './Search.module.scss';

interface SearchWithoutRefProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const SearchWithoutRef = ({
  hasError,
  onSubmit,
}: SearchWithoutRefProps) => {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search Github username"
        />
        {hasError && <div className={styles.error}>No Result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
