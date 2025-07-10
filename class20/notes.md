## MONGODB

### Database
Physical container for collections.

### Collections
Group of documents. Same as table in sql db. Exists inside a single database.

### Documents
Is a set of key-value pairs. Same as row in sql db.
Each document can have dynamic schema. Each document has multiple fields.


BSON - Binary JSON
{username: "Sahil", password: "dfgh324", isActive: true}

### Commands

- `db` - shows the current database
- `use <new_db_name>` - if db is not present then creates a new db and uses it.
- `db.dropDatabase()` - deletes the current database
- `show collections` - lists all the collections
- `db.collectionName.insertOne()`, `db.collectionName.insertMany()`, `db.collectionName.bulkWrite()` - insert document in collection
- `db.users.find()`
- `db.users.updateMany({}, [{$set: {}}])`, `db.users.updateOne({}, [{$set: {}}])`
- `db.users.deleteOne({})`