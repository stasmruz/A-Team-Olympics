from flask import Flask, json, jsonify
from flask.wrappers import Response
import pymongo

app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.Olympic_data
tester = db.Barchart

@app.route("/api/test", methods = ["GET"])
def api_output():
    try:
        print("this works")
        return jsonify(f'{list(tester.find())}')
    except Exception as ex:
        print(ex)
        return Response(
            response= json.dumps({"message":"Messed up"}),
            status = 500
        )

@app.route("/")
def welcome():
    return (
        f"Index<br/>"
        f"Available Routes:<br/>"
        f"/api/test<br/>"
    )

if __name__ == "__main__":
    app.run(debug=True)