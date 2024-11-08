import React, { useState } from "react";

function FloatingForm({ type, item, onClose }) {
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
        parent_id: item.id,
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
    <div className="floating-form">
      <h3>{type === "createBucket" ? "Create Bucket" : type === "createFolder" ? "Create Folder" : "Upload Object"}</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={`${type === "createBucket" ? "Bucket" : "Folder"} Name`} />
      {metadata.map((meta, index) => (
        <div key={index}>
          <input type="text" placeholder="Key" value={meta.key} onChange={(e) => handleMetadataChange(index, "key", e.target.value)} />
          <input type="text" placeholder="Value" value={meta.value} onChange={(e) => handleMetadataChange(index, "value", e.target.value)} />
        </div>
      ))}
      <button onClick={addMetadataField}>+</button>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default FloatingForm;
