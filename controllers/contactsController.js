const asyncHandler = require("express-async-handler");
const Contact = require("../model/contact_model");
//controller folder holds all the logic of api and connect with DB

//get all contacts
//routes for GET/api/contacts
//access to public 
const getContacts = asyncHandler(async(req,res) =>{
  const contacts = await Contact.find();
    res.status(200).json({
      contacts: contacts,
      message: "List of contacts",
      });
});

//create  contacts
//routes for POST/api/contacts
//access to public 
const createContact = asyncHandler(async(req,res) =>{
  console.log("This is the request body :" ,req.body);
  const {name, gender, age, dob,  phoneno, email} = req.body;
  if(!name || !email || !gender || !age || !dob || !phoneno){
res.status (400);
throw new Error ("All Fields are mandantory!!")
  }
  const contacts = await Contact.create({
    name, gender, age, dob,  phoneno, email
  })
  console.log("Hey")
    res.status(201).json({
     
      message: "Adding the contacts",
    });
});

//delete  contacts
//routes for POST/api/contacts
//access to public 
const deleteContact =asyncHandler(async(req,res) =>{
    res.status(200).json({
        message: `Delete contacts for ${req.params.id}`,
      });
});


//get contacts by id
//routes for POST/api/contacts
//access to public 
const getContact = asyncHandler(async(req,res) =>{
    res.status(200).json({
        message: `Get contact for ${req.params.id}`,
      });
});

//get contacts by id
//routes for POST/api/contacts
//access to public 
const updateContact = asyncHandler(async (req,res) =>{
    res.status(200).json({
        message: `Update contact  for ${req.params.id}`,
      });
});

module.exports = {getContacts,createContact,deleteContact,getContact,updateContact}


