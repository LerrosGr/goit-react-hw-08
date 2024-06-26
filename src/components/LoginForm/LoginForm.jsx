import { Form, Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispath = useDispatch();
  const handleSubmit = (values, actions) => {
    dispath(logIn(values))
      .unwrap()
      .then(data => console.log(data))
      .catch(err => console.log(err));
    actions.resetForm();
  };
  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <img
            className={css.img}
            src="../../../image/png-transparent-avatars-accounts-man-male-people-person-fashion-style-sunglasses-glasses-wavy-hair-male-avatars-free-d-illustration-thumbnail-removebg-preview.png"
            alt="profile image"
          />
          <label>Email</label>
          <Field className={css.field} type="email" name="email"></Field>
          <label>Password</label>
          <Field className={css.field} type="password" name="password"></Field>
          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
