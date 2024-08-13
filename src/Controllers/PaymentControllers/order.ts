const router = require("express").Router();
import { Request, Response } from "express";

import  Razorpay from "razorpay" ;
import crypto from "crypto"

export const order= async (req:Request, res:Response) => {
	try {
		const instance = new Razorpay({
			key_id: process.env.RAZORPAY_KEY_ID??"",
			key_secret: process.env.RAZORPAY_KEY_SECRET??"",
		});

		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
};
