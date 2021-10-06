from flask import Flask, json, jsonify, render_template
from flask.wrappers import Response
import pymongo

app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.Olympic_data
BarChart = db.Barchart_DB
GenderOverTime = db.GenderOverTime_DB
MapData = db.MapData_DB
MedalsOverTime = db.MedalsOverTime_DB
All_Data = db.AllData_DB

@app.route("/")
def welcome():
    return render_template("index.html")

@app.route("/api/1/BarChart", methods = ["GET"])
def api_output_barchart():
    try:
        print("this works")
        return jsonify(f'{list(BarChart.find())}')
    except Exception as ex:
        print(ex)
        return Response(
            response= json.dumps({"message":"Messed up"}),
            status = 500
        )

@app.route("/api/1/GenderOverTime", methods = ["GET"])
def api_output_genderovertime():
    try:
        print("this works")
        return jsonify(f'{list(GenderOverTime.find())}')
    except Exception as ex:
        print(ex)
        return Response(
            response= json.dumps({"message":"Messed up"}),
            status = 500
        )

@app.route("/api/1/MapData", methods = ["GET"])
def api_output_mapdata():
    try:
        print("this works")
        return jsonify(f'{list(MapData.find())}')
    except Exception as ex:
        print(ex)
        return Response(
            response= json.dumps({"message":"Messed up"}),
            status = 500
        )

@app.route("/api/1/MedalsOverTime", methods = ["GET"])
def api_output_medalsovertime():
    try:
        print("this works")
        return jsonify(f'{list(MedalsOverTime.find())}')
    except Exception as ex:
        print(ex)
        return Response(
            response= json.dumps({"message":"Messed up"}),
            status = 500
        )

@app.route("/api/1/AllData", methods = ["GET"])
def api_output_AllData():
    try:
        print("this works")
        return jsonify(f'{list(All_Data.find())}')
    except Exception as ex:
        print(ex)
        return Response(
            response= json.dumps({"message":"Messed up"}),
            status = 500
        )

if __name__ == "__main__":
    app.run(debug=True)