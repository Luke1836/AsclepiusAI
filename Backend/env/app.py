from flask import Flask, request, jsonify
import numpy as np
import pickle
from flask_cors import CORS

# Loading the model
model = pickle.load(open('svm_model.pkl', 'rb'))
sc = pickle.load(open('svm_scaler.pkl', 'rb'))

app = Flask(__name__)

# Requests from the frontend
CORS(app, resources={r"/predict": {"origins": "http://localhost:3000"}}) 

@app.route("/")
def index():
    return "Hypercholesterolemia Prediction API"

@app.route("/predict", methods=['POST'])
def predict():
    try:
        data = request.json

        features = [
            float(data['Age']),
            float(data['Gender']),
            float(data['hba1c']),
            float(data['TG']),
            float(data['LDL']),
            float(data['HDL']),
            float(data['VLDL']),
            float(data['total_cholestrol']),
            float(data['BMI']),
            float(data['SBP']),
            float(data['DBP']),
            float(data['alcoholic']),
            float(data['hypertension']),
            float(data['diabetes']),
            float(data['waist']),
            float(data['family_history'])
        ]

        input_data = np.array(features).reshape(1, -1)

        scaled_input = sc.transform(input_data)

        prediction = model.predict(scaled_input)


        # Mapping prediction output to readable values
        predDict = {0: "Negative", 1: "Positive"}
        result = predDict.get(prediction[0], "Error in prediction")

        return jsonify(result=result)  # Send JSON response

    except Exception as e:
        return jsonify(result=f"Error: {str(e)}")

if __name__ == "__main__":
    app.run(debug=True)
