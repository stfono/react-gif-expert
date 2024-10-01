import { useState } from "react";

export const AddCategory = ({ setCategories, onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');


  const onInputChange = ({ target }) => {
   setInputValue( target.value ); 
  };

  const onSubmit = (e) => {
   e.preventDefault();
   if ( inputValue.trim().length <= 1) return;
  //  setCategories(categories => [inputValue, ...categories]);
   onNewCategory( inputValue.trim() );
   setInputValue('');
  }

  return (
   <form onSubmit={ onSubmit }>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Buscar Gifs"
      />
   </form>
  );
};
