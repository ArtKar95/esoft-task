import React, { useState } from "react";
import classes from "./Login.module.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../redux/authAC";

const Login = ({ login }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: null,
    password: null,
  });

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: null,
    });
  };

  const handleSend = () => {
    const { username, password } = values;

    let usernameMessage = null,
      passwordMessage = null,
      valid = true;

    if (!username.trim()) {
      usernameMessage = "User name is required";
      valid = false;
    } else if (username.trim().length < 4) {
      usernameMessage = "User name can't be shorter than 4 simbol"; //for example
      valid = false;
    }

    if (!password.trim()) {
      passwordMessage = "Password is required";
      valid = false;
    } else if (password.trim().length < 6) {
      passwordMessage = "Password can't be shorter than 6 simbol";
      valid = false;
    }

    setErrors({
      username: usernameMessage,
      password: passwordMessage,
    });

    if (valid) {
      login({ isAuth: true, name: values.username });
    }
  };

  return (
    <div className={classes.main}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={9}>
            <div className={classes.form}>
              <Form>
                <h2 className="text-center my-5 text-dark">Login page</h2>

                <Form.Group>
                  <Form.Control
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className={!!errors.username ? classes.invalid : ""}
                  />
                  <Form.Text className="text-danger">
                    {errors.username}
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className={!!errors.password ? classes.invalid : ""}
                  />
                  <Form.Text className="text-danger">
                    {errors.password}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="text-center">
                  <Button
                    variant="success"
                    onClick={handleSend}
                    className="px-5 mb-2"
                  >
                    Login
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
