import React, { useState, useEffect } from "react";
import { Row, Col, Card, Spinner, Table } from "react-bootstrap";
  // Dummy JSON data
import dummyUsers from "../data/user.json"


const Users = () => {
  const [users, setUsers] = useState([]);


  // Simulate API call with setTimeout
  useEffect(() => {
    setTimeout(() => {
      setUsers(dummyUsers);
    }, 1000);
  }, []);

  return (
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
                      <th>Device</th>
                      <th>Location</th>
                      <th>IP Address</th>
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
                        <td>{user.device}</td>
                        <td>{user.location}</td>
                        <td>{user.ipAddress}</td>
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
  );
};

export default Users;
