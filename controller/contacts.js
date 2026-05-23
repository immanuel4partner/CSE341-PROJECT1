const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

// GET ALL CONTACTS
const getAllContacts = async (req, res) => {
  try {
    const db = getDB();

    const contacts = await db.collection("contacts").find().toArray();

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET SINGLE CONTACT
const getSingleContact = async (req, res) => {
  try {
    const db = getDB();
    const contactId = req.params.id;

    // VALIDATE OBJECT ID
    if (!ObjectId.isValid(contactId)) {
      return res.status(400).json({
        message: "Invalid contact ID",
      });
    }

    const contact = await db.collection("contacts").findOne({
      _id: new ObjectId(contactId),
    });

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE NEW CONTACT
const createContact = async (req, res) => {
  try {
    const db = getDB();

    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    // CHECK REQUIRED FIELDS
    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newContact = {
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    };

    const result = await db.collection("contacts").insertOne(newContact);

    // RETURN NEW CONTACT ID
    res.status(201).json({
      message: "Contact created successfully",
      id: result.insertedId,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE CONTACT
const updateContact = async (req, res) => {
  try {
    const db = getDB();
    const contactId = req.params.id;

    // VALIDATE OBJECT ID
    if (!ObjectId.isValid(contactId)) {
      return res.status(400).json({
        message: "Invalid contact ID",
      });
    }

    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    // CHECK REQUIRED FIELDS
    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const updatedContact = {
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    };

    const result = await db
      .collection("contacts")
      .updateOne(
        { _id: new ObjectId(contactId) },
        { $set: updatedContact }
      );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    // SUCCESS STATUS CODE
    res.status(200).json({
    message: "Contact updated successfully",
    });
    } catch (error) {
    res.status(500).json({
      message: error.message,
    });
    }
};

// DELETE CONTACT
const deleteContact = async (req, res) => {
  try {
    const db = getDB();
    const contactId = req.params.id;

    // VALIDATE OBJECT ID
    if (!ObjectId.isValid(contactId)) {
      return res.status(400).json({
        message: "Invalid contact ID",
      });
    }

    const result = await db.collection("contacts").deleteOne({
      _id: new ObjectId(contactId),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    // SUCCESS STATUS CODE
    res.status(200).json({
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllContacts,
  getSingleContact,
 createContact,
  updateContact,
  deleteContact,
};