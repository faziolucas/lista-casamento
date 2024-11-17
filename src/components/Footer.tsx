function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section>
      <footer className="text-white" style={{ backgroundColor: "#205843" }}>
        <div className="container p-4 pb-0">
          <section>
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">
                Obrigado pelo apoio e esperamos vocês :)
              </span>
            </p>
          </section>
        </div>

        <div
          className="d-flex flex-column justify-content-center align-items-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <span>© {currentYear} Copyright: Lucão front-end kkkkkkkkj</span>
          <span style={{ marginTop: "5px", fontSize: "14px" }}>❤️❤️❤️❤️</span>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
