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
                <div className="w-5/6 text-white justify-self-center self-center shadow-lg rounded-lg p-6 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
                    <h1 className="text-2xl font-bold mb-4 text-center">Dashboard</h1>

                    {/* Display user information */}
                    {data && (
                        <div className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">User Information</h2>
                            <div className="space-y-3">
                                <p className="flex items-center">
                                    <span className="font-medium text-gray-700 w-36">User ID:</span>
                                    <span className="text-gray-800">{data.user_id}</span>
                                </p>
                                <p className="flex items-center">
                                    <span className="font-medium text-gray-700 w-36">Username:</span>
                                    <span className="text-gray-800">{data.username}</span>
                                </p>
                                <p className="flex items-center">
                                    <span className="font-medium text-gray-700 w-36">Email:</span>
                                    <span className="text-gray-800">{data.email}</span>
                                </p>
                                <p className="flex items-center">
                                    <span className="font-medium text-gray-700 w-36">Reset Question:</span>
                                    <span className="text-gray-800">{data.reset_question}</span>
                                </p>
                                <p className="flex items-center">
                                    <span className="font-medium text-gray-700 w-36">Reset Answer:</span>
                                    <span className="text-gray-800">{data.reset_answer}</span>
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Storage */}
                    <h2 className="text-2xl mb-4">Local Storage Service</h2>
                    <div className="flex flex-row justify-start">
                        <button className="bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                            onClick={()=>setBucketForm(!showBucketForm)}>
                                {showBucketForm ? "Close" : "Create"} Bucket
                        </button>
                        <button className="mx-5 invert self-center justify-self-center transition-transform hover:scale-150 hover:shadow-xl" onClick={()=>window.location.reload()}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg></button>
                    </div>
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
                    <li key={item.id} className="flex flex-col space-y-2 text-black">
                        <div className="flex items-center gap-4" style={{ marginLeft: `${nestCount * 20}px` }}>
                            <span
                                className={`flex-grow ${
                                    item.is_bucket ? "bg-gradient-to-r from-indigo-100 from-15% via-sky-500 via-65% to-emerald-500 to-90%" : `${item.local_obj_path ? "bg-gradient-to-r from-teal-100 from-15% via-sky-500 via-65% to-emerald-500 to-90% transition-transform hover:scale-105 hover:shadow-xl": "bg-gradient-to-r from-pink-100 from-15% via-sky-500 via-65% to-emerald-500 to-90%"}`
                                } content-center rounded-lg pl-1 py-2`}
                            >
                                { item.local_obj_link ? <a href={item.local_obj_link} target="_blank"> {item.folder} </a> : item.folder}
                            </span>

                            {   (item.syncd && item.local_obj_path && item.children.length === 0) ? 
                                <>
                                    <a className="transition-transform hover:scale-150 hover:shadow-xl" href={item.s3_obj_link} target="_black">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00FFAA"><path d="M160-160v-80h109q-51-44-80-106t-29-134q0-112 68-197.5T400-790v84q-70 25-115 86.5T240-480q0 54 21.5 99.5T320-302v-98h80v240H160Zm440 0q-50 0-85-35t-35-85q0-48 33-82.5t81-36.5q17-36 50.5-58.5T720-480q53 0 91.5 34.5T858-360q42 0 72 29t30 70q0 42-29 71.5T860-160H600Zm116-360q-7-41-27-76t-49-62v98h-80v-240h240v80H691q43 38 70.5 89T797-520h-81ZM600-240h260q8 0 14-6t6-14q0-8-6-14t-14-6h-70v-50q0-29-20.5-49.5T720-400q-29 0-49.5 20.5T650-330v10h-50q-17 0-28.5 11.5T560-280q0 17 11.5 28.5T600-240Zm120-80Z"/></svg>
                                    </a>
                                </> : item.syncd ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00FFAA"><path d="M160-160v-80h109q-51-44-80-106t-29-134q0-112 68-197.5T400-790v84q-70 25-115 86.5T240-480q0 54 21.5 99.5T320-302v-98h80v240H160Zm440 0q-50 0-85-35t-35-85q0-48 33-82.5t81-36.5q17-36 50.5-58.5T720-480q53 0 91.5 34.5T858-360q42 0 72 29t30 70q0 42-29 71.5T860-160H600Zm116-360q-7-41-27-76t-49-62v98h-80v-240h240v80H691q43 38 70.5 89T797-520h-81ZM600-240h260q8 0 14-6t6-14q0-8-6-14t-14-6h-70v-50q0-29-20.5-49.5T720-400q-29 0-49.5 20.5T650-330v10h-50q-17 0-28.5 11.5T560-280q0 17 11.5 28.5T600-240Zm120-80Z"/></svg> : ""
                            }
                            

                            { 
                                item.local_obj_link ? "" : <>
                                    <button
                                        className="bg-green-600 text-white font-medium py-1 px-2 rounded-lg hover:bg-green-700 transition duration-300"
                                        onClick={() => onButtonClick("createFolder", item)}> Create Folder </button> 
                                    <button
                                        className="bg-green-600 text-white font-medium py-1 px-2 rounded-lg hover:bg-green-700 transition duration-300"
                                        onClick={() => onButtonClick("uploadObject", item)}> Upload Object </button>
                                </>
                            }

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
