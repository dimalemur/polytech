from app import app
from flask import render_template,jsonify, request
import json,io

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data' , methods = ['GET','POST'])
def login():
    if request.method == 'POST':
        f = open('data.json', 'w')
        f.write(request.data)
        f.close()
        print(request.data)
        return jsonify(request.get_json(force=True))
    else:
        with open("data.json", "r") as read_file:
            data = json.load(read_file)
        return data
