import React from "react";

export default function RecipeAuthorEdit(props) {
  const { author, handleAuthorChange, handleAuthorDelete } = props;

  function handleChange(changes) {
    handleAuthorChange(author.id, { ...author, ...changes });
  }

  return (
    <>
      <input
        type="text"
        className="recipe-edit__input"
        onChange={(e) => handleChange({ name: e.target.value })}
        value={author.name}
      />
      <input
        type="text"
        className="recipe-edit__input"
        onChange={(e) => handleChange({ date: e.target.value })}
        value={author.date}
      />
      <button
        className="btn btn--danger"
        onClick={() => handleAuthorDelete(author.id)}
      >
        &times;
      </button>
    </>
  );
}
