const path = require("path");

const dbPath = path.resolve(__dirname, "db/database.sqlite");

// Create connection to SQLite database
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

// Create a table in the database called "animes"
knex.schema
  .hasTable("animes")
  .then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable("animes", (table) => {
          table.increments("id").primary();
          table.string("title");
          table.string("image");
          table.string("description");
          table.string("link");
          table.string("status");
          table.integer("rate");
          table.string("review");
        })
        .then(() => {
          console.log("Table 'Animes' created");
        })
        .catch((error) => {
          console.log(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    // Log success message
    console.log("done");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });

knex
  .select("*")
  .from("animes")
  .then((data) => console.log("data ", data))
  .catch((err) => console.log(err));

module.exports = knex;
