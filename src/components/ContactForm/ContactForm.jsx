import { Field, Form, Formik, ErrorMessage } from 'formik';
import s from "./ContactForm.module.css"
import * as Yup from 'yup';


const ContactForm = ({addContact}) => {

    const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
    const onlyNumbers = /^[0-9-]+$/;

    const applySchema = Yup.object().shape({
        name: Yup.string()
          .required('This field is required')
          .min(3, 'Min 3 symbols')
          .max(50, 'Max 50 symbols')
          .matches(onlyLetters, 'Only lettters allowed'),
          number: Yup.string() 
          .required('This field is required')
          .min(3, 'Min 3 symbols')
          .max(50, 'Max 50 symbols')
          .matches(onlyNumbers, 'Only numbers and dashes allowed'),
      });

    return (
        <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={applySchema}
        onSubmit={(values, { resetForm }) => {
          addContact(values.name, values.number);
          resetForm(); 
        }}
      >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className={s.form}>
          <label>
            <span className={s.title}>Name</span>
            <Field className={s.input} name="name" />
            <ErrorMessage name="name" component="div" className={s.error} />
          </label>

          <label>
            <span className={s.title}>Number</span>
            <Field className={s.input} name="number" />
            <ErrorMessage name="number" component="div" className={s.error} />
          </label>

          <button type="submit" className={s.button}>Add contact</button>
        </Form>
      )}
    </Formik>
  );
}
  
export default ContactForm;