from sqlalchemy import create_engine,text
import os
from dotenv import load_dotenv

load_dotenv()
engine= create_engine(os.environ["DB_STRING"])

def load_projects():
  with engine.connect() as conn:
    query=text("SELECT * FROM projects")
    result=conn.execute(query)
    projects=[]
    conn.commit()
    for project in result.all():
      projects.append(project._asdict())
    return projects

