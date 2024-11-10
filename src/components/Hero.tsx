function Hero() {
  return (
    <div
      className="p-5 text-center bg-image rounded-1 position-relative"
      style={{
        backgroundImage: "url(./src/assets/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
      }}
    >
      <div
        className="mask position-absolute w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="display-1 mb-3">Assucena e Lucas</h1>
            <h4 className="mb-3">Vão se casar!</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
