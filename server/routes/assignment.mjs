import { Router } from "express";
import connectionPool from "../utils/db.mjs";
import { validateCreatePostData } from "../middleware/assignment.validation.mjs";

const assignmentRouter = Router()

assignmentRouter.post("/",[validateCreatePostData], async(req, res) => {
    const newAssignment = {
        ...req.body,
        created_at: new Date(),
        updated_at: new Date(),
        published_at: new Date(),
      };
    console.log(newAssignment)

    try {
        await connectionPool.query(
          `insert into assignments (user_id, title, content, category, email, created_at, updated_at, published_at) 
            values ($1, $2, $3, $4 ,$5, $6, $7, $8)
            RETURNING *`,
          [
            1,
            newAssignment.title,
            newAssignment.content,
            newAssignment.category,
            newAssignment.email,
            newAssignment.created_at,
            newAssignment.updated_at,
            newAssignment.published_at,
          ]
        );
      } catch (error){
        console.error("Database error:", error)
        return res.status(500).json({
          message: "Server could not create assignment because database issue",
        });
      }
    
      return res.status(201).json({
        message: "Create assignment successfully",
      });
    })

export default assignmentRouter