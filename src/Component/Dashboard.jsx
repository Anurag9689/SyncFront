import React, { useState, useEffect } from "react";
import FloatingForm from "./FloatingForm"; // import custom floating form component


function Dashboard() {
    const [data, setData] = useState(null);
    const [showForm, setShowForm] = useState(null); // to track the open form type
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        // Fetch dashboard data on mount
        const token = sessionStorage.getItem("token");
        if (!token) {
            alertbox('Please login again.')
            return;
        }
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            redirect: "follow"
        };
        fetch(`http://${localStorage.getItem("serverIP")}:${localStorage.getItem("serverPort")}/dashboard`, requestOptions)
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((error) => console.error(error));
    }, []);

    const handleButtonClick = (type, item) => {
        setShowForm(type);
        setSelectedItem(item);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Dashboard</h1>

                {/* Display user information */}
                {data && (
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h2 className="text-lg font-semibold mb-2 text-blue-700">User Information</h2>
                        <p><span className="font-medium text-gray-700">User ID:</span> {data.user_id}</p>
                        <p><span className="font-medium text-gray-700">Username:</span> {data.username}</p>
                        <p><span className="font-medium text-gray-700">Email:</span> {data.email}</p>
                        <p><span className="font-medium text-gray-700">Reset Question:</span> {data.reset_question}</p>
                        <p><span className="font-medium text-gray-700">Reset Answer:</span> {data.reset_answer}</p>
                    </div>
                )}

                {/* Display the tree structure */}
                {data && <TreeStructure data={data.storage} onButtonClick={handleButtonClick} />}

                {/* Floating form for create bucket/folder/object actions */}
                {showForm && (
                    <FloatingForm
                        type={showForm}
                        item={selectedItem}
                        onClose={() => setShowForm(null)}
                    />
                )}
            </div>
        </div>

    );
}

// Recursive component to render nested tree structure
function TreeStructure({ data, onButtonClick }) {
    if (!data) return null;

    return (
        <ul>
            {Object.keys(data).map((key) => {
                const item = data[key];
                return (
                    <li key={item.id}>
                        <span>{item.folder}</span>
                        <button onClick={() => onButtonClick("createBucket", item)}>Create Bucket</button>
                        <button onClick={() => onButtonClick("createFolder", item)}>Create Folder</button>
                        <button onClick={() => onButtonClick("uploadObject", item)}>Upload Object</button>
                        {item.children && <TreeStructure data={item.children} onButtonClick={onButtonClick} />}
                    </li>
                );
            })}
        </ul>
    );
}

export default Dashboard;
