# kanban-board-api
### Kanban Board API for the Kanban Board App

### Base URL: `site/api/`
### Endpoints:

## `/tasks`

### `GET /`
 - success: returns a JSON containing an array with all the Tasks in the DB.
 - exception: returns status 404 and a JSON with the message 'No tasks yet'.

``` bash
GET site/api/tasks


{
   [
    {
      "_id": "objID",
      "title": "task title 1",
      "status": "ongoing",
      "description": "task description",
      "createdAt": "2023-03-13T22:50:26.219Z",
      "updatedAt": "2023-04-04T17:41:02.056Z"
    },
    {
      "_id": "objID",
      "title": "task title 2",
      "status": "pending",
      "description": "task description",
      "createdAt": "2023-03-13T22:50:26.219Z",
      "updatedAt": "2023-04-04T17:41:02.056Z"
    }
  ]
}
```

### `GET /:taskID`
 - expects: taskID.
 - success: returns a JSON containing the task.
 - exception: returns status 404 and a JSON with the message 'Task not found'.

``` bash
GET site/api/tasks/taskID


{
   {
     "_id": "objID",
     "title": "task found by ID",
     "status": "ongoing",
     "description": "task description",
     "createdAt": "2023-03-13T22:50:26.219Z",
     "updatedAt": "2023-04-04T17:41:02.056Z"
   },
  
}
```

### `POST /new`
 - expects: an object with title, status, description properties.
 - success:  returns a JSON containing the recently added task.
 - exception: returns JSON with error message.

``` bash
POST site/api/tasks/new


[
    {
      "_id": "objID",
      "title": "new task title",
      "status": "onhold",
      "description": "new task description",
      "createdAt": "2023-03-13T22:50:26.219Z",
      "updatedAt": "2023-03-13T22:50:26.219Z"
    }
]
```
### `PUT /edit/:taskID`
 - expects: an object with the fields to modify (task, status, description) + taskID to find the task to modify.
 - success: returns status 200 and a JSON containing the edited task .
 - exception:  returns JSON with error message.

``` bash
PUT site/api/tasks/edit/:taskID


{
   {
     "_id": "objID",
     "title": "edited task title",
     "status": "finished",
     "description": "edited task description",
     "createdAt": "2023-03-13T22:50:26.219Z",
     "updatedAt": "2023-04-04T17:41:02.056Z"
   },
  
}
```

### `DELETE /delete/:taskID`
 - expects: taskID.
 - success: returns a JSON containing all the tasks.
 - exception: returns JSON with error message.

``` bash
DELETE site/api/tasks/delete/:taskID


{
   [
    {
      "_id": "objID",
      "title": "task title 2",
      "status": "pending",
      "description": "task description",
      "createdAt": "2023-03-13T22:50:26.219Z",
      "updatedAt": "2023-04-04T17:41:02.056Z"
    }
  ]
}
```

