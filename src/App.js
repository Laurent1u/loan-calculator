import React, { useState } from 'react';
import './App.css';

// import custom components
import Calculator from './components/Calculator';
import Form from './components/Form'
import Input from './components/Input'
import ResultContainer from './components/ResultContainer';

function App() {
  const [loanTerms, setLoanTerms] = useState({
    amount: '',
    interest: '',
    years: ''
  });
  const [calculateLoan, setCalculateLoan] = useState({
    monthlyPayment: '',
    totalPayment: '',
    totalInterest: '',
    isValid: false
  })
  const [error, setError] = useState('');


  const updateLoanTerms = dataObj => {
    const key = Object.keys(dataObj)[0]
    const value = Object.values(dataObj)[0]

    setLoanTerms({...loanTerms, [key]: value})
  }

  const calculateClientLoan = () => {
    if(!isFormValid()) {
      return false;
    }

    const clientAmount = Number(loanTerms.amount)
    const calculateInterest = Number(loanTerms.interest) / 100 / 12
    const calculatePayments = Number(loanTerms.years) * 12
    const rate = Math.pow(1 + calculateInterest, calculatePayments)
    const monthly = (clientAmount * rate * calculateInterest) / (rate - 1)
    
    if(isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2)
      const totalPaymentCalculated = (monthly * calculatePayments).toFixed(2)
      const totalInterestCalculated = (monthly * calculatePayments - clientAmount).toFixed(2)

      // set up results to the state to be displayed to the client
      setCalculateLoan({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        isValid: true
      })
    }
    return
  }

  const isFormValid = () => {
    const {amount, interest, years} = loanTerms;
    let errorString = '';

    if(!amount || !interest || !years) {
      errorString = "All this value are required !";
    } else if(isNaN(amount) || isNaN(interest) || isNaN(years)) {
      errorString = "All this values must be a valid number !";
    } else if (Number(amount) <= 0 || Number(interest) <= 0 || Number(years) <= 0) {
      errorString = "All this values must be a positive number !";
    }

    if (errorString) {
      setError(errorString);
      return false;
    }
    return true;
  }

  return (
      <Calculator>
        <p style={{color: 'white', fontWeight: 'bold', fontSize: '16px'}}>{error}</p>
        <Form submitFunction={calculateClientLoan}>
          <Input
            label="Amount:"
            type="text"
            identifier="amount"
            updateStateFunction={updateLoanTerms}
            />
          <Input
            label="Percent:"
            type="text"
            identifier="interest"
            updateStateFunction={updateLoanTerms}
            />

          <Input 
            label="Years:"
            type="text"
            identifier="years"
            updateStateFunction={updateLoanTerms}
            />

          <Input 
            type="submit"
            />
        </Form>

        {calculateLoan.isValid ? (
          <ResultContainer>
            <div>
              <h4>Loan Amount: </h4><p>${loanTerms.amount}</p>
              <h4>Loan Percent: </h4><p>{loanTerms.interest}%</p>
              <h4>Years To Pay: </h4><p>{loanTerms.years}</p>
            </div>
            <div>
              <h4>Monthly Payment: </h4><p>{calculateLoan.monthlyPayment}</p>
              <h4>Total Payment: </h4><p>{calculateLoan.totalPayment}</p>
              <h4>Total Percent: </h4><p>{calculateLoan.totalInterest}</p>
            </div>
          </ResultContainer>
        ) : ''}
      </Calculator>
  );
}

export default App;
