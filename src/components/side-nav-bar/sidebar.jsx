import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" bg-dark col-auto col-md-0 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2"></a>
            <hr className="text-secondary d-none d-sm-block" />
            <ul class="nav nav-pills flex-column mt-3 mt-sm-0">
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <Link to="/dashboard" className="text-decoration-none">
                  <a class="nav-link text-white fs-4" aria-current="page">
                    <i className="bi bi-speedometer"></i>
                    <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                  </a>
                </Link>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <Link to="/home" className="text-decoration-none">
                  <a class="nav-link text-white fs-4" aria-current="page">
                    <i className="bi bi-house"></i>
                    <span className="ms-3 d-none d-sm-inline">Home</span>
                  </a>
                </Link>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <Link to="/tasks" className="text-decoration-none">
                  <a class="nav-link text-white fs-4" aria-current="page">
                    <i className="bi bi-table"></i>
                    <span className="ms-3 d-none d-sm-inline">Tasks</span>
                  </a>
                </Link>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <Link to="/categories" className="text-decoration-none">
                  <a class="nav-link text-white fs-4" aria-current="page">
                    <i className="bi bi-grid"></i>
                    <span className="ms-3 d-none d-sm-inline">Categories</span>
                  </a>
                </Link>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <Link to="/users" className="text-decoration-none">
                  <a class="nav-link text-white fs-4" aria-current="page">
                    <i className="bi bi-people"></i>
                    <span className="ms-3 d-none d-sm-inline">Users</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
