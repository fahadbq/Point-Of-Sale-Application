import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import PrivateRoute from "./helperComponents/PrivateRoute";
import swal from "sweetalert";

import Home from "./userAuthComponents/Home";
import Register from "./userAuthComponents/Register";
import Login from "./userAuthComponents/Login";
import Account from "./components/Account";
import DashboardContainer from "./components/dashboard/DashboardContainer.js";
import CustomersContainer from "./components/customers/CustomersContainer";
import ProductsContainer from "./components/products/ProductsContainer";
import BillsContainer from "./components/bills/BillsContainer";
import BillDetails from "./components/bills/BillDetails";

const Navigate = (props) => {
  const { userLoggedIn, handleAuth } = props;
  const navigate = useNavigate();

  const handleLogOut = () => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("token");
        handleAuth();
        swal("Logged out", {
          icon: "success",
        });
        navigate("/login");
      }
    });
  };

  return (
    <div>
      {userLoggedIn ? (
        <nav
          className="navbar sticky-top navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#263238" }}
        >
          <div className="container-fluid">
            <NavLink to="/dashboard" className="navbar-brand active ">
              {" "}
              Dashboard{" "}
            </NavLink>

            <div className="collapse navbar-collapse">
              <NavLink to="/customers" className="navbar-brand nav-link active">
                {" "}
                Customers{" "}
              </NavLink>

              <NavLink to="/products" className="navbar-brand nav-link active">
                {" "}
                Products{" "}
              </NavLink>

              <NavLink to="/bills" className="navbar-brand nav-link active">
                {" "}
                Bills{" "}
              </NavLink>
            </div>

            <NavLink to="/account" className="navbar-brand nav-link active">
              {" "}
              Account{" "}
            </NavLink>

            <NavLink
              to="/account"
              onClick={handleLogOut}
              className="navbar-brand nav-link active"
            >
              {" "}
              Log Out{" "}
            </NavLink>
          </div>
        </nav>
      ) : (
        <nav
          className="navbar sticky-top navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#263238" }}
        >
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <NavLink to="/" className="navbar-brand nav-link active">
                {" "}
                Home{" "}
              </NavLink>
              <NavLink to="/register" className="navbar-brand nav-link active">
                {" "}
                Register{" "}
              </NavLink>
              <NavLink to="/login" className="navbar-brand nav-link active">
                {" "}
                Login{" "}
              </NavLink>
            </div>
          </div>
        </nav>
      )}

      {/* Route session */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login handleAuth={handleAuth} />} />

        {/* Private route */}
        <Route path="/account" element={<PrivateRoute component={Account} />} />
        <Route
          path="/customers"
          element={<PrivateRoute component={CustomersContainer} />}
        />
        <Route
          path="/products"
          element={<PrivateRoute component={ProductsContainer} />}
        />
        <Route
          path="/bills"
          element={<PrivateRoute component={BillsContainer} />}
        />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={DashboardContainer} />}
        />
        <Route
          path="/bills/:id"
          element={<PrivateRoute component={BillDetails} />}
        />
      </Routes>
    </div>
  );
};

export default Navigate;
