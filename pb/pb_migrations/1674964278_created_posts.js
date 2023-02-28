migrate((db) => {
  const collection = new Collection({
    "id": "7q8d4zq8bwsqmm0",
    "created": "2023-01-29 03:51:18.853Z",
    "updated": "2023-01-29 03:51:18.853Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ido19rxb",
        "name": "user",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7q8d4zq8bwsqmm0");

  return dao.deleteCollection(collection);
})
