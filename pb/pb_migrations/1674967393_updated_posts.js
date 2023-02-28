migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q8d4zq8bwsqmm0")

  collection.listRule = ""
  collection.viewRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q8d4zq8bwsqmm0")

  collection.listRule = null
  collection.viewRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
