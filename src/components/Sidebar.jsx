import { useState, useEffect } from "react";
import { Nav, Offcanvas, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation(); // 🟡 Get current route

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔴 Don't render Sidebar on login page
  if (location.pathname === "/login") return null;

  const navLinks = (
    <Nav defaultActiveKey="/dashboard" className="flex-column">
      <Nav.Link href="/dashboard" onClick={handleClose} className="text-white">Dashboard</Nav.Link>
      <Nav.Link href="/login" onClick={handleClose} className="text-white">Login Activity</Nav.Link>
      <Nav.Link href="/users" onClick={handleClose} className="text-white">User Management</Nav.Link>
      <Nav.Link href="/capture" onClick={handleClose} className="text-white">Face Capture</Nav.Link>
    </Nav>
  );

  return (
    <>
      {isMobile && (
        <Button
          variant="dark"
          onClick={handleShow}
          className="position-fixed top-0 start-0 m-3 z-3"
          style={{ zIndex: 1051 }}
        >
          ☰
        </Button>
      )}

      {!isMobile && (
        <div
          className="bg-dark text-white vh-100 p-3"
          style={{ width: "250px", position: "fixed", top: 0, left: 0 }}
        >
          <h4 className="mb-4">Admin Dashboard</h4>
          {navLinks}
        </div>
      )}

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className="bg-dark text-white"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Admin Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{navLinks}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
