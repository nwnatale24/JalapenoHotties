from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Table, MetaData, insert

app = FastAPI()
engine = create_engine('mysql+mysqlconnector://root:password@localhost/JalapenoHotties')
metadata = MetaData(bind=engine)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a Table object that represents the "restaurant" table in the DB.
restaurant_table = Table('restaurant', metadata, autoload=True)

# Endpoint for GET request to return JSON of restaurants and their attributes.
@app.get("/api/restaurants")
async def get_resurants():
    try:
        # Open a conection to the DB.
        conn = engine.connect()

        # Execute a SELECT query on the "restaurant" table
        select_query = restaurant_table.select()
        results = conn.execute(select_query)

        # Loop through the results and build a list of dictionaries
        restaurants = []
        for row in results:
            restaurant = {
                "name": row["name"],
                "website": row["website"]
            }
            restaurants.append(restaurant)

        # Close the connection to the DB. 
        conn.close()

        return {"restaurants": restaurants}

    except Exception as e:
        return {"error": str(e)}

# Endpoint to POST (add) a new restaurant to our DB. 
@app.post("/api/restaurants/")
async def post_restaurant(name: str, website: str):
    try:
        # Open a connection to the DB.
        conn = engine.connect()

        insert_query = insert(restaurant_table).values(name=name, website=website)
        results = conn.execute(insert_query)

        # Close the connection to the DB. 
        conn.close()

        #TODO: Return the id of the restaurant created. 

    except Exception as e:
        return {"error": str(e)}
