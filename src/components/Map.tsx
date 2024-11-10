function Map() {
  return (
    <div className="container my-5">
      <div className="text-center">
        <hr
          className="my-4 border-dark mx-auto"
          style={{ width: "100%", height: "3px" }}
        />
        <i className="bi bi-geo-alt-fill fs-2 text-primary my-2"></i>
      </div>

      <div className="text-center mb-4">
        <h2 className="fw-bold">Local da confraternização</h2>
        <p className="text-muted">
          Esperamos vocês no salão <b>Arandela</b>, na Avenida Henrique Munhoz
          García, 327, Jardim Boa Esperança, <b>Alfenas - MG</b>
        </p>
        <p className="text-muted">
          Fique a vontade para entrar em contato conosco a respeito de qualquer
          dúvida sobre a localização.
        </p>
        <br></br>
        <p className="text-muted">
          <b>Confira no mapa:</b>
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="embed-responsive embed-responsive-16by9 rounded shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.228512972738!2d-45.961147023944!3d-21.42026128644236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b5f56227936979%3A0xc9bda17834a3ba1b!2sArandela%20Festas%20e%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1731075768296!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
