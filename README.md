# Calorie Meter: A Calorie Predictor App Powered By MindsDB

Calorie Meter is an user frienfly website that accurately predictis Your Calories with MindsDB and Custom Data Insights!

## Screenshots

# Home Page

![Screenshot (47)](https://github.com/Sohini3018/calorie-meter-mindsdb/assets/113935740/65fd0e3e-6749-4652-81e4-b853e24fda0a)

# User Input Section

![Screenshot (46)](https://github.com/Sohini3018/calorie-meter-mindsdb/assets/113935740/f203493b-5467-49c3-8053-c00915af067e)

### Key Features:

- **Accurate Calorie Predictions:** Uses advanced machine learning models from MindsDB to predict calorie counts with high accuracy.
- **Custom Data Integration:** Upload your own dataset to personalize the calorie prediction model to fit your specific needs.
- **User-Friendly Interface:** Simple and intuitive UI to input data and get immediate calorie predictions.
- **Real-Time Predictions:** Get instant predictions as soon as you input your data, powered by the fast and efficient MindsDB engine.
- **Detailed Insights:** Provides comprehensive insights and analysis based on the predictions to help you make informed dietary choices.
- **Open Source:** Fully open source, allowing you to customize and extend the app as per your requirements.

### Getting Started

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Sohini3018/calorie-meter-mindsdb.git
    cd calorie-meter
    ```

2. **Install Dependencies:**
    ```bash
      npm install
    ```
3. **Install the latest version of MindsDB Docker Image and Docker Engine must installed on your local machine.**
   
4. **Download the dataset from kaggle:**
    ```bash
      https://www.kaggle.com/datasets/vaishnavivenkatesan/food-and-their-calories
    ```

5. **Run this command to start MindsDB in Docker:**
    ```bash
    docker run -p 47334:47334 -p 47335:47335 mindsdb/mindsdb
    ```
6. Go to http://localhost:47334 & select the option to upload the data through files (.csv).
7. Import the dataset & give food_table as the name of the table in the datasource name field.
8. After you press save , it will import data to files database and it had created home_table in the files.
9. Once table is created , you have to create & train the model with the data.

### Powered by MindsDB

This app utilizes MindsDB to seamlessly integrate machine learning capabilities. MindsDB allows us to train and deploy predictive models efficiently, ensuring accurate and real-time predictions.

For more information on MindsDB, visit [MindsDB Documentation](https://docs.mindsdb.com/what-is-mindsdb).

### Contributions

We welcome contributions from the community. Please feel free to submit a pull request or open an issue if you have any suggestions or enhancements.

---

**Enjoy using Calorie Meter to make smarter dietary choices with the power of MindsDB!**

## Challenges Faced

### 1. Responsive Design
Implementing a responsive design was challenging to ensure consistent and user-friendly behavior across devices. Media queries and flexbox were used to tackle this challenge.

### 2. Input Handling
Managing dynamic input options and updating the user's selections in real-time required careful handling of state management to avoid errors and ensure a smooth user experience.

### 3. Styling Consistency
Maintaining a consistent design throughout the website was challenging, especially when combining different CSS features and libraries.


## Usage

1. Visit the Gifty Website:
Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).
2. You will see a start button on the homepage. Click on the start button.
8. Mention the Food and Servings.
9. Click the "Calculate Calories" button to generate the estimation.
10. View the output box to see the predicted calorie count.

## Future Enhancements

- **User Accounts**: Implement user accounts to save preferences and gift ideas.
- **Extended Input Options**: Provide more input options to refine prediction.
- **Improved Accuracy**: Will work on the improvement of the model used.


For any inquiries or feedback, contact me at [sohinismail@gmail.com](mailto:sohinismail@gmail.com).
