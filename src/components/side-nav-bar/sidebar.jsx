import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-dark col-auto col-md-0 min-vh-100 d-flex justify-content-between flex-column">
          <div>
            <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2">
              
            </a>
            <hr className="text-secondary d-none d-sm-block" />
            <ul class="nav nav-pills flex-column mt-3 mt-sm-0">
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="dashboard"
                  class="nav-link text-white fs-4"
                  aria-current="page"
                >
                  <i className="bi bi-speedometer"></i>
                  <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="/"
                  class="nav-link text-white fs-4"
                  aria-current="page"
                >
                  <i className="bi bi-house"></i>
                  <span className="ms-3 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="tasks"
                  class="nav-link text-white fs-4"
                  aria-current="page"
                >
                  <i className="bi bi-table"></i>
                  <span className="ms-3 d-none d-sm-inline">Tasks</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="categories"
                  class="nav-link text-white fs-4"
                  aria-current="page"
                >
                  <i className="bi bi-grid"></i>
                  <span className="ms-3 d-none d-sm-inline">Categories</span>
                </a>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                <a
                  href="users"
                  class="nav-link text-white fs-4"
                  aria-current="page"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-3 d-none d-sm-inline">Users</span>
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
