from flask import Flask, render_template, request
app = Flask(__name__) #create instance of class FLASK

#Kenneth Chin and Nahi Khan
#SoftDev pd9
#12_form flask app
#2019-09-26
@app.route("/") #assign following fxn to run when rotting route requested
def hello_world():
    print(app)#prints string version of flask app
    print(request)# prints form request
    print(request.args)# prints form as immutable dict
    return render_template(
    'landing.html',
    )

@app.route("/response")
def test_tmplt():
    print(app)#prints string version of flask app
    print(request)# prints form request
    print(request.args)# prints form as immutable dict
    print (request.method)# prints the method Get or Post
    return render_template(
    'response.html', name = request.args["Username"], method = request.method
    )




if __name__=="__main__":
    app.debug = True
    app.run()
