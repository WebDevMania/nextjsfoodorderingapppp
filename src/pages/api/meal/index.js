import Meal from "../../../../models/Meal";
import db from "../../../../utils/db";

export default async function handler(req, res){
    await db.connect()

    switch(req.method){
        case "GET": {
            const meals = await Meal.find({}).limit(15)
            console.log(meals)
            return res.status(200).json(meals)
        }

        case "POST": {
            const meal = await Meal.create({...req.body})
            return res.status(201).json(meal)
        }
    }
}