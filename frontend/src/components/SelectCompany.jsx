import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar component
import englishData from '../constants/english.json';
import spanishData from '../constants/spanish.json';
import hindiData from '../constants/hindi.json';
import { Link, useNavigate } from 'react-router-dom';

const SelectCompany = () => {
  const navigate = useNavigate();

  const financialCompanies = [
    'Fidelity',
    'JPMorgan Chase',
    'Bank of America',
    'Wells Fargo',
    'Capital One',
  ];

  // set different languages
  const languages = {
    english: englishData,
    spanish: spanishData,
    hindi: hindiData,
  };

  const [currentLanguage, setCurrentLanguage] = useState('english');

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  const [companies, setCompanies] = useState([
    { id: 1, checked: false, name: 'About', val: "about"},
    { id: 2, checked: false, name: 'Checking account', val: "checking" },
    { id: 3, checked: false, name: 'Savings account', val: "savings" },
    { id: 4, checked: false, name: 'Brokerage', val: "brokerage" },
    { id: 5, checked: false, name: 'Online commissions', val: "onlineCommissions" },
    { id: 6, checked: false, name: 'Margin rates', val: "marginRates" },
    { id: 7, checked: false, name: 'Fee information', val: "feeInfo" },
    // Add more companies as needed
  ]);

  const [selectedFinancialCompany, setSelectedFinancialCompany] = useState('');

  const toggleCompanySelection = (id) => {
    const updatedCompanies = companies.map((company) =>
      company.id === id ? { ...company, checked: !company.checked } : company
    );
    setCompanies(updatedCompanies);
  };

  const handleFinancialCompanyChange = (event) => {
    setSelectedFinancialCompany(event.target.value);
  };

  const startChatting = () => {
    // Create an array of selected company values
    const selectedCompanyValues = companies
      .filter((company) => company.checked)
      .map((company) => company.val);

    // Pass the selectedCompanyValues and selectedFinancialCompany to the Chat component using the Link component
    navigate('/chatBot', {
      state: {
        "company": selectedFinancialCompany,
        "categories": selectedCompanyValues
      },
    });
  };

  return (
    <div>
      <Navbar
        changeLanguage={changeLanguage}
        language={languages[currentLanguage].lan}
        nav1={languages[currentLanguage].nav1}
        nav2={languages[currentLanguage].nav2}
        nav3={languages[currentLanguage].nav3}
        nav4={languages[currentLanguage].nav4}
      />{' '}
      {/* Render the Navbar component here */}
      <div className="bg-primary-600 min-h-screen p-20">
        <div className="container mx-auto">
          <div className="mt-6">
            <label
              htmlFor="financial-company-select"
              className="block mb-2 text-sm font-medium text-gray-900"
            ></label>
            <select
              id="financial-company-select"
              value={selectedFinancialCompany}
              onChange={handleFinancialCompanyChange}
              className="block w-1/7 p-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 font-rubik"
            >
              <option value="" disabled>
                Let's select a Financial Company
              </option>
              {financialCompanies.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>
          <h2 className="text-black text-4xl font-rubik mt-12 mb-4">
            Feel free to tell us what you're interested in or curious about.
          </h2>
          <div className="bg-white p-5 rounded-md">
            <ul>
              {companies.map((company) => (
                <li key={company.id} className="mb-2 flex items-center">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={company.checked}
                      onChange={() => toggleCompanySelection(company.id)}
                      className="form-checkbox h-6 w-6 text-primary-500" // Increase the checkbox size
                    />
                    <span className="ml-2 font-slabo" style={{ fontSize: '32px' }}>
                      {company.name}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
           
          </div>
          {/* Start Chatting Button */}
          <button
            onClick={startChatting}
            className="bg-blue-500 text-white rounded-full py-4 px-7 hover-bg-blue-600 transition duration-300 font-rubik w-52"
          >
            Start Chatting
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectCompany;