// components/InsuranceDetailsForm.js

import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const InsuranceDetailsForm = ({ initialValues, onNext, onPrev }) => {
  const [loading, setLoading] = useState(false);

  const conditionalInsuranceSchema = (fields) =>
    Yup.object().shape({
      totalCoverage: Yup.number()
        .min(0, 'Must be 0 or greater')
        .when(fields, {
          is: (value) => value && value > 0,
          then: Yup.number().required('Total coverage is required'),
        }),
      years: Yup.number()
        .min(1, 'Must be at least 1 year')
        .when(fields, {
          is: (value) => value && value > 0,
          then: Yup.number().required('Number of years is required'),
        }),
      monthlyPremium: Yup.number()
        .min(0, 'Must be 0 or greater')
        .when(fields, {
          is: (value) => value && value > 0,
          then: Yup.number().required('Monthly premium is required'),
        }),
    });

  const validationSchema = Yup.object({
    lifeInsurance: conditionalInsuranceSchema('lifeInsurance.totalCoverage'),
    healthInsurance: conditionalInsuranceSchema('healthInsurance.totalCoverage'),
    vehicleInsurance: conditionalInsuranceSchema('vehicleInsurance.totalCoverage'),
  });

  const handleSubmit = async (values) => {
    setLoading(true); // Start loading animation
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate processing delay
    setLoading(false); // Stop loading animation
    onNext(values); // Proceed with the submission logic
  };

  return (
    <div className="insurance-form form-container">
      <h2>Insurance Details</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit} // Use handleSubmit function here
      >
        {({ errors, touched }) => (
          <Form className="form">
            {['lifeInsurance', 'healthInsurance', 'vehicleInsurance'].map((insuranceType) => (
              <div key={insuranceType} className="insurance-section">
                <h3>{insuranceType.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</h3>

                <div className="field-group">
                  <label htmlFor={`${insuranceType}.totalCoverage`}>Total Coverage</label>
                  <Field name={`${insuranceType}.totalCoverage`} type="number" className="input-small" />
                  {errors[insuranceType]?.totalCoverage && touched[insuranceType]?.totalCoverage && (
                    <div className="error">{errors[insuranceType].totalCoverage}</div>
                  )}
                </div>

                <div className="field-group">
                  <label htmlFor={`${insuranceType}.years`}>Number of Years</label>
                  <Field name={`${insuranceType}.years`} type="number" className="input-small" />
                  {errors[insuranceType]?.years && touched[insuranceType]?.years && (
                    <div className="error">{errors[insuranceType].years}</div>
                  )}
                </div>

                <div className="field-group">
                  <label htmlFor={`${insuranceType}.monthlyPremium`}>Monthly Premium</label>
                  <Field name={`${insuranceType}.monthlyPremium`} type="number" className="input-small" />
                  {errors[insuranceType]?.monthlyPremium && touched[insuranceType]?.monthlyPremium && (
                    <div className="error">{errors[insuranceType].monthlyPremium}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="button-group">
              <button type="button" onClick={onPrev} className="prev-button">Previous</button>
              <button type="submit" className="next-button">Submit</button>
            </div>

            {loading && (
              <div className="loading-animation">
                <p>Analyzing...</p>
                <div className="spinner"></div> {/* Spinner animation */}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InsuranceDetailsForm;
