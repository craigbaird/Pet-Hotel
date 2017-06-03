--Create 'Owners' Table
CREATE TABLE owners (
    id SERIAL PRIMARY KEY,
    first_name character varying(60),
    last_name character varying(80)
);

--Create 'Pets' Table
CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    owner_id INT REFERENCES "owners",
    name character varying(60),
    breed character varying(60),
    color character varying(60)
);

--Create 'Visits' Table
CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    pet_id INT REFERENCES "pets",
	check_in DATE,
	check_out DATE
	);

--Gets all owners
SELECT * FROM "owners";

--Gets all pets belonging to the owner with id 'varINT'
SELECT * FROM "pets" WHERE "owner_id" = varINT;

--Add a new owner, where varX is 'first_name' and varY is 'last_name'.
INSERT INTO "owners" ("first_name", "last_name") VALUES ('varX', 'varY');

--Add a new pet, where varA is 'owner_id', varP is 'name', varE is 'breed', and varT is 'color'.
INSERT INTO "pets" ("owner_id", "name", "breed", "color") VALUES (varA, 'varP', 'varE', 'varT');

--Change owner info, where varL is 'first_name' and varL is 'last_name'.
UPDATE "owners" SET ("first_name", "last_name") = ('varF', 'varL') WHERE "id" = varINT;

--Change pet info, where varB is 'owner_id', varC is 'name', varD is 'breed', and varZ is 'color'.
UPDATE "pets" SET ("owner_id", "name", "breed", "color") = (varB, 'varC', 'varD', 'varE') WHERE "id" = varINT;

--Deletes a pet with id "varINT"
DELETE FROM "visits" WHERE "pet_id" = varINT;
DELETE FROM "pets" WHERE "id" = varINT;

--Checks a pet in with id varINT at date varCHI
INSERT INTO "visits" ("pet_id", "check_in") VALUES (varINT, 'varCHI');

--Checks a pet out at date varCHO where pet_id = varINT
UPDATE "visits" SET ("check_out") = ('varCHO') WHERE "pet_id" = varINT AND "check_out" IS NULL;









----These add dummy data:
INSERT INTO "owners" ("first_name", "last_name") VALUES ('YPaul', 'Sussman');

INSERT INTO "pets" ("owner_id", "name", "breed", "color") VALUES (1, 'Cappi', 'Rat Terrier', 'White');

INSERT INTO "pets" ("owner_id", "name", "breed", "color") VALUES (1, 'Pud', 'Pitbull', 'White');

INSERT INTO "owners" ("first_name", "last_name") VALUES ('Zoe', 'Liu');

INSERT INTO "pets" ("owner_id", "name", "breed", "color") VALUES (2, 'Dib', 'Chiweenie', 'Black');

INSERT INTO "pets" ("owner_id", "name", "breed", "color") VALUES (2, 'Lenore', 'Crab', 'Red');

INSERT INTO "visits" ("pet_id", "check_in", "check_out") VALUES (1, '1/2/2001', '1/7/2001');

INSERT INTO "visits" ("pet_id", "check_in", "check_out") VALUES (1, '2/5/2001', '2/9/2001');

INSERT INTO "visits" ("pet_id", "check_in", "check_out") VALUES (3, '3/5/2001', '4/9/2001');
