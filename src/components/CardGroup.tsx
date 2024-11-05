import { useState } from "react";

interface Props {
  name: string;
  value: string;
  pic: string;
}

function CardGroup({ props }: { props: Props[] }) {
  let items = ["Fogão", "Geladeira", "Maquina de Lavar", "Televisão", "Mopa"];
  const message = items.length === 0 ? <p>Nenhum presente encontrado</p> : null;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  /*
  return (
    <>
      <h1>Lista de Presentes</h1>
      {message}
      <div className="container">
        <div className="row">
          {props.map((prop, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={prop.pic} className="card-img-top" alt={prop.name} />
                <div className="card-body">
                  <h5 className="card-title">{prop.name}</h5>
                  <p className="card-text">{"R$ ".concat(prop.value)}</p>
                  <a href="#" className="btn btn-primary">
                    Presentear
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  */

  return (
    <>
      <h1 className="text-center my-4">Lista de Presentes</h1>
      {message}
      <div className="container">
        <div className="row">
          {props.map((prop, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100" style={{ width: "18rem" }}>
                <img
                  src={prop.pic}
                  className="card-img-top"
                  alt={prop.name}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{prop.name}</h5>
                  <p className="card-text text-center text-muted">
                    {"R$ " + prop.value}
                  </p>
                  <a href="#" className="btn btn-primary mt-auto">
                    Presentear
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardGroup;
