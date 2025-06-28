from fastapi import FastAPI, File, UploadFile, Form, Request
from fastapi.middleware.cors import CORSMiddleware
from backend.agents.image_agent import validate_and_process_image
from backend.agents.prediction_agent import predict_pothole
from backend.agents.geo_agent import extract_location
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from dotenv import load_dotenv
import os 

load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")
@app.get("/")
def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
@app.get("/map")
def map_page(request: Request):
    return templates.TemplateResponse("map.html", {"request": request})

@app.post("/predict/")
async def analyze_image(
    file: UploadFile = File(...),
    lat: str = Form(None),
    lon: str = Form(None)
):
    image = validate_and_process_image(file.file)
    if image is None:
        return {"error": "Invalid image format."}

    prediction = predict_pothole(image)
    location = extract_location(lat, lon)
    return {**prediction, **location}
