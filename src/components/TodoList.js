import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, ListGroup } from "react-bootstrap";

function TodoList() {
  const { id } = useParams();

  const [posts, setDeals] = useState("");
  const [comments, setComents] = useState([]);

  console.log("todo list");
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
    })
      .then((res) => {
        setDeals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/" + id + "/comments",
    })
      .then((res) => {
        setComents(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <h1>Details Of Post</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{posts.id}</td>
            <td>{posts.title}</td>
          </tr>
        </tbody>
      </Table>

      <h4>comments</h4>
      {comments.map((comment) => (
        <ListGroup key={comment.id}>
          <ListGroup.Item>{comment.email}</ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  );
}

export default TodoList;
