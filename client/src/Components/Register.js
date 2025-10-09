import { userSchemaValidation } from "../Validations/UserValidations";
// import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addUser, deleteUser } from "../Features/UserSlice";

import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
  Form,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Register = () => {
  const userList = useSelector((state) => state.users.value);
  console.log("User List from Redux:", userList);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });

  // Handle form submission
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    try {
      console.log("Form Data", data);
      alert("valied all good.");
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      dispatch(addUser(userData));
    } catch (error) {
      console.log(Error);
    } // You can handle the form submission here
  };

  const handleDelete = (email) => {
    try {
      dispatch(deleteUser(email));
    } catch (error) {
      console.log(Error);
    }
  };

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            Name<br></br>
            <input
              type="text"
              name="name"
              {...register("name", {
                value: name,
                onChange: (e) => setname(e.target.value),
              })}
            ></input>
          </Col>
          <p className="error">{errors.name?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Email<br></br>
            <input
              type="email"
              name="email"
              {...register("email", {
                value: email,
                onChange: (e) => setemail(e.target.value),
              })}
            ></input>
          </Col>
          <p className="error">{errors.email?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Password<br></br>
            <input
              type="password"
              name="password"
              {...register("password", {
                value: password,
                onChange: (e) => setpassword(e.target.value),
              })}
            ></input>
          </Col>
          <p className="error">{errors.password?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Confirm Password<br></br>
            <input
              type="password"
              name="confirmpassword"
              {...register("confirmPassword", {
                value: confirmPassword,
                onChange: (e) => setconfirmPassword(e.target.value),
              })}
            ></input>
          </Col>
          <p className="error">{errors.confirmPassword?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            <Button>Register</Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col md={6}>
          <h1>List of Users</h1>
          <table className="table">
            <thead>
              <tr>
                <td>Email</td>
                <td>Name</td>
                <td>Password</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>

                  <td>
                    <Button color="success"> Update </Button>
                    <Button
                      color="danger"
                      onClick={() => handleDelete(user.email)}
                    >
                      {" "}
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
