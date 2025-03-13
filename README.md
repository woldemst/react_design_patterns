# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

import os
import torch
import json
import PIL.Image as Image
from sqlalchemy import create_engine, Column, Integer, String, LargeBinary
from sqlalchemy.orm import sessionmaker, declarative_base
from transformers import CLIPProcessor, CLIPModel
from pgvector.sqlalchemy import Vector

# ---- CONFIGURE POSTGRESQL CONNECTION ----
DB_URL = "postgresql+pgvector://username:password@localhost:5432/your_database"
engine = create_engine(DB_URL)
Session = sessionmaker(bind=engine)
session = Session()

Base = declarative_base()

# ---- DEFINE DATABASE MODEL ----
class ImageData(Base):
    __tablename__ = "images"
    id = Column(Integer, primary_key=True, autoincrement=True)
    filename = Column(String, unique=True, nullable=False)
    format = Column(String)
    size = Column(String)
    embedding = Column(Vector(512))  # CLIP embeddings are 512-dimensional

Base.metadata.create_all(engine)

# ---- LOAD CLIP MODEL ----
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# ---- PROCESS IMAGES ----
image_folder = "./dataset/images"

for filename in os.listdir(image_folder):
    if filename.endswith((".jpg", ".png", ".jpeg")):
        image_path = os.path.join(image_folder, filename)
        
        # Extract metadata
        img = Image.open(image_path)
        metadata = {
            "filename": filename,
            "format": img.format,
            "size": f"{img.width}x{img.height}"
        }

        # Generate embedding
        inputs = processor(images=img, return_tensors="pt")
        with torch.no_grad():
            embedding = model.get_image_features(**inputs).squeeze().tolist()

        # Save to database
        img_entry = ImageData(
            filename=metadata["filename"],
            format=metadata["format"],
            size=metadata["size"],
            embedding=embedding
        )
        session.add(img_entry)

session.commit()
session.close()
print("✅ Images processed and stored in PostgreSQL")
