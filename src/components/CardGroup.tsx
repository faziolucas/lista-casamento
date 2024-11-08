import PixButton from "./PixButton";

interface Props {
  name: string;
  value: string;
  pic: string;
}

function CardGroup({ props }: { props: Props[] }) {
  return (
    <>
      <h1 className="text-center my-4">Lista de Presentes</h1>
      <div className="container">
        <div className="row justify-content-center">
          {props.map((prop, index) => (
            <div
              key={index}
              className="col-md-4 mb-4 d-flex justify-content-center"
            >
              <div className="card shadow-sm h-100" style={{ width: "18rem" }}>
                <img
                  src={prop.pic}
                  className="card-img-top"
                  alt={prop.name}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center text-muted">
                    {prop.name}
                  </h5>
                  <p className="card-text text-center text-muted">
                    {"R$ " + prop.value}
                  </p>
                  <PixButton
                    name={prop.name}
                    value={+prop.value.replace(",", ".")}
                  ></PixButton>
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
