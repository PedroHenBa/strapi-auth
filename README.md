
# Strapi application

- A simple api that have post and users and your routes are protected by
jwt.

<p>
 The api have posts and user. Every user have 0 or many posts. Each user just can modify, delete and create their own posts.
</p>

<h1>installation</h1>

```bash
git clone https://github.com/PedroHenBa/api-strapi-blog.git
```
- Install dependencies

```bash
npm install
```

<h1>Setting</h1>

- open .env.example
- fill the fields with your data
- rename .env.example to .env

<h1>Getting start</h1>

```bash
npm run develop
```

<h1>Create a user</h1>

You can create a user inside the admin panel of the strapi.

<h1>Access routes</h1>

to get a token you need first authenticate the user you created, send a post to `http://localhost:1337/auth/local`

```bash
{
    "identifier": "example@email.com",
    "password": "example"
}
```

To access routes that are protected by jwt, in every request to these routes you need to pass the token

```bash
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYXJpYUBlbWFpbC5jb20iLCJpYXQiOjE2MzExMTAwMjYsImV4cCI6MTYzMTExNzIyNn0.1ZPQwBzmI_HTss5oCSpXtZKHuKtmDTyagCst0x4-GCY
```

<h2>Creating a post</h2>

Send a post to `http://localhost:1337/posts`

```bash
{
    "title": "example",
    "content": "content example"
}
```

<h2>update delete and find/findOne</h2>

<h4>update</h4>

Send a put to `http://localhost:1337/posts/{idPost}`

<h4>delete</h4>

Send a delete to `http://localhost:1337/posts/{idPost}`

<h4>find</h4>

Send a get to `http://localhost:1337/posts`

<h4>find One</h4>

Send a get to `http://localhost:1337/posts/{idPost}`


