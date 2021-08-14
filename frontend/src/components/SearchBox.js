import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline className="d-flex">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="ml-sm-3 mr-sm-5 searchForm"
        onFocus={{ color: "white" }}
      ></Form.Control>
      <Button type="submit" variant="light" class="me-sm-2 p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
