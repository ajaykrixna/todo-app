from fastapi import FastAPI
from app.database import Base, engine
from app.models.todo import Todo


app = FastAPI()

@app.get("/")
def root():
    return {"message": "Todo Backend API is running!"}

Base.metadata.create_all(bind=engine)