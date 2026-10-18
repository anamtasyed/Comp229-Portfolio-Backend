import express from "express";
import mongoose from "mongoose";
import Project from "../models/projects.model.js";

const router = express.Router();

// Get all the projects
router.route("/")
  .get(async (req, res) => {
     try {
        const projects = await Project.find();
        res.json(projects);
      } catch (err) {
        res.status(500).json({error: err.message});
      }
    })
    .post(async (req, res) => {
        try {
          const project = await Project.create(req.body);
          res.status(201).json(project);
        } catch (err) {
          res.status(400).json({ err: err.message });
        }
    })
    .delete(async (req, res) => { 
        try {
          const result = await Project.deleteMany({});
          res.json({ message: "Projects deleted", deletedCount: result.deletedCount});
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    });
    router.param("projectId", (req, res, next, id) => {
        if(!mongoose.isValidObjectId(id)) {
            return res.status(400).json({error: "Invalid project ID"});
        }
        next();
    });
    router.route("/:projectId")
       .get(async (req, res) => {
        try {
            const project = await Project.findById(req.params.projectId);
            if(!project) return res.status(404).json({error: "Project Not Found"});
            res.json(project);
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    })
    .put(async (req, res) => {
        try {
            const project = await Project.findByIdAndUpdate(
                req.params.projectId,
                req.body,
                { new: true, runValidators: true}
            );
            if (!project) return res.status(404).json({error: "Project not found"});
            res.json(project);
          } catch (err) {
            res.status(400).json({error: err.message});
          }
        })
        .delete(async (req, res) => {
            try {
                const project = await Project.findByIdAndDelete(req.params.projectId);
                if (!project) return res.status(404).json({error: "project Not Found"});
                res.json({message: "Project deleted"});
            } catch (err) {
                res.status(500).json({error: err.message});
            }
        });

export default router;
