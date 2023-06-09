from flask import Flask, render_template, request, jsonify

from chat import get_response

app = Flask(__name__)

@app.get("/")
def index_get():
    return render_template("base.html")


@app.post("/predict")
def predict():
    text = request.get_json().get("sentence")
    response = get_response(text)
    sentence = {"answer": response}
    return jsonify(sentence)

if __name__ == "__main__":
    app.run(debug=True)
