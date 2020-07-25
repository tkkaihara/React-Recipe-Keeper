import React, { useContext } from "react";
import { RecipeContext } from "./App";

export default function SearchBar({ query, recipes }) {
  const { handleSearchRecipes } = useContext(RecipeContext);

  return (
    <>
      <input
        type="text"
        onChange={() => handleSearchRecipes(query)}
        placeholder="Search Recipes..."
      />
    </>
  );
}
