import Client from "../model/clientModel.js";

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();

    if (clients) {
      res.status(200).json(clients);
    } else {
      res.status(404).json({ message: "No clients found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const addClients = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, project } = req.body;

    const user = await Client.create({
      firstName,
      lastName,
      email,
      mobileNumber,
      project,
    });

    if (user) {
      res
        .status(201)
        .json({ firstName, lastName, email, mobileNumber, project });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateClients = async (req, res) => {
  try {
    const client = await Client.findOne({ _id: req.params.clientId });

    client.firstName = req.body.firstName || client.firstName;
    client.lastName = req.body.lastName || client.lastName;
    client.mobileNumber = req.body.mobileNumber || client.mobileNumber;
    client.email = req.body.email || client.email;
    client.project = req.body.project || client.project;

    const updatedClient = await client.save();

    if (updatedClient) {
      res.status(200).json(updatedClient);
    } else {
      res.status(404).json({ message: "Client Could not be updated" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const deleteClients = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.clientId);

    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).json({ message: "No such client" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
