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
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
import "../App.css";

const Login = () => {
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col md={3}>
              <img
                src={logo} // Replace with your actual logo path
                alt="Logo"
                style={{ maxWidth: "150px", height: "auto" }}
              />
            </Col>
          </Row>

          <Row>
            <p>email </p>
            <FormGroup floating>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>
          </Row>

          <Row>
            <Col md={3}>
              <Col md={3}></Col>
              <p>password </p>
              <FormGroup floating>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
                <Label for="examplePassword">Password</Label>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={3}></Col>{" "}
            <Button color="primary" block>
              Login{" "}
            </Button>
          </Row>
        </Form>
      </Container>
      <p className="smalltext">
        No Account ? <Link to="/Register"> Sing Up now. </Link>
      </p>
    </div>
  );
};

export default Login;
