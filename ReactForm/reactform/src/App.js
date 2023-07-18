import React, { useState } from 'react';

const data = [
  { label: "label1", initialValue: "dummy" },
  { label: "label2", initialValue: "dummy2" },
  { label: "First Name", initialValue: "Aayush" },
  { label: "Last Name", initialValue: "Gupta" }
];

const App = () => {
  const [formValues, setFormValues] = useState(data);

  const handleclick = (id) => {
    setFormValues((prevValues) => {
      return prevValues.map((value) => {
        if (value.label === id) {
          return { ...value, hidden: false };
        }
        return value;
      });
    });
  };

  const onSave = (label, value) => {
    setFormValues((prevValues) => {
      return prevValues.map((data) => {
        if (data.label === label) {
          return { ...data, initialValue: value, hidden: true };
        }
        return data;
      });
    });
  };

  const renderForm = () => {
    return formValues.map((data) => (
      <div key={data.label}>
        <label htmlFor={`label-${data.label}`}>{data.label}:</label>
        {data.hidden ? (
          <p onClick={() => handleclick(data.label)} id={`p-${data.label}`}>
            {data.initialValue}
          </p>
        ) : (
          <div>
            <input
              type="text"
              id={`t-${data.label}`}
              name={`t-${data.label}`}
              defaultValue={data.initialValue}
            />
            <button
              type="button"
              onClick={() =>
                onSave(
                  data.label,
                  document.getElementById(`t-${data.label}`).value
                )
              }
            >
              OK
            </button>
          </div>
        )}
        <br />
      </div>
    ));
  };

  return (
    <div>
      {renderForm()}
    </div>
  );
};

export default App;
