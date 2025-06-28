import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array

model = load_model("pothole_model.h5")

def predict_pothole(image):
    img_array = img_to_array(image) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    prediction = model.predict(img_array)[0][0]
    return {
        "confidence": float(prediction),
        "result": "Pothole Detected" if prediction > 0.5 else "No Pothole Detected"
    }
