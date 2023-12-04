interface NewTodoFormProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  // или
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

const NewTodoForm = ({ value, onChange, handleClick }: NewTodoFormProps) => {
  return (
    <>
      <input
        type="text"
        placeholder="new todo"
        value={value}
        onChange={onChange}
      />
      <button onClick={handleClick}>Add todo</button>
    </>
  );
};

export default NewTodoForm;