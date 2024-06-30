const asyncHandler = require("express-async-handler")

//@desc Get All contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get All Contacts" });
});

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log(`The request Body :`, req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are Mandatory");
  }
  res.status(201).json({ message: "Create Contact" });
});

//@desc Get A contact by ID
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});

//@desc Update A contact by ID
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete A contact by ID
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
