
/*//Code to reset or delete the database.
localforage.dropInstance({
    name: "localforage",
    storeName: "keyvaluepairs"
  }).then(function() {
    console.log("Database cleared!");
  }).catch(function(err) {
    console.log("Error clearing database:", err);
  });*/



// Boilerplate: initialize the db
class DB {
  db = null;
  config = {
    locateFile: (filename) =>
      "https://cdn.jsdelivr.net/npm/sql.js@1.8.0/dist/sql-wasm.wasm",
  };
  constructor() {
    this.#getLocalStorageData();
  }

  #getLocalStorageData() {
    initSqlJs(this.config).then((SQL) => {
      localforage
        .getItem("db")
        .then((value) => {
          this.#initDB(value, SQL);
          //queryData("Open");
        })
        .catch(function (err) {
          console.log("Error: " + err);
        });
    });
  }

  #initDB(value, SQL) {
    if (value) {
      // if db exists, load it
      this.db = new SQL.Database(value);
    } else {
      // if db doesn't exist, create it
      console.log("Creating db");
      this.db = new SQL.Database();
      // Run a query without reading the results(login and response table)
      this.db.run("CREATE TABLE response (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, country TEXT, home INTEGER, travel INTEGER, food INTEGER, electronic INTEGER, shopping INTEGER, result INTEGER, max TEXT, suggestions TEXT);");
      let data1 = "1698820701633, 'Nora', 80, 'AT', 5.8, 0, 2.9, 1.2, 0.27, 10.87, 'home', 'Your carbon footprint is higher in the home category. To reduce your carbon footprint, use renewable energy sources. Plant more trees and recycle'";
      let data2 = "1698820417130, 'Rick', 12, 'US', 4.6, 0, 7.49, 4.6, 0.14, 17.54, 'food', 'Your carbon footprint is higher in the food category. To reduce your carbon footprint, consider reducing meat consumption if you are a non vegetarian. Plant more trees and recycle'";
      let data3 = "1697893771186, 'Tina', 65, 'GB', 4.6, 4.32, 5.88, 7.6, 0.05, 21.74, 'electronics', 'Your carbon footprint is higher in the electronics category. To reduce your carbon footprint, reduce your screen time and electronics usage. Plant more trees and recycle'";
      let data4 = "1697886655077, 'Smith', 57, 'AU', 3.8, 3.2, 4.01, 4.6, 0.13, 16.46, 'electronics', 'Your carbon footprint is higher in the electronics category. To reduce your carbon footprint, reduce your screen time and electronics usage. Plant more trees and recycle'";
      let data5 = "1698050273959, 'Eric', 65, 'FI', 1, 0, 3.94, 2.40, 0.05, 7.39, 'food', 'Your carbon footprint is higher in the food category. To reduce your carbon footprint, consider reducing meat consumption if you are a non vegetarian. Plant more trees and recycle'";
      let data6 = "1698817308183, 'Alia', 65, 'NL', 4.6, 12.8, 3.94, 2, 0.05, 23.39, 'travel', 'Your carbon footprint is higher in the travel category. To reduce your carbon footprint, use electric vehicles. Plant more trees and recycle'";
      let data7 = "1698814523217, 'Amir', 36, 'AR', 5.4, 12.8, 5.81, 1.4, 0.27, 25.68, 'travel', 'Your carbon footprint is higher in the travel category. To reduce your carbon footprint, use electric vehicles. Plant more trees and recycle'";
      this.db.run("INSERT INTO response VALUES (" + data1 + "), (" + data2 + "),(" + data3 + "),(" + data4 + "),(" + data5 + "),(" + data6 + "),(" + data7 + ")");
    }
  }

  #storeIndexDB() {
    localforage.setItem("db", this.db.export()).catch(function (err) {
      if (err) console.log(err);
    });
  }
  //Function to insert the data into the database.
  insert(insertQuery, values) {
    this.db.run(insertQuery, values);
    this.#storeIndexDB();
  }

  //Function to update the data in the database.
  update(updateQuery, values) {
    this.db.run(updateQuery, values);
    this.#storeIndexDB();
  }

  //Function to delete the data from the database.
  delete(deleteQuery, values) {
    this.db.run(deleteQuery, values);
    this.#storeIndexDB();
  }

  //Function to select the data from the database.
  select(selectQuery, values) {
    return this.db.exec(selectQuery, values);
  }

  //Function to select all the data from the database.
  selectAll(selectQuery) {
    return this.db.exec(selectQuery);
  }

  UpdateRow(query, id) {
    this.db.run(query, [id]);
    this.#storeIndexDB();
  }
}




  

  

 



 


