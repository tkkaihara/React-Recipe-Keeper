import React, { useContext } from "react";
import { RecipeContext } from "./App";

export default function SearchBar() {
  const { handleSearchRecipes } = useContext(RecipeContext);

  return (
    <>
      <input
        type="text"
        placeholder="Search Recipes..."
        onChange={handleSearchRecipes}
      />
    </>
  );
}
