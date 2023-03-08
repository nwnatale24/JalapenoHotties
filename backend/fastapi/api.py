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

# Create a Table object that represents the "resturant" table in the DB.
resturant_table = Table('restaurant', metadata, autoload=True)

# Endpoint for GET request to return JSON of resturants and their attributes.
@app.get("/api/restaurants")
async def read_resurants():
    try:
        # Open a conection to the DB.
        conn = engine.connect()

        # Execute a SELECT query on the "resturant" table
        select_query = resturant_table.select()
        results = conn.execute(select_query)

        # Loop through the results and build a list of dictionaries
        resturants = []
        for row in results:
            resturant = {
                "name": row["name"],
                "website": row["website"]
            }
            resturants.append(resturant)

        # Close the connection to the DB. 
        conn.close()

        return {"restaurants": resturants}

    except Exception as e:
        return {"error": str(e)}

# Endpoint to POST (add) a new resturant to our DB. 
# --- this is still a test. Just puts in a dummy resturant for now --- 
@app.post("/api/restaurants")
async def post_resturants():
    try:
        # Open a connection to the DB.
        conn = engine.connect()

        insert_query = insert(resturant_table).values(name="Testaurant", website="google.com")
        results = conn.execute(insert_query)

        # Close a connection to the DB. 
        conn.close()

    except Exception as e:
        return {"error": str(e)}
