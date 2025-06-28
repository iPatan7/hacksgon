from PIL import Image
import io

def validate_and_process_image(file):
    try:
        image = Image.open(file)
        image.verify()  # Validate format
        image = Image.open(file).resize((128, 128))
        return image
    except Exception as e:
        print("Invalid image:", e)
        return None
