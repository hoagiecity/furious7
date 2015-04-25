import os, sys
from flask import Flask, request, jsonify

from utils import *
lib_path = os.path.abspath(os.path.join('pytesser'))
sys.path.append(lib_path)
from pytesser import *


app = Flask(__name__)

@app.route('/')
def something():
    return 'jajajaja'

@app.route('/process', methods=['POST'])
def process():
    if request.method == 'POST':
        file = request.files['image']
        if file and allowed_file(file.filename):
            image = Image.open(file.filename) 

            image_string = image_to_string(image)

