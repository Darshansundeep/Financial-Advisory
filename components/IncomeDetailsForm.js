// components/IncomeDetailsForm.js

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const IncomeDetailsForm = ({ initialValues, onNext, onPrev }) => {
  const validationSchema = Yup.object({
    salary: Yup.number().min(0, 'Must be 0 or greater'),
    otherIncome: Yup.number().min(0, 'Must be 0 or greater'),
    rentalIncome: Yup.number().min(0, 'Must be 0 or greater'),
    businessIncome: Yup.number().min(0, 'Must be 0 or greater'),
    savings: Yup.number().min(0, 'Must be 0 or greater'),
  }).test(
    'at-least-one',
    'At least one field is required',
    (values) => Object.values(values).some((value) => value)
  );

  return (
    <div className="form-container">
      <h2>Income Details</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onNext(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <label htmlFor="salary">Salary</label>
            <Field name="salary" type="number" />
            {errors.salary && touched.salary && <div className="error">{errors.salary}</div>}

            <label htmlFor="otherIncome">Other Income</label>
            <Field name="otherIncome" type="number" />
            {errors.otherIncome && touched.otherIncome && <div className="error">{errors.otherIncome}</div>}

            <label htmlFor="rentalIncome">Rental Income</label>
            <Field name="rentalIncome" type="number" />
            {errors.rentalIncome && touched.rentalIncome && <div className="error">{errors.rentalIncome}</div>}

            <label htmlFor="businessIncome">Business Income</label>
            <Field name="businessIncome" type="number" />
            {errors.businessIncome && touched.businessIncome && <div className="error">{errors.businessIncome}</div>}

            <label htmlFor="savings">Savings</label>
            <Field name="savings" type="number" />
            {errors.savings && touched.savings && <div className="error">{errors.savings}</div>}

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

export default IncomeDetailsForm;
