// components/PersonalDetailsForm.js

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const PersonalDetailsForm = ({ initialValues, onNext }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    age: Yup.number().required('Age is required').min(18, 'Must be at least 18'),
    maritalStatus: Yup.string().required('Marital status is required'),
    gender: Yup.string().required('Gender is required'),
    dependents: Yup.number().min(0, 'Cannot be negative'),
    occupation: Yup.string().required('Occupation is required'),
  });

  return (
    <div className="form-container">
      <h2>Personal Details</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onNext(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            {errors.name && touched.name && <div className="error">{errors.name}</div>}

            <label htmlFor="age">Age</label>
            <Field name="age" type="number" />
            {errors.age && touched.age && <div className="error">{errors.age}</div>}

            <label htmlFor="maritalStatus">Marital Status</label>
            <Field name="maritalStatus" as="select">
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
            </Field>
            {errors.maritalStatus && touched.maritalStatus && <div className="error">{errors.maritalStatus}</div>}

            <label htmlFor="gender">Gender</label>
            <Field name="gender" as="select">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Field>
            {errors.gender && touched.gender && <div className="error">{errors.gender}</div>}

            <label htmlFor="dependents">Dependents</label>
            <Field name="dependents" type="number" />
            {errors.dependents && touched.dependents && <div className="error">{errors.dependents}</div>}

            <label htmlFor="occupation">Occupation</label>
            <Field name="occupation" type="text" />
            {errors.occupation && touched.occupation && <div className="error">{errors.occupation}</div>}

            <div className="button-group">
              <button type="submit" className="next-button">Next</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalDetailsForm;
