migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q8d4zq8bwsqmm0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ido19rxb",
    "name": "user",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vbm9tecs",
    "name": "pass",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q8d4zq8bwsqmm0")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vbm9tecs",
    "name": "pass",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
