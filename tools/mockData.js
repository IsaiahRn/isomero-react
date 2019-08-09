const courses = [
  {
    id: 1,
    title: "The Lord of the Rings Trilogy",
    slug: "lord-rings",
    authorId: 1,
    category: "Fiction"
  },
  {
    id: 2,
    title: "The Lives of a Cell: Notes of a Biology Watcher",
    slug: "lives-of-cells",
    authorId: 1,
    category: "Science"
  },
  {
    id: 3,
    title: "Surveillance Valley: The Secret Military History of the Internet ",
    slug: "surveillance-valley",
    authorId: 1,
    category: "Technology"
  },
  {
    id: 4,
    title: "Things fall apart",
    slug: "things-fall-apart",
    authorId: 1,
    category: "Novel"
  }
];

const authors = [
  { id: 1, name: "Isaiah Runoro" },
  { id: 2, name: "Niyo celestin" },
  { id: 3, name: "Nzube micheal" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors
};
