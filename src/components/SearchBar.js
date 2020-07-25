import React, { useContext } from "react";
import { RecipeContext } from "./App";

export default function SearchBar({ query, recipes }) {
  const { handleSearchRecipes, experiment } = useContext(RecipeContext);

  return (
    <>
      <input
        type="text"
        placeholder="Search Recipes..."
        onChange={experiment}
      />
    </>
  );
}
