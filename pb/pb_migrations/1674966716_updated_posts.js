migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q8d4zq8bwsqmm0")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q8d4zq8bwsqmm0")

  // remove
  collection.schema.removeField("vbm9tecs")

  return dao.saveCollection(collection)
})
