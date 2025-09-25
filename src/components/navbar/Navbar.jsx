import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFillBagFill  } from "react-icons/bs";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Head() {

  const cartProduct=useSelector(state=>(state.cart))
  let [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = () => {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      setLoggedInUser(user);
    };

    loadUser(); // run once on mount

    window.addEventListener("storage", loadUser); // listen for changes
    return () => window.removeEventListener("storage", loadUser);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="nav ">
      <Container>
        <Navbar.Brand href="/">
          <h3>
            <b>ETHKL</b>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/Women"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Women
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Men" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Men
            </Nav.Link>
            <Nav.Link as={NavLink} to="/shop" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Shop
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              About
            </Nav.Link>
            {loggedInUser ? (
              <>
                <Nav.Link disabled>Welcome, {loggedInUser.name}</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Log in
                </Nav.Link>
              </>
            )}
            <Nav.Link as={NavLink} to="/cart" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              <BsFillBagFill/><small className="">{cartProduct.length}</small>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;

