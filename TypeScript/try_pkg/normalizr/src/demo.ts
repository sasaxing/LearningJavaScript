import { normalize, schema } from 'normalizr';

const originalData = {
  "id": "123",
  "author": {
    "id": "1",
    "name": "Paul"
  },
  "title": "My awesome blog post",
  "comments": [
    {
      "id": "324",
      "commenter": {
        "id": "2",
        "name": "Nicole"
      }
    }
  ]
}
// Define a users schema
const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user
});

// Define your article 
const article = new schema.Entity('articles', { 
  author: user,
  comments: [ comment ]
});

const normalizedData = normalize(originalData, article);

const output = {
  "entities": {
    "users": {
      "1": {
        "id": "1",
        "name": "Paul"
      },
      "2": {
        "id": "2",
        "name": "Nicole"
      }
    },
    "comments": {
      "324": {
        "id": "324",
        "commenter": "2"
      }
    },
    "articles": {
      "123": {
        "id": "123",
        "author": "1",
        "title": "My awesome blog post",
        "comments": [
          "324"
        ]
      }
    }
  },
  "result": "123"
}

console.log(JSON.stringify(normalizedData, null, 2) === JSON.stringify(output, null,2)) // true