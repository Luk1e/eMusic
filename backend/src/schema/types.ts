import db from "../database/db.js";
import { Request, Response } from "express";
export type Models = typeof db.models;

export interface MyContext {
  req: Request;
  res: Response;
  models: Models;
}

export type MusicType = {
  id: Number;
  likes: Number;
  dislikes: Number;
  favorites: Number;
};
