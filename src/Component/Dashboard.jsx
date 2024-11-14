import React, { useState, useEffect } from "react";
import { FloatingForm } from "./FloatingForm"; // import custom floating form component
import Header from './Header.jsx';
import ParticleBox from './ParticleBox.jsx';
import { CustomAlert, alertbox } from './CustomAlert.jsx';


function Dashboard() {
    const [data, setData] = useState(null);
    const [showForm, setShowForm] = useState(null); // to track the open form type
    const [showBucketForm, setBucketForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const token = sessionStorage.getItem("token");
    useEffect(() => {
        // Fetch dashboard data on mount
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
            .then((result) => {
                console.log(result);
                setData(result);
            })
            .catch((error) => {
                console.error(error);
                alertbox(error);
            });
    }, []);

    const handleButtonClick = async (type, item) => {
        if (type==="delete"){
            try {
                const response = await fetch(`http://${localStorage.getItem("serverIP")}:${localStorage.getItem("serverPort")}/delete?object_id=${item.id}`, 
                {
                    method: "DELETE",
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                if (response.status >= 200 && response.status < 400){
                    window.location.reload();
                } else {
                    console.error(error);
                    alertbox("Deletion failed: " + error);
                }
            } catch (error){
                console.error(error);
                alertbox("Deletion failed: " + error);
            }
        } else {
            setShowForm(type);
            setSelectedItem(item);
        }
    };

    return (
        <div className="w-full min-h-screen overflow-hidden flex flex-col">
            <Header />
            <ParticleBox />
            <CustomAlert />
            <div className="w-full flex flex-col flex-grow place-content-center">
                <div className="w-5/6 bg-white justify-self-center self-center shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Dashboard</h1>

                    {/* Display user information */}
                    {data && (
                        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h2 className="text-2xl font-semibold mb-2 text-blue-700">User Information</h2>
                            <p><span className="font-medium text-gray-700">User ID:</span> {data.user_id}</p>
                            <p><span className="font-medium text-gray-700">Username:</span> {data.username}</p>
                            <p><span className="font-medium text-gray-700">Email:</span> {data.email}</p>
                            <p><span className="font-medium text-gray-700">Reset Question:</span> {data.reset_question}</p>
                            <p><span className="font-medium text-gray-700">Reset Answer:</span> {data.reset_answer}</p>
                        </div>
                    )}

                    {/* Storage */}
                    <h2 className="text-2xl mb-4">Local Storage Service</h2>
                    <button className="bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                        onClick={()=>setBucketForm(!showBucketForm)}>
                            {showBucketForm ? "Close" : "Create"} Bucket
                    </button>
                    {showBucketForm && <FloatingForm type="createBucket" item={null} onClose={() => setBucketForm(!showBucketForm)} />}

                    {/* Display the tree structure */}
                    {data?.storage && <TreeStructure data={data.storage} onButtonClick={handleButtonClick} />}

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
        </div>
    );
}

// Recursive component to render nested tree structure
function TreeStructure({ data, onButtonClick, nestCount = 0 }) {
    if (!data) return null;

    return (
        <ul>
            {Object.keys(data).map((key) => {
                const item = data[key];
                return (
                    <li key={item.id} className="flex flex-col space-y-2 ml-4">
                        <div className="flex items-center gap-4" style={{ marginLeft: `${nestCount * 20}px` }}>
                            <span
                                className={`flex-grow ${
                                    item.is_bucket ? "bg-neutral-400" : `${item.local_obj_path ? "bg-neutral-100": "bg-neutral-300"}`
                                } content-center rounded-lg pl-1 py-2`}
                            >
                                {item.folder}
                            </span>
                            <button
                                className="bg-green-600 text-white font-medium py-1 px-2 rounded-lg hover:bg-green-700 transition duration-300"
                                onClick={() => onButtonClick("createFolder", item)}
                            >
                                Create Folder
                            </button>
                            <button
                                className="bg-green-600 text-white font-medium py-1 px-2 rounded-lg hover:bg-green-700 transition duration-300"
                                onClick={() => onButtonClick("uploadObject", item)}
                            >
                                Upload Object
                            </button>
                            <button
                                className="bg-red-600 text-white font-medium py-1 px-2 rounded-lg hover:bg-red-700 transition duration-300"
                                onClick={() => onButtonClick("delete", item)}
                            >
                                Delete
                            </button>
                        </div>
                        {item.children && item.children.length > 0 && (
                            <TreeStructure data={item.children.reduce((acc, child) => ({ ...acc, [child.folder]: child }), {})} onButtonClick={onButtonClick} nestCount={nestCount + 1} />
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

export default Dashboard;
