import { useContext, useEffect } from "react";
import { ClientContext } from "../context/ClientProvider";

const ClientTable = () => {
  const {
    allClientDetails,
    setAllClientDetails,
    setClientDetails,
    setFormButtonText,
  } = useContext(ClientContext);

  const handleDeleteClient = async (id) => {
    const client = allClientDetails.filter(
      (clientDetails) => clientDetails._id === id
    );
    const response = await fetch(
      `http://localhost:3000/api/users/deleteClients/${client[0]._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    if (result) {
      fetchClientDetails();
    }
  };

  const handleUpdateClient = (id) => {
    const client = allClientDetails.filter(
      (clientDetails) => clientDetails._id === id
    );
    setClientDetails(client[0]);
    setFormButtonText(false);
  };

  const fetchClientDetails = async () => {
    const response = await fetch("http://localhost:3000/api/users/getClients");
    const result = await response.json();
    setAllClientDetails(result);
  };

  useEffect(() => {
    fetchClientDetails();
  }, []);

  return (
    <div className="client-table-container">
      <h1>Clients</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Project</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allClientDetails?.length >= 0 &&
            allClientDetails.map((clientDetails) => (
              <tr key={clientDetails._id}>
                <td>{clientDetails.firstName}</td>
                <td>{clientDetails.lastName}</td>
                <td>{clientDetails.email}</td>
                <td>{clientDetails.mobileNumber}</td>
                <td>{clientDetails.project}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleUpdateClient(clientDetails._id)}
                  >
                    edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteClient(clientDetails._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
