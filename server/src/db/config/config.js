module.exports = {

  "development": {
  "username": "vlad",
  "password": "admin",
  "database": "todo_db",
  "host": "127.0.0.1",
  "dialect": "postgres"
},
    "test": {
       "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
},
"production": {
  "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
}

}