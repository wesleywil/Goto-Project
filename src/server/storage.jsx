// import Database from "tauri-plugin-sql-api";

// const db = await Database.load("sqlite:main.db");

// export async function createAnime(anime) {
//   const res = await db.execute(
//     "INSERT INTO animes (title,description,image,link,status,rate,review) values($1,$2,$3,$4,$5,$6,$7)",
//     [
//       anime.title,
//       anime.description,
//       anime.image,
//       anime.link,
//       anime.status,
//       anime.rate,
//       anime.review,
//     ]
//   );
//   console.log("CREATING NEW ANIME...", res);
// }

// export async function allAnimes() {
//   const res = await db.select("SELECT * FROM animes");
//   return res;
// }

// export async function updateAnime(anime) {
//   const res = await db.execute(
//     "UPDATE animes SET title=$1, description=$2, where id=$3",
//     [anime.title, anime.description, anime.id]
//   );
//   return res;
// }

// export async function removeAnime(id) {
//   const res = await db.execute("DELETE FROM animes WHERE id=$1", [id]);
//   const results = {
//     message: "Successfully Deleted",
//     res,
//   };
//   return results;
// }

// export async function alterTable() {
//   const res = await db.execute(
//     "ALTER TABLE animes ADD COLUMN image VARCHAR(30), ADD COLUMN link VARCHAR(50), ADD COLUMN status VARCHAR(15), ADD COLUMN rate VARCHAR(15), ADD COLUMN review VARCHAR(255);"
//   );

//   return res;
// }

// export async function showTableColumns() {
//   const res = await db.execute(
//     "INSERT INTO animes (title,description) VALUES ('test','test descritpion');"
//   );
//   return res;
// }
