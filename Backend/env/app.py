from flask import Flask, request, jsonify
import numpy as np
import pickle
from flask_cors import CORS

# Load model and scaler
model = pickle.load(open('knn_model.pkl', 'rb'))
sc = pickle.load(open('scaler.pkl', 'rb'))

app = Flask(__name__)
CORS(app, resources={r"/predict": {"origins": "http://localhost:3000"}})  # Allows requests from frontend (Next.js)

@app.route("/")
def index():
    return "Hypercholesterolemia Prediction API"

@app.route("/predict", methods=['POST'])
def predict():
    try:
        data = request.json  # Receiving JSON data from frontend

        # Extract relevant features from the incoming data
        features = [
            float(data['hba1c']),
            float(data['TG']),
            float(data['LDL']),
            float(data['BMI']),
            float(data['SBP']),
            float(data['DBP']),
            float(data['hypertension']),
            float(data['diabetes']),
            float(data['waist']),
            float(data['family_history'])
        ]

        # Convert input to a NumPy array and reshape for prediction
        input_data = np.array(features).reshape(1, -1)

        # Apply scaling
        scaled_input = sc.transform(input_data)

        # Make prediction
        prediction = model.predict(scaled_input)

        # Mapping prediction output to readable values
        predDict = {0: "Negative", 1: "Positive"}
        result = predDict.get(prediction[0], "Error in prediction")

        return jsonify(result=result)  # Send JSON response

    except Exception as e:
        return jsonify(result=f"Error: {str(e)}")

if __name__ == "__main__":
    app.run(debug=True)
