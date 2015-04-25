import os, sys
from flask import Flask, request, url_for
from werkzeug import secure_filename

import cv2

lib_path = os.path.abspath(os.path.join('pytesser'))
sys.path.append(lib_path)

import Image
from pytesser import image_to_string

import utils

UPLOAD_FOLDER = 'tmp/'

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def something():
    return '<strong>Hail Hoagiecity!</strong>'

@app.route('/process', methods=['POST'])
def process():
    if request.method == 'POST':
        file = request.files['image']
        if file and utils.allowed_file(file.filename):
            filename = secure_filename(file.filename)
            tmp_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            bw_tmp_path = os.path.join(app.config['UPLOAD_FOLDER'], "bw_" + filename)
            file.save(tmp_path)

            image = Image.open(tmp_path) 
            image_string = image_to_string(image)
            # Using Python's OpenCV to convert image to just black and white
            im_gray = cv2.imread(tmp_path, cv2.CV_LOAD_IMAGE_GRAYSCALE)

            (thresh, im_bw) = cv2.threshold(im_gray, 128, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)

            cv2.imwrite(bw_tmp_path, im_bw)

            bw_image = Image.open(bw_tmp_path) 
            bw_image_string = image_to_string(bw_image)

            os.remove(tmp_path)
            os.remove(bw_tmp_path)

            utils.extract_details([image_string, bw_image_string])

            return image_string + "\n\n\n<br><br><br>" + bw_image_string

    return "Error"

