import "../css/generic.css"

const NotFound = () => {
  return (
    <>
      <div className="container mt-5 page-container">
        <div className="row">
          <div className="col">
            <img
            //   className="vertical-center"
              src="https://i.imgur.com/e1IneGq.jpg"
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
