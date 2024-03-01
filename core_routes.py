from flask import render_template,Blueprint,jsonify
from database import load_projects

core_routes= Blueprint("core",__name__)

@core_routes.route("/")
def home():
  projects=load_projects()
  return render_template("index.html",projects=projects)


@core_routes.route("/api/projects")
def projects():
  projects=load_projects()
  return jsonify(projects)