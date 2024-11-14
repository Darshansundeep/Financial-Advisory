// components/MultiStepForm.js

import { useRouter } from 'next/router';
import { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import IncomeDetailsForm from './IncomeDetailsForm';
import ExpenseDetailsForm from './ExpenseDetailsForm';
import LoanDetailsForm from './LoanDetailsForm';
import InsuranceDetailsForm from './InsuranceDetailsForm';

const MultiStepForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    personalDetails: {
      name: '',
      age: '',
      maritalStatus: '',
      gender: '',
      dependents: '',
      occupation: '',
    },
    incomeDetails: {
      salary: '',
      otherIncome: '',
      rentalIncome: '',
      businessIncome: '',
      savings: '',
    },
    expenseDetails: {
      rent: '',
      groceries: '',
      utilities: '',
      transportation: '',
      entertainment: '',
      medicalExpenses: '',
    },
    loanDetails: {
      homeLoan: {
        totalLoanAmount: '',
        paymentYears: '',
        emiPerMonth: '',
      },
      carLoan: {
        totalLoanAmount: '',
        paymentYears: '',
        emiPerMonth: '',
      },
      personalLoan: {
        totalLoanAmount: '',
        paymentYears: '',
        emiPerMonth: '',
      },
      educationLoan: {
        totalLoanAmount: '',
        paymentYears: '',
        emiPerMonth: '',
      },
    },
    insuranceDetails: {
      healthInsurance: {
        totalCoverage: '',
        years: '',
        monthlyPremium: '',
      },
      lifeInsurance: {
        totalCoverage: '',
        years: '',
        monthlyPremium: '',
      },
      vehicleInsurance: {
        totalCoverage: '',
        years: '',
        monthlyPremium: '',
      },
    },
  });

  const handleNext = (data) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData };
      switch (step) {
        case 0:
          updatedData.personalDetails = data;
          break;
        case 1:
          updatedData.incomeDetails = data;
          break;
        case 2:
          updatedData.expenseDetails = data;
          break;
        case 3:
          updatedData.loanDetails = data;
          break;
        case 4:
          updatedData.insuranceDetails = data;
          break;
        default:
          break;
      }
      return updatedData;
    });
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    console.log('Submitting form data:', formData); // Log form data before submission
    try {
      const response = await fetch('/api/getFinancialAdvice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Advisory data received:', data); // Log the response data

      if (response.ok && data.advisory) {
        console.log('Navigating to summary page'); // Log before navigation
        router.push({
          pathname: '/summary',
          query: { advisory: data.advisory },
        });
      } else {
        console.error('Error in response:', data.error);
        alert('There was an error processing your request. Please try again.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('Failed to submit data. Please check your internet connection and try again.');
    }
  };

  return (
    <div>
      <h1>Personal Finance Advisory</h1>

      {step === 0 && (
        <PersonalDetailsForm
          initialValues={formData.personalDetails}
          onNext={handleNext}
        />
      )}
      {step === 1 && (
        <IncomeDetailsForm
          initialValues={formData.incomeDetails}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 2 && (
        <ExpenseDetailsForm
          initialValues={formData.expenseDetails}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 3 && (
        <LoanDetailsForm
          initialValues={formData.loanDetails}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 4 && (
        <InsuranceDetailsForm
          initialValues={formData.insuranceDetails}
          onNext={handleSubmit} // Final submit button
          onPrev={handlePrev}
        />
      )}

      {/* Progress Indicators (Optional) */}
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        Step {step + 1} of 5
      </div>
    </div>
  );
};

export default MultiStepForm;
