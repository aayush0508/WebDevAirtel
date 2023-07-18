import React, { useState } from "react";

function App() {
    const [labels, setLabels] = useState([]);

    const handleButtonClick = (id) => {
        setLabels((prevLabels) =>
            prevLabels.map((label) => {
                if (label.id === id) {
                    return { ...label, isEditing: !label.isEditing };
                }
                return label;
            })
        );
    };

    const handleSaveClick = (id, newValue) => {
        setLabels((prevLabels) =>
            prevLabels.map((label) => {
                if (label.id === id) {
                    return { ...label, value: newValue, isEditing: false };
                }
                return label;
            })
        );
    };

    const renderLabels = () => {
        return labels.map((label) => (
            <div key={label.id}>
                <p onClick={() => handleButtonClick(label.id)}>
                    {label.isEditing ? (
                        <input
                            type="text"
                            value={label.value}
                            onChange={(e) =>
                                handleSaveClick(label.id, e.target.value)
                            }
                        />
                    ) : (
                        label.value
                    )}
                </p>
                <button onClick={() => handleButtonClick(label.id)}>
                    {label.isEditing ? "Save" : "Edit"}
                </button>
            </div>
        ));
    };

    const addLabel = (label, initialValue) => {
        const newLabel = {
            id: labels.length + 1,
            value: initialValue,
            isEditing: false,
        };
        setLabels((prevLabels) => [...prevLabels, newLabel]);
    };

    // Render initial labels
    React.useEffect(() => {
        addLabel("name", "hunny");
        addLabel("Age", "20");
    }, []);

    return (
        <div>
            {renderLabels()}
        </div>
    );
}

export default App;
