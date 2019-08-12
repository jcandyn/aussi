DROP DATABASE IF EXISTS words_db;

CREATE DATABASE words_db;
USE words_db;
DROP TABLE words;
CREATE TABLE words (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    word VARCHAR(30) NOT NULL,
    definition VARCHAR(2000) NOT NULL
);

	INSERT INTO words (word, definition)
	VALUES ("Sonder", "n. the realization that each random passerby is living a life as vivid and complex as your own—populated with their own ambitions, friends, routines, worries and inheritedcraziness—an epic story that continues invisibly around you like an anthill sprawling deep underground, with elaborate passageways to thousands of other lives that you’ll never know existed, in which you might appear only once, as an extra sipping coffee in the background, as a blur of traffic passing on the highway, as a lighted window at dusk.");
     
     SELECT * FROM words;
     
     INSERT INTO words(word,definition)
     VALUES ("Hanker Sore","adj. finding a person so attractive it actually kinda pisses you off.");
     
SELECT * FROM words WHERE definition LIKE "%attractive%";