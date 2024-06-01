const express = require("express");
const app = express();
const MindsDB = require("mindsdb-js-sdk").default;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

async function connectToMindsDB() {
  try {
    await MindsDB.connect({
      host: "http://localhost:47334",
    });
    console.log("Successfully connected to MindsDB!");
  } catch (error) {
    console.error("Failed to connect to local instance:", error);
  }
}

connectToMindsDB();

// Predict the CA food value start
app.post("/predict", async (req, res) => {
  try {
    const foodModel = await MindsDB.Models.getModel("food_model", "mindsdb");

    // const { Brand, Category, Color, Size, Material } = req.body;
    const { Food, Serving } = req.body;
    if (!Food) {
      return res.status(400).json({message: "Type of food must be provided."});
    }

    const queryOptions = {
      select: ["Calories"],
      where: [
        // `Brand='${Brand}'`,
        // `Category='${Category}'`,
        // `Color='${Color}'`,
        // `Size='${Size}'`,
        // `Material='${Material}'`,

        `Food='${Food}'`,
        `Serving='${Serving}'`,
      ],
    };

    const prediction = await foodModel.query(queryOptions);

    // console.log(prediction);
    // Accessing the predicted value, adjust if necessary based on actual response structure
    const foodCalories = prediction.data.calories;

    res.status(200).json({ foodCalories });
  } catch (error) {
    console.error("Failed to make food price prediction:", error);
    res.status(500).json({message: "Failed to make food price prediction."});
  }
});


app.listen(5000, () => {
  console.log("Server started on port 5000");
});
