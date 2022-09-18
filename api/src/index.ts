import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  res.send(`
    <head>
      <title>Misfit API</title>
    </head>
    <body
      style="height: 100vh; display: flex; justify-content: center; align-items: center;"
    >
      <h1>Misfit API</h1>
    </body>
  `);
});

app.get('/users', (_, res) => {
  const users = [
    {
      id: 1,
      name: 'Ali Veli',
    },
    {
      id: 2,
      name: 'Ahmet Mehmet',
    },
    {
      id: 3,
      name: 'Hasan Hüseyin',
    },
  ];
  res.status(200).send(users);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
