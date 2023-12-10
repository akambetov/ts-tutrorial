import { useRef } from 'react';
import { Button } from 'components/Button';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import styles from './Search.module.scss';

interface SearchWithRefProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

export const SearchWithRef = ({ hasError, onSubmit }: SearchWithRefProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = searchRef.current?.value || '';

    if (text.trim()) {
      onSubmit(text);

      if (searchRef.current) {
        searchRef.current.value = '';
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          ref={searchRef}
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
