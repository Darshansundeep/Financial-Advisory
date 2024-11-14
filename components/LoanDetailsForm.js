// components/LoanDetailsForm.js

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const LoanDetailsForm = ({ initialValues, onNext, onPrev }) => {
  const conditionalLoanSchema = (fields) =>
    Yup.object().shape({
      totalLoanAmount: Yup.number()
        .min(0, 'Must be 0 or greater')
        .when(fields, {
          is: (value) => value && value > 0,
          then: Yup.number().required('Total loan amount is required'),
        }),
      paymentYears: Yup.number()
        .min(1, 'Must be at least 1 year')
        .when(fields, {
          is: (value) => value && value > 0,
          then: Yup.number().required('Payment years are required'),
        }),
      emiPerMonth: Yup.number()
        .min(0, 'Must be 0 or greater')
        .when(fields, {
          is: (value) => value && value > 0,
          then: Yup.number().required('Monthly EMI is required'),
        }),
    });

  const validationSchema = Yup.object({
    homeLoan: conditionalLoanSchema('homeLoan.totalLoanAmount'),
    carLoan: conditionalLoanSchema('carLoan.totalLoanAmount'),
    personalLoan: conditionalLoanSchema('personalLoan.totalLoanAmount'),
    educationLoan: conditionalLoanSchema('educationLoan.totalLoanAmount'),
    mortgageLoan: conditionalLoanSchema('mortgageLoan.totalLoanAmount'),
  });

  return (
    <div className="loan-form form-container">
      <h2>Loan Details</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onNext(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            {['homeLoan', 'carLoan', 'personalLoan', 'educationLoan', 'mortgageLoan'].map((loanType) => (
              <div key={loanType} className="loan-section">
                <h3>{loanType.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</h3>

                <div className="field-group">
                  <label htmlFor={`${loanType}.totalLoanAmount`}>Total Loan Amount</label>
                  <Field name={`${loanType}.totalLoanAmount`} type="number" className="input-small" />
                  {errors[loanType]?.totalLoanAmount && touched[loanType]?.totalLoanAmount && (
                    <div className="error">{errors[loanType].totalLoanAmount}</div>
                  )}
                </div>

                <div className="field-group">
                  <label htmlFor={`${loanType}.paymentYears`}>Payment Years</label>
                  <Field name={`${loanType}.paymentYears`} type="number" className="input-small" />
                  {errors[loanType]?.paymentYears && touched[loanType]?.paymentYears && (
                    <div className="error">{errors[loanType].paymentYears}</div>
                  )}
                </div>

                <div className="field-group">
                  <label htmlFor={`${loanType}.emiPerMonth`}>EMI per Month</label>
                  <Field name={`${loanType}.emiPerMonth`} type="number" className="input-small" />
                  {errors[loanType]?.emiPerMonth && touched[loanType]?.emiPerMonth && (
                    <div className="error">{errors[loanType].emiPerMonth}</div>
                  )}
                </div>
              </div>
            ))}

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

export default LoanDetailsForm;
