import { useState } from "react";

function ListGroup() {
  let items = ["Fogão", "Geladeira", "Maquina de Lavar", "Televisão", "Mopa"];
  const message = items.length === 0 ? <p>Nenhum presente encontrado</p> : null;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Lista de Presentes</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
