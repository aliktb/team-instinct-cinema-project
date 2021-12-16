import "../css/generic.css"

const NotFound = () => {
  return (
    <>
      <div className="container mt-5 page-container">
        <div className="row">
          <div className="col">
            <img
              src="https://i.imgur.com/e1IneGq.jpg"
              alt="john travolta confused gif from pulp fiction"
              style={{ maxWidth: "100%", height: "100%" }}
              id="liam"
            ></img>
          </div>

          <div
            className="col"
            style={{ display: "flex", "flex-direction": "column" }}
          >
            <div className="my-5">
              <h1 className="my-4">404 Page not found</h1>
              <p className="mt-4" style={{ alignItems: "center" }}>
                we're sorry the page you are looking for has not been found.
                please go back to the homepage
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
