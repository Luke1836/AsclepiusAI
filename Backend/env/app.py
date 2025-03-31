from flask import Flask, request, render_template
import numpy as np
import pickle

# Load the trained model and scaler
model = pickle.load(open('svm_model.pkl', 'rb'))
sc = pickle.load(open('scaler.pkl', 'rb'))

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/predict", methods=['POST'])
def predict():
    try:
        # Extract input values from form
        features = [
            request.form['Gender'],
            request.form['AGE'], 
            request.form['HbA1c'],
            request.form['TG'],
            request.form['HDL'], 
            request.form['LDL'],
            request.form['VLDL'],
            request.form['Tot_chol'], 
            request.form['BMI'],
            request.form['SBP'], 
            request.form['DBP'],
            request.form['Hypertension'],
            request.form['Diabetes'],
            request.form['Phys_act'],
            request.form['Alcohol'],
            request.form['Waist_cir'], 
            request.form['Smoking'],
            request.form['FH']
        ]
        
        # Convert input to a NumPy array and reshape for prediction
        input_data = np.array(features, dtype=float).reshape(1, -1)
        
        # Apply scaling
        scaled_input = sc.transform(input_data)
        
        # Make prediction
        prediction = model.predict(scaled_input)
        
        # Interpret prediction result
        result = "Positive for Hypercholesterolemia" if prediction[0] == 1 else "Negative for Hypercholesterolemia"
        
    except Exception as e:
        result = f"Error in prediction: {str(e)}"
    
    return render_template('index.html', result=result)

if __name__ == "__main__":
    app.run(debug=True)
