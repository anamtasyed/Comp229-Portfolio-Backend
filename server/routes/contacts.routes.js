import express from "express";
import mongoose from "mongoose";
import Contact from "../models/contact.model.js";

const router = express.Router();

router.route("/")
  .get(async (req, res) => {
     try {
        const contacts = await Contact.find();
        res.json(contacts);
      } catch (err) {
        res.status(500).json({error: err.message});
      }
    })
  .post(async (req, res) => {
    try {
      const contact = await Contact.create(req.body);
      res.status(201).json(contact);
    } catch (err) { 
      res.status(400).json({ err: err.message });
     }
    })

  .delete(async (req, res) => {
    try {
      const result = await Contact.deleteMany({});
      res.json({
        message: "Contact deleted", 
        deletedCount: result.deletedCount
      });
    } catch (err) {
        res.status(500).json({error: err.message}); 
    }
  });
  router.param("contactId", (req, res, next, id) => {
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({error: "Invalid contact ID"});
    }
    next();
  });
  router.route("/:contactId")
    .get(async (req, res ) => {
        try {
          const contact = await Contact.findById(req.params.contactId);
          if(!contact) return res.status(404).json({error: "Contact not found"});
          res.json(contact);
        } catch (err) {
          res.status(500).json({error: err.message});
        }
    })
    .put(async (req, res ) => {
        try {
          const contact = await Contact.findByIdAndUpdate(
          req.params.contactId,
          req.body,
          { new: true, runValidators: true}
        );
          if(!contact) return res.status(404).json({error: "Contact not found"});
          res.json(contact);
        } catch (err) {
          res.status(500).json({error: err.message});
        }
    })
    .delete (async (req, res) => {
        try {
          const contact = await Contact.findByIdAndDelete(req.params.contactId);
          if (!contact) return res.status(404).json({error: "Contact not found"});
          res.json({error: "Contact deleted"});
        } catch (err) {
          res.status(500).json({error: err.message});
        }
    });
console.log("CONTACT ROUTE FILE LOADED");
export default router;
