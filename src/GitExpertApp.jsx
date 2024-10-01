import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GitExpertApp = () => {
  const [categories, setCategories] = useState([
    //"One Punch",
    "Samurai X",
    // "Dragon Ball",
    // "Naruto",
    // "Pokemon",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>COMPAN - Operadores</h1>

      {/* Input */}
      
      <AddCategory
        // setCategories = { setCategories }
        onNewCategory={onAddCategory}
      />

      {/* Gif Item */}
      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  );
};

export default GitExpertApp;
