import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import CreateUserModal from "./CreateUserModal";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Spinner,
} from "react-bootstrap";
import useWindowWidth from "./hooks/useWindowWidth";
import usersData from "../data/user.json";

export default function Dashboard() {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const sidebarWidth = 250;

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "Viewer",
    status: "Active",
    joinDate: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    setTimeout(() => {
      setUsers(usersData);
    }, 1000);
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleCreateUser = () => {
    const nextId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    const userWithId = { ...newUser, id: nextId };
    setUsers([...users, userWithId]);
    handleCloseModal();
    setNewUser({
      name: "",
      email: "",
      role: "Viewer",
      status: "Active",
      joinDate: new Date().toISOString().split("T")[0],
    });
  };

  const activeUsers = users.filter((user) => user.status === "Active").length;
  const newUsersThisWeek = users.filter((user) => {
    const joinDate = new Date(user.joinDate);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return joinDate >= sevenDaysAgo;
  }).length;

  return (
    <div className="d-flex min-vh-100 bg-light">
      <Sidebar />
      <div
        className="flex-grow-1"
        style={{
          marginLeft: isMobile ? 0 : `${sidebarWidth}px`,
          padding: "1rem",
        }}
      >
        <Container fluid>
          <Row className="g-4">
            <Col xs={12} md={6}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>User Status</Card.Title>
                  <Card.Text className="fs-5">Active Users: {activeUsers}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>New Users</Card.Title>
                  <Card.Text className="fs-5">Joined this week: {newUsersThisWeek}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="my-4">
            <Col xs={12}>
              <Card className="shadow-sm">
                <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                  <Card.Title className="mb-2 mb-md-0">Manage Users</Card.Title>
                  <div>
                    <button className="btn btn-primary me-2" onClick={handleShowModal}>
                      Create User
                    </button>
                    <button className="btn btn-danger">Delete User</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>User List</Card.Title>
                  {users.length === 0 ? (
                    <div className="text-center py-5">
                      <Spinner animation="border" />
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <Table striped bordered hover responsive className="mt-3">
                        <thead className="table-dark">
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Join Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user) => (
                            <tr key={user.id}>
                              <td>{user.id}</td>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.role}</td>
                              <td>{user.status}</td>
                              <td>{user.joinDate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Reusable Create User Modal */}
      <CreateUserModal
        show={showModal}
        handleClose={handleCloseModal}
        handleCreate={handleCreateUser}
        newUser={newUser}
        setNewUser={setNewUser}
      />
    </div>
  );
}
