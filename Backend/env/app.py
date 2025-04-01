from flask import Flask,request,render_template
import numpy as np
import pickle

model = pickle.load(open('svm_model.pkl', 'rb'))
sc = pickle.load(open('svm_scaler.pkl', 'rb'))

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/predict", methods=['POST'])
def predict():
        features = [
            request.form['HbA1c'],
            request.form['TG'],
            request.form['LDL'],
            request.form['BMI'],
            request.form['SBP'], 
            request.form['DBP'],
            request.form['Hypertension'],
            request.form['Diabetes'],
            request.form['Waist_cir'], 
            request.form['FH']
        ]
        input_data = np.array(features, dtype=float).reshape(1, -1)
        
        scaled_input = sc.transform(input_data)

        prediction = model.predict(scaled_input)

        predDict = {0:"Negative",1: "Positive" }


        if prediction[0] in predDict:
            chpredict = predDict[prediction[0]]
            result = "{}".format(chpredict)
        else:
            result = "Sorry, "
        return render_template('index.html',result = result)

if __name__ == "__main__":
    app.run(debug=True)
