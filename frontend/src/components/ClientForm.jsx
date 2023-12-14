import { useContext, useRef, useState } from "react";
import { ClientContext } from "../context/ClientProvider";

const ClientForm = () => {
  const {
    allClientDetails,
    setAllClientDetails,
    clientDetails,
    setClientDetails,
    formButtonText,
    firstNameRef,
    setFormButtonText,
  } = useContext(ClientContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientDetails((c) => ({ ...c, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formButtonText) {
      const response = await fetch(
        "http://localhost:3000/api/users/addClients",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clientDetails),
        }
      );
      const result = await response.json();
      setAllClientDetails((prev) => [...prev, result]);
    } else {
      const response = await fetch(
        `http://localhost:3000/api/users/updateClients/${clientDetails._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(clientDetails),
        }
      );
      const result = await response.json();

      const newState = allClientDetails.map((client) => {
        if (client._id === clientDetails._id) {
          return { ...client, ...clientDetails };
        }
        return client;
      });
      setAllClientDetails(newState);
      setFormButtonText(true);
    }
    setClientDetails({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      project: "",
    });
  };

  return (
    <div className="client-form-container">
      <h1>Create Client</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Name:</label>
          <br />
          <input
            disabled={false}
            ref={firstNameRef}
            type="text"
            name="firstName"
            id="firstName"
            value={clientDetails.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={clientDetails.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={clientDetails.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <br />
          <input
            type="text"
            name="mobileNumber"
            id="mobileNumber"
            value={clientDetails.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="project">Project:</label>
          <br />
          <input
            type="text"
            name="project"
            id="project"
            value={clientDetails.project}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          {formButtonText ? "Create Client" : "Update Client"}
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
