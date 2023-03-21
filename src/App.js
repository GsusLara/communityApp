function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Comunidad</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Deportes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Educación</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Registros</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-12 my-lg-5"><h1>Vista de Mar de Goicoechea</h1>
            <div className="banner"/></div>
          <div className="col-12 col-md-8">
            
            <h3>Recolección de basura</h3>
            <ul>
              <li>La recolección de basura se llevará a cabo los martes y viernes a partir de las 8:00 am.</li>
              <li>Por favor, asegúrese de tener su basura debidamente separada en bolsas apropiadas.</li>
            </ul>
          </div>
          <div className="col-12 col-md-4 ">
            <h3>Actividades en el salón comunal</h3>
            <ul>
              <li>Jueves 7:00 pm - Club de lectura <br/> (Tutor: Danniela G.)</li>
              <li>Sábado 10:00 am - Clase de ajedrez <br/> (P  rofesor: Con Don Mario)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
