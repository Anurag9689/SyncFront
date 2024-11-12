import React, { useState } from "react";

export function FloatingForm({ type, item, onClose }) {
  const [name, setName] = useState("");
  const [metadata, setMetadata] = useState([{ key: "", value: "" }]);

  const handleMetadataChange = (index, field, value) => {
    const newMetadata = [...metadata];
    newMetadata[index][field] = value;
    setMetadata(newMetadata);
  };

  const addMetadataField = () => {
    setMetadata([...metadata, { key: "", value: "" }]);
  };

  const deleteMetadataField = (meta) => () => {
    console.log("meta", meta);
    const newMetaData = [];
    for(let i=0; i<metadata.length; i++){
      if (meta.key!==metadata[i].key){
        newMetaData.push(metadata[i]);
      }
    }
    setMetadata(newMetaData);
  }

  const handleSubmit = () => {
    const apiEndpoints = {
      createBucket: "/create_bucket",
      createFolder: "/create_folder",
      uploadObject: "/create_object",
    };

    const endpoint = `http://${localStorage.getItem("serverIP")}:${localStorage.getItem("serverPort")}${apiEndpoints[type]}`;
    const token = sessionStorage.getItem("jwt_token");

    let body;
    if (type === "uploadObject") {
      const formData = new FormData();
      formData.append("object", /* file input here */);
      formData.append("metadata", JSON.stringify(metadata.reduce((obj, { key, value }) => ({ ...obj, [key]: value }), {})));
      formData.append("parent_id", item.id);
      body = formData;
    } else {
      body = JSON.stringify({
        [`${type === "createBucket" ? "bucket_name" : "folder_name"}`]: name,
        metadata: metadata.reduce((obj, { key, value }) => ({ ...obj, [key]: value }), {}),
        parent_id: item?.id,
      });
    }

    fetch(endpoint, {
      method: "POST",
      headers: type === "uploadObject" ? { Authorization: `Bearer ${token}` } : {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: body,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        onClose();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="floating-form bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        {type === "createBucket" ? "Create Bucket" : type === "createFolder" ? "Create Folder" : "Upload Object"}
      </h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={`${type === "createBucket" ? "Bucket" : "Folder"} Name`}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {metadata.map((meta, index) => (
        <div key={index} className="flex space-x-2 mb-3">
          <input
            type="text"
            placeholder="Key"
            value={meta.key}
            onChange={(e) => handleMetadataChange(index, "key", e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Value"
            value={meta.value}
            onChange={(e) => handleMetadataChange(index, "value", e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            onClick={deleteMetadataField(meta)} 
            className="bg-red-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"> X </button>
        </div>
      ))}

      <div className="flex space-x-4 mt-4">
        <button
          onClick={addMetadataField}
          className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          +
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>

  );
}
