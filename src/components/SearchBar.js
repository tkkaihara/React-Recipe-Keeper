import React, { useContext } from "react";
import { RecipeContext } from "./App";

export default function SearchBar(props) {
  const { handleSearchRecipes } = useContext(RecipeContext);
  const { query } = props;

  return (
    <>
      <input
        type="text"
        onChange={handleSearchRecipes(query)}
        placeholder="Search Recipes..."
      />
    </>
  );
}
