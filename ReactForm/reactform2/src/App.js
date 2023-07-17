import React from 'react';
import GenerateStr from './generateStr.js';
import './App.css'
import Header from './Header.js';

const App = () => {

  const data = [
    { label: "Name", initialValue: "Aayush" },
    { label: "Age", initialValue: "20" },
    { label: "College", initialValue: "MIT" },
  ];


  const handleSave = (id, value) => {
    console.log("The component is \"" + id + "\" and value is \"" + value + "\"")

  };


  return (


    <div className='container'>


      <div className='app-wrapper'>
        <div className='header'>
          <Header />
        </div>
        <div className='ele'>
          {data.map((item, index) => (
            <GenerateStr key={index}

              label={item.label}
              initialValue={item.initialValue}
              onSave={(value) => handleSave("Name", value)}
            />

          ))}

        </div>
      </div>
    </div>
  );
};

export default App;
