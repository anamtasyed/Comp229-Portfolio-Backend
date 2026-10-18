import express from "express";
import mongoose from "mongoose";
import Education from "../models/education.model.js";

const router = express.Router();

router.route("/")
  .get(async (req, res) => {
    try {
      const education = await Education.find();
      res.json(education);
    } catch (err) {
      res.status(500).json({error: err.message}); 
    }
  })
  .post(async (req, res) => {
    try {
      const education = await Education.create(req.body);
      res.status(201).json(education);
    } catch (err) {
      res.status(400).json({error: err.message});
    }
  })
  .delete(async (req, res) => {
    try {
      const result = await Education.deleteMany({});
      res.json({
        message: "All education record deleted",
        deletedCount: result.deletedCount
      });
    } catch (err) {
      res.status(400).json({error: err.message});
    }
  });
  router.route("/:id")
    .get(async (req, res) => {
        try {
          console.log("Searching education ID:" , req.params.id);
          const education = await Education.findById(req.params.id);
          if(!education) return res.status(404).json({error: "Project Not Found"});
          res.json(education);
        } catch (err) {
          res.status(500).json({error: err.message});
        }
      })
   .put(async (req, res) => {
      try {
        const education = await Education.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true, runValidators: true }
        );
        if (!education) {
          return res.status(404).json({error: "Education Not Found"}); 
        }
        res.json(education);
      } catch (err) {
        res.status(400).json({ error: err.message});
      }
    })
    .delete (async (req, res) => {
      try {
        const education = await Education.findByIdAndDelete(req.params.id);
        if (!education) {
          return res.status(404).json({error: "Education Not Found"}); 
        }
        res.json({message: "Education Not Found"});
      } catch (err) { 
        res.status(500).json({ error: err.message});
      }
    });

export default router;