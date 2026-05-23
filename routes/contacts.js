const express = require("express");
const router = express.Router();

const {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controller/contacts");

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Get all contacts'
 * #swagger.description = 'Returns all contacts from the database'
 */
router.get("/", getAllContacts);

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Get single contact'
 * #swagger.description = 'Returns one contact using contact ID'
 * #swagger.parameters['id'] = {
 *   in: 'path',
 *   required: true,
 *   type: 'string',
 *   description: 'MongoDB Contact ID'
 * }
 * #swagger.responses[200] = {
 *   description: 'Contact retrieved successfully'
 * }
 * #swagger.responses[404] = {
 *   description: 'Contact not found'
 * }
 */
router.get("/:id", getSingleContact);

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Create contact'
 * #swagger.description = 'Creates a new contact'
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   required: true,
 *   schema: {
 *     firstName: "John",
 *     lastName: "Doe",
 *     email: "john@email.com",
 *     favoriteColor: "Blue",
 *     birthday: "1990-01-01"
 *   }
 * }
 * #swagger.responses[201] = {
 *   description: 'Contact created successfully'
 * }
 */
router.post("/", createContact);

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Update contact'
 * #swagger.description = 'Updates an existing contact'
 * #swagger.parameters['id'] = {
 *   in: 'path',
 *   required: true,
 *   type: 'string',
 *   description: 'MongoDB Contact ID'
 * }
 * #swagger.parameters['body'] = {
 *   in: 'body',
 *   required: true,
 *   schema: {
 *     firstName: "Jane",
 *     lastName: "Doe",
 *     email: "jane@email.com",
 *     favoriteColor: "Purple",
 *     birthday: "1995-05-05"
 *   }
 * }
 * #swagger.responses[200] = {
 *   description: 'Contact updated successfully'
 * }
 */
router.put("/:id", updateContact);

/**
 * #swagger.tags = ['Contacts']
 * #swagger.summary = 'Delete contact'
 * #swagger.description = 'Deletes a contact using ID'
 * #swagger.parameters['id'] = {
 *   in: 'path',
 *   required: true,
 *   type: 'string',
 *   description: 'MongoDB Contact ID'
 * }
 * #swagger.responses[200] = {
 *   description: 'Contact deleted successfully'
 * }
 */
router.delete("/:id", deleteContact);

module.exports = router;