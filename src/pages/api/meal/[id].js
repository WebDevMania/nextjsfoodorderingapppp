import Meal from "../../../../models/Meal";
import db from "../../../../utils/db";

export default async function handler(req, res){
    await db.connect()

    switch(req.method){
        case "GET": {
            const meal = await Meal.findById(req.query.id)
            return res.status(200).json(meal)
        }
    }
}