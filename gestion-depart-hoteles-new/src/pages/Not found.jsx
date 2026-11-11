import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="section">
      <div className="section-header">
        <h2 className="heading-2">Not Found</h2>
      </div>

      <Link to={"/"} className="btn btn-outline">
        Ir hacia atrás
      </Link>
    </section>
  );
};

export default NotFound;