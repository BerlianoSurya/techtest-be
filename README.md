# Todo Backend

The Rest APIs:

- GET `api/todo/ongoing/user/:user_id` get all ongoing todo
- GET `api/todo/done/user/:user_id` get all done todo
- GET `api/todo/:id` get todo by id
- POST `api/todo` add new todo
- PUT `api/todo/:id` update todo by id
- PUT `api/todo/ongoing/:id` mark ongoing todo as done
- PUT `api/todo/done/:id` mark done todo as ongoing
- DELETE `api/todo/:id` remove todo by id

## Project setup

```
npm install
```

## Run

```
npm run serve
```

## Configure the .env file

Adjust your .env file so that your .env looks like this:

<pre>
HOST= "localhost"
USER= "postgres"
PASSWORD= "Your Password"
DB= "your db name"
</pre>
