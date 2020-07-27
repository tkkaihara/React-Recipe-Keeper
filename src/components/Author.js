import React from "react";

export default function authors({ name, date }) {
  return (
    <>
      <span>{name}</span>
      <span>{date}</span>
    </>
  );
}
