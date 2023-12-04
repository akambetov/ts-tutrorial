import { useRef } from 'react';

interface NewTodoFormProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  // или
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  handleClickRef: (text: string) => void;
}

const NewTodoForm = ({
  value,
  onChange,
  handleClick,
  handleClickRef,
}: NewTodoFormProps) => {
  // !useRef всегда должен принимать дженерик HTML{some}Element
  const inputrRef = useRef<HTMLInputElement>(null);

  const onClickRef = () => {
    if (inputrRef.current) {
      handleClickRef(inputrRef.current.value);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="new todo"
        value={value}
        onChange={onChange}
      />
      <button onClick={handleClick}>Add todo</button>
      {/* ref */}
      <p>Ref input</p>
      <input ref={inputrRef} type="text" placeholder="new todo" />
      <button onClick={onClickRef}>Add todo</button>
    </>
  );
};

export default NewTodoForm;
