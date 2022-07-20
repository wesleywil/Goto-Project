import Database from "tauri-plugin-sql-api";

// const db = await Database.load("sqlite:main.db");

let db = null;
const load = Database.load("sqlite:main.db").then((instance) => {
  db = instance;
  return db;
});

export async function createManga(manga) {
  let info = {};
  const data = await db.select("SELECT*FROM mangas WHERE title=$1", [manga.id]);
  if (!data.length) {
    const res = await db.execute(
      "INSERT INTO mangas(title,image,description,link,status,rate,review) values($1,$2,$3,$4,$5,$6,$7)",
      [
        manga.title,
        manga.image,
        manga.description,
        manga.link,
        manga.status,
        manga.rate,
        manga.review,
      ]
    );
    info = {
      message: "Manga Successfully Added",
      status: 201,
      data: res,
    };
    return info;
  } else {
    if (manga.title === data[0].title) {
      info = {
        message: "Manga already in your list",
        status: 400,
      };
      return info;
    } else {
      const res = await db.execute(
        "INSERT INTO mangas(title,image,description,link,status,rate,review) values($1,$2,$3,$4,$5,$6,$7)",
        [
          manga.title,
          manga.image,
          manga.description,
          manga.link,
          manga.status,
          manga.rate,
          manga.review,
        ]
      );
      info = {
        message: "Manga Successfully Added",
        status: 201,
        data: res,
      };
      return info;
    }
  }
}

export async function allMangas() {
  await load;
  const res = await db.select("SELECT * FROM mangas ORDER BY id DESC");
  return res;
}

export async function updateManga(manga) {
  const res = await db.execute(
    "UPDATE mangas SET title=$1, image=$2, description=$3, link=$4, status=$5, rate=$6, review=$7 where id=$8",
    [
      manga.title,
      manga.image,
      manga.description,
      manga.link,
      manga.status,
      manga.rate,
      manga.review,
      manga.id,
    ]
  );
  return res;
}

export async function searchMangaByTitle(title) {
  const res = await db.select(
    `SELECT*FROM mangas WHERE title LIKE "${title}" COLLATE NOCASE`
  );
  return res;
}

export async function searchByStatus(status) {
  const res = await db.select(
    "SELECT*FROM mangas WHERE status=$1 COLLATE NOCASE",
    [status]
  );
  return res;
}

export async function removeManga(id) {
  const res = await db.execute("DELETE FROM mangas WHERE id=$1", [id]);
  const results = {
    message: "Successfully Deleted",
    res,
  };
  return results;
}
