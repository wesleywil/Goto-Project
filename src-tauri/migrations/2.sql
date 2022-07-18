CREATE  TABLE mangas (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(300),
    image VARCHAR(50),
    description VARCHAR(300),
    link VARCHAR(60),
    status VARCHAR(30),
    rate INTEGER,
    review VARCHAR(300)
);