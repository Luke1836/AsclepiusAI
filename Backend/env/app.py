# from flask import Flask, request, render_template
# import numpy as np
# import pickle

from flask import Flask,request,render_template
import numpy as np
# import pandas
# import sklearn
import pickle

# model = pickle.load(open('model.pkl','rb'))
# sc = pickle.load(open('standscaler.pkl','rb'))
# mx = pickle.load(open('minmaxscaler.pkl','rb'))


# # app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template("index.html")

# @app.route("/predict",methods=['POST'])
# def predict():
#     N = request.form['Nitrogen']
#     P = request.form['Phosporus']
#     K = request.form['Potassium']
#     temp = request.form['Temperature']
#     humidity = request.form['Humidity']
#     ph = request.form['pH']
#     rainfall = request.form['Rainfall']

#     feature_list = [N, P, K, temp, humidity, ph, rainfall]
#     single_pred = np.array(feature_list).reshape(1, -1)

#     mx_features = mx.transform(single_pred)
#     sc_mx_features = sc.transform(mx_features)
#     prediction = model.predict(sc_mx_features)

#     crop_dict = {1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
#                  8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
#                  14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
#                  19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}

    # if prediction[0] in crop_dict:
    #     crop = crop_dict[prediction[0]]
    #     result = "{} is the best crop to be cultivated right there".format(crop)
    # else:
    #     result = "Sorry, we could not determine the best crop to be cultivated with the provided data."
    # return render_template('index.html',result = result)


# if __name__ == "__main__":
#     app.run(debug=True)

# Load the trained model and scaler
model = pickle.load(open('knn_model.pkl', 'rb'))
sc = pickle.load(open('scaler.pkl', 'rb'))

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/predict", methods=['POST'])
def predict():
    
        # hdl = float(request.form['HDL'])
        ldl = float(request.form['LDL'])
        tg = float(request.form['TG'])

        # tot_chol = hdl + ldl + (tg / 5)
        features = [
            # request.form['Gender'],
            # request.form['AGE'], 
            request.form['HbA1c'],
            tg,
            # hdl, 
            ldl,
            # request.form['VLDL'],
            # tot_chol, 
            request.form['BMI'],
            request.form['SBP'], 
            request.form['DBP'],
            request.form['Hypertension'],
            request.form['Diabetes'],
            # request.form['Phys_act'],
            # request.form['Alcohol'],
            request.form['Waist_cir'], 
            # request.form['Smoking'],
            request.form['FH']
        ]
        
        # Convert input to a NumPy array and reshape for prediction
        input_data = np.array(features, dtype=float).reshape(1, -1)
        
        # Apply scaling
        scaled_input = sc.transform(input_data)

        prediction = model.predict(scaled_input)

        predDict = {0:"negative",1: "positive" }


        if prediction[0] in predDict:
            chpredict = predDict[prediction[0]]
            result = "{}".format(chpredict)
        else:
            result = "Sorry, "
        return render_template('index.html',result = result)
        
#         # Make prediction
#         prediction = model.predict(scaled_input)

#         # Interpret prediction result
#         if prediction[0] == 0:
#             result = f"Positive for Hypercholesterolemia (Prediction: {prediction[0]})"
#         else:
#             result = f"Negative for Hypercholesterolemia (Prediction: {prediction[0]})"
        
#     except Exception as e:
#         result = f"Error in prediction: {str(e)}"
    
#     return render_template('index.html', result=result)

if __name__ == "__main__":
    app.run(debug=True)
