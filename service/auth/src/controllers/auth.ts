import { Request, Response } from 'express';

export const registetUser = async(req:Request, res:Response) =>{
  try{

  }catch(error){
    res.status(500).json({ 
      message: 'Server error'
    });
  }
}