import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";

export default function Todo({ text, updateMode, deleteMode }) {
  return (
    <div className="todolist">
      <div>{text}</div>
      <div className="icons">
        <FaRegEdit onClick={updateMode} />
        <MdAutoDelete onClick={deleteMode} />
      </div>
    </div>
  );
}
