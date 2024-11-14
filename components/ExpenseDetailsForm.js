// components/ExpenseDetailsForm.js

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const ExpenseDetailsForm = ({ initialValues, onNext, onPrev }) => {
  const validationSchema = Yup.object({
    rent: Yup.number().min(0, 'Must be 0 or greater'),
    groceries: Yup.number().min(0, 'Must be 0 or greater'),
    utilities: Yup.number().min(0, 'Must be 0 or greater'),
    transportation: Yup.number().min(0, 'Must be 0 or greater'),
    entertainment: Yup.number().min(0, 'Must be 0 or greater'),
    medicalExpenses: Yup.number().min(0, 'Must be 0 or greater'),
  });

  return (
    <div className="form-container">
      <h2>Expense Details</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onNext(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <label htmlFor="rent">Rent</label>
            <Field name="rent" type="number" />
            {errors.rent && touched.rent && <div className="error">{errors.rent}</div>}

            <label htmlFor="groceries">Groceries</label>
            <Field name="groceries" type="number" />
            {errors.groceries && touched.groceries && <div className="error">{errors.groceries}</div>}

            <label htmlFor="utilities">Utilities</label>
            <Field name="utilities" type="number" />
            {errors.utilities && touched.utilities && <div className="error">{errors.utilities}</div>}

            <label htmlFor="transportation">Transportation</label>
            <Field name="transportation" type="number" />
            {errors.transportation && touched.transportation && <div className="error">{errors.transportation}</div>}

            <label htmlFor="entertainment">Entertainment</label>
            <Field name="entertainment" type="number" />
            {errors.entertainment && touched.entertainment && <div className="error">{errors.entertainment}</div>}

            <label htmlFor="medicalExpenses">Medical Expenses</label>
            <Field name="medicalExpenses" type="number" />
            {errors.medicalExpenses && touched.medicalExpenses && <div className="error">{errors.medicalExpenses}</div>}

            <div className="button-group">
              <button type="button" onClick={onPrev} className="prev-button">Previous</button>
              <button type="submit" className="next-button">Next</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ExpenseDetailsForm;
