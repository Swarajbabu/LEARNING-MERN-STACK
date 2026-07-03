/**********************************************************************
 * MONGODB BASIC COMMANDS (CHEAT SHEET)
 * Every command with:
 * 1. Example
 * 2. Why it is used
 * 3. Where it is used
 **********************************************************************/

/**********************************************************************
 * DATABASE COMMANDS
 **********************************************************************/

// Show all databases
// Why: Lists available databases
// Where: Check existing databases
show dbs

// Create/Switch database
// Why: Creates database if not exists
// Where: Start working with a database
use college

// Show current database
// Why: Check active database
// Where: Verify selected database
db

// Delete current database
// Why: Remove entire database
// Where: Reset project/testing
db.dropDatabase()

/**********************************************************************
 * COLLECTION COMMANDS
 **********************************************************************/

// Create collection
// Why: Create a new collection
// Where: Store related documents
db.createCollection("students")

// Show collections
// Why: View all collections
// Where: Check database structure
show collections

// Drop collection
// Why: Delete collection permanently
// Where: Remove unwanted data
db.students.drop()

/**********************************************************************
 * INSERT COMMANDS
 **********************************************************************/

// Insert one document
// Why: Add single record
// Where: Registration/Profile
db.students.insertOne({
    name: "John",
    age: 22,
    course: "CSE"
})

// Insert multiple documents
// Why: Add many records
// Where: Initial data upload
db.students.insertMany([
    { name: "Alice", age: 20, course: "ECE" },
    { name: "Bob", age: 21, course: "MECH" },
    { name: "David", age: 23, course: "CSE" }
])

/**********************************************************************
 * FIND COMMANDS
 **********************************************************************/

// Find all documents
// Why: Display all records
// Where: View complete collection
db.students.find()

// Find first document
// Why: Returns only one document
// Where: Quick lookup
db.students.findOne()

// Find specific fields
// Why: Display selected columns only
// Where: Reduce unnecessary data
db.students.find(
    {},
    { name: 1, age: 1, _id: 0 }
)

/**********************************************************************
 * FILTERING
 **********************************************************************/

// Equal
// Why: Match exact value
// Where: Search by ID/Name
db.students.find({ name: "John" })

// Greater Than
// Why: Values greater than
// Where: Age > 20
db.students.find({ age: { $gt: 20 } })

// Less Than
db.students.find({ age: { $lt: 22 } })

// Greater Than Equal
db.students.find({ age: { $gte: 21 } })

// Less Than Equal
db.students.find({ age: { $lte: 22 } })

// Not Equal
db.students.find({ age: { $ne: 20 } })

// In
// Why: Match multiple values
db.students.find({
    course: { $in: ["CSE", "ECE"] }
})

// Not In
db.students.find({
    course: { $nin: ["MECH"] }
})

/**********************************************************************
 * LOGICAL OPERATORS
 **********************************************************************/

// AND
// Why: Both conditions true
db.students.find({
    $and: [
        { age: { $gt: 20 } },
        { course: "CSE" }
    ]
})

// OR
// Why: Any condition true
db.students.find({
    $or: [
        { course: "ECE" },
        { course: "MECH" }
    ]
})

// NOT
db.students.find({
    age: {
        $not: { $gt: 22 }
    }
})

// NOR
db.students.find({
    $nor: [
        { course: "CSE" },
        { age: 20 }
    ]
})

/**********************************************************************
 * ARRAY OPERATORS
 **********************************************************************/

// Sample Data
db.students.insertOne({
    name: "Rahul",
    skills: ["C", "C++", "MongoDB"]
})

// Contains value
db.students.find({
    skills: "MongoDB"
})

// All values
db.students.find({
    skills: {
        $all: ["C", "MongoDB"]
    }
})

// Array size
db.students.find({
    skills: {
        $size: 3
    }
})

/**********************************************************************
 * SORTING
 **********************************************************************/

// Ascending
// Why: Lowest to Highest
// Where: Rank, Age
db.students.find().sort({ age: 1 })

// Descending
// Why: Highest to Lowest
db.students.find().sort({ age: -1 })

/**********************************************************************
 * LIMIT
 **********************************************************************/

// First 2 documents
// Why: Restrict output
// Where: Pagination
db.students.find().limit(2)

/**********************************************************************
 * SKIP
 **********************************************************************/

// Skip first 2 documents
// Why: Ignore documents
// Where: Pagination
db.students.find().skip(2)

/**********************************************************************
 * PAGINATION
 **********************************************************************/

// Page 2 (2 records/page)
db.students.find()
    .skip(2)
    .limit(2)

/**********************************************************************
 * UPDATE
 **********************************************************************/

// Update one
// Why: Modify single record
db.students.updateOne(
    { name: "John" },
    { $set: { age: 25 } }
)

// Update many
// Why: Modify multiple records
db.students.updateMany(
    { course: "CSE" },
    { $set: { department: "Engineering" } }
)

// Increment
// Why: Increase numeric value
db.students.updateOne(
    { name: "John" },
    { $inc: { age: 1 } }
)

// Rename field
db.students.updateMany(
    {},
    { $rename: { course: "branch" } }
)

// Remove field
db.students.updateOne(
    { name: "John" },
    { $unset: { branch: "" } }
)

/**********************************************************************
 * DELETE
 **********************************************************************/

// Delete one
// Why: Remove single record
db.students.deleteOne({
    name: "Bob"
})

// Delete many
// Why: Remove multiple records
db.students.deleteMany({
    age: { $gt: 22 }
})

// Delete all documents
db.students.deleteMany({})

/**********************************************************************
 * COUNT
 **********************************************************************/

// Count documents
// Why: Total records
db.students.countDocuments()

// Count filtered documents
db.students.countDocuments({
    course: "CSE"
})

/**********************************************************************
 * DISTINCT
 **********************************************************************/

// Unique values
// Why: Remove duplicates
db.students.distinct("course")

/**********************************************************************
 * AGGREGATION
 **********************************************************************/

// Match
// Why: Filter documents
db.students.aggregate([
    {
        $match: {
            age: { $gt: 20 }
        }
    }
])

// Group
// Why: Group similar data
db.students.aggregate([
    {
        $group: {
            _id: "$course",
            totalStudents: {
                $sum: 1
            }
        }
    }
])

// Average Age
db.students.aggregate([
    {
        $group: {
            _id: "$course",
            averageAge: {
                $avg: "$age"
            }
        }
    }
])

// Maximum Age
db.students.aggregate([
    {
        $group: {
            _id: null,
            maxAge: {
                $max: "$age"
            }
        }
    }
])

// Minimum Age
db.students.aggregate([
    {
        $group: {
            _id: null,
            minAge: {
                $min: "$age"
            }
        }
    }
])

// Project
// Why: Show selected fields
db.students.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            age: 1
        }
    }
])

// Sort
db.students.aggregate([
    {
        $sort: {
            age: -1
        }
    }
])

// Match + Group + Sort
db.students.aggregate([
    {
        $match: {
            age: { $gte: 20 }
        }
    },
    {
        $group: {
            _id: "$course",
            total: {
                $sum: 1
            }
        }
    },
    {
        $sort: {
            total: -1
        }
    }
])

/**********************************************************************
 * INDEXES
 **********************************************************************/

// Create Index
// Why: Faster searching
db.students.createIndex({
    name: 1
})

// Show Indexes
db.students.getIndexes()

// Drop Index
db.students.dropIndex({
    name: 1
})

/**********************************************************************
 * HELP
 **********************************************************************/

// MongoDB help
db.help()

// Collection help
db.students.help()

/**********************************************************************
 * END OF BASIC MONGODB COMMANDS
 **********************************************************************/