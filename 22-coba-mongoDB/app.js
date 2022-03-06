const { MongoClient, ObjectID } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "amri";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("Connection failed!");
  }

  // pilih database
  const db = client.db(dbName);

  //   // menambahkan satu data ke collection inhabitant
  //   db.collection("inhabitant").insertOne(
  //     {
  //       name: "Andriani",
  //       email: "andri@gmail.com",
  //     },
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Failed to add data");
  //       }
  //       console.log(result);
  //     }
  //   );

  // menambahkan lebihd dari satu data
  //   db.collection("inhabitant").insertMany(
  //     [
  //       {
  //         name: "Sari",
  //         email: "sari@gmail.com",
  //       },
  //       {
  //         name: "Sarah",
  //         email: "sarah@gmail.com",
  //       },
  //     ],
  //     (error, result) => {
  //       if (error) {
  //         return console.log("Add data failed");
  //       }
  //       console.log(result);
  //     }
  //   );

  // menampilkan semua data yang ada di collection inhabitant

  //   console.log(
  //     db
  //       .collection("inhabitant")
  //       .find()
  //       .toArray((error, result) => {
  //         console.log(result);
  //       })
  //   );

  //menampilkan data berdasarkan kriteria yang ada di collection inhabitant
  // console.log(
  //   db
  //     .collection("inhabitant")
  //     .find({ _id: ObjectID("6220d0393a8048b9dea099f9") })
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );

  // mengubah data berdasarkan id
  // const updatePromise = db.collection("inhabitant").updateOne(
  //   {
  //     _id: ObjectID("6220d0393a8048b9dea099f9"),
  //   },
  //   {
  //     $set: {
  //       email: "ubaidillah@yahoo.com",
  //     },
  //   }
  // );

  // updatePromise
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //mengubah data lebih dari satu berdasarkan kriteria
  // db.collection("inhabitant").updateMany(
  //   {
  //     name: "Andriani",
  //   },
  //   {
  //     $set: {
  //       name: "Andriani Aprianti S.Pd",
  //     },
  //   }
  // );

  // menghapus satu data
  // db.collection("inhabitant")
  //   .deleteOne({
  //     _id: ObjectID("622373f14973d6a31314f724"),
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // mengapus lebih dari satu data
  db.collection("inhabitant")
    .deleteMany({
      name: "Andriani Aprianti S.pd",
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
