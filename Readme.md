# Number Plate Recognition and Character Extraction: A Web-Based Solution for Traffic Management

## Overview

This project implements a real-time vehicle number plate detection and recognition system. The solution combines TensorFlow's Object Detection API for identifying number plates and Tesseract OCR for text extraction. The results are stored in MongoDB for easy retrieval, with an optional CSV file for backup. A frontend interface displays the processed results.

---

## Project Structure

The project folder is organized as follows:

- **Detection_Images/**: Contains the detected number plate images after processing.
- **Frontend/**: Includes the frontend code for displaying results stored in MongoDB.
- **server/**: Backend code that connects the system to the database and handles API requests.
- **Training and Detection.ipynb**: A Jupyter Notebook for training the model, detecting objects, extracting text via OCR, and saving results in MongoDB.
- **requirement.txt**: Lists the Python dependencies required to run the project.
- **detection_results.csv**: Stores the results of detection in CSV format for offline reference.

---

## Features

- **Number Plate Detection**: Detects number plates using a pre-trained object detection model.
- **OCR**: Extracts text from the detected number plates using Tesseract OCR.
- **Database Integration**: Saves extracted data into MongoDB for efficient storage and retrieval.
- **Frontend Visualization**: Displays stored results in a user-friendly interface.
- **Backup CSV**: Exports the detection results into a CSV file.

---

## Installation and Setup

### Prerequisites

- Python 3.8 or higher
- MongoDB installed and running locally or on a server
- Node.js and npm (for running the frontend)
- necessary python library from requirements.txt

### Step 1: Clone the Repository

```bash
git clone https://github.com/Dharmareddy8520/CV_Final_Project.git
cd CV_Final_Project
```

### Step 2: Install Python Dependencies

Install the required Python packages:

```bash
pip install -r requirement.txt
```

### Step 3: Set Up MongoDB

Ensure MongoDB is running and update the connection string in the `Training and Detection.ipynb` and backend `server` files.

### Step 4: Run Training and Detection

Open the Jupyter Notebook `Training and Detection.ipynb`, and execute the cells to train the model, detect objects, extract text, and save results to MongoDB.

### Step 5: Start the Backend Server

Navigate to the `server` directory and run:

```bash
nodemon server.js
```

### Step 6: Start the Frontend

Navigate to the `Frontend` directory and run:

```bash
npm install
npm start
```

---

## Usage

1. Place images for detection in the appropriate input folder specified in the notebook.
2. Run the detection pipeline in the Jupyter Notebook to generate detection results.
3. View results in the frontend interface or check `detection_results.csv` for exported data.

---

## Outputs

- **Detection_Images/**: Processed images with detected number plates highlighted.
- **MongoDB Database**: Contains extracted text and metadata.
- **detection_results.csv**: Summary of detection results (e.g., image name, extracted text).

---

## Contact

For any inquiries or issues, please reach out to the project maintainer.

Dharmareddy Pandem
