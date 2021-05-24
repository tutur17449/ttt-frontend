import { useEffect, useState } from "react";
import { Button, Form, Alert } from "reactstrap";
import useAuth from "../../hooks/useAuth";
import formValidator from "../../helpers/formValidator";
import formFieldValidator from "../../helpers/formFieldValidator";
import validateFields from "./formLogin.validator";
import FormInput from "../FormInput";
import socket from "../../lib/socket";
import "./styles.scss";
import ButtonNeon from "../ButtonNeon";

const FormLogin = () => {
  const { setUser } = useAuth();
  const [globalError, setGlobalError] = useState(null);
  const [formData, setFormData] = useState({
    pseudo: "",
  });
  const [formError, setFormError] = useState({
    pseudo: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      pseudo: value,
    });
    formFieldValidator(name, value, validateFields, setFormError, formError);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validation = formValidator(
      formError,
      setFormError,
      formData,
      validateFields
    );

    if (!validation) {
      socket.emit("userLogin", formData.pseudo);
    }
  };

  useEffect(() => {
    socket.on("userOnline", (user) => {
      if (user === formData.pseudo) {
        setUser(user);
      }
    });

    socket.on("socketError", (error) => {
      setGlobalError(error);
    });

    return () => {
      socket.off("userOnline");
      socket.off("socketError");
    };
  }, [formData.pseudo]);

  return (
    <>
      {globalError && (
        <Alert
          color="danger"
          isOpen={globalError}
          toggle={() => setGlobalError(null)}
        >
          {globalError}
        </Alert>
      )}
      <Form onSubmit={onSubmit} className="mt-5">
        <FormInput
          label="Your pseudo"
          type="text"
          name="pseudo"
          id="pseudo"
          placeholder="johnDoe"
          value={formData.pseudo}
          onChange={onChange}
          error={formError.pseudo}
        />
        <ButtonNeon type="submit" label="Login" classes="mt-5" />
      </Form>
    </>
  );
};

export default FormLogin;
