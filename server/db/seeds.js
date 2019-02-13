use bucketList;
db.dropDatabase();

db.items.insertMany([
  {
    goal: "Ride a Zepplin",
    difficulty: 7
  },
  {
    goal: "See Grand Canyon",
    difficulty: 4
  },
  {
    goal: "Finish this app",
    difficulty: 10
  }
]);
