import Database from "tauri-plugin-sql-api";

const db = await Database.load("sqlite:main.db");

export async function createAnime(anime) {
  const res = await db.execute(
    "INSERT INTO animes (title,description,image,link,status,rate,review) values($1,$2,$3,$4,$5,$6,$7)",
    [
      anime.title,
      anime.description,
      anime.image,
      anime.link,
      anime.status,
      anime.rate,
      anime.review,
    ]
  );
  console.log("CREATING NEW ANIME...", res);
}

export async function allAnimes() {
  const res = await db.select("SELECT * FROM animes");
  return res;
}

export async function updateAnime(anime) {
  const res = await db.execute(
    "UPDATE animes SET title=$1, image=$2, description=$3, link=$4, status=$5, rate=$6, review=$7 where id=$8",
    [
      anime.title,
      anime.image,
      anime.description,
      anime.link,
      anime.status,
      anime.rate,
      anime.review,
      anime.id,
    ]
  );
  return res;
}

export async function removeAnime(id) {
  const res = await db.execute("DELETE FROM animes WHERE id=$1", [id]);
  const results = {
    message: "Successfully Deleted",
    res,
  };
  return results;
}
