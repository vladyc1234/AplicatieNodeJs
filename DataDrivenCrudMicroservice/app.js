const express = require('express');
const bodyParser = require('body-parser');
const projectsRouter = require('./Controller/ProjectController'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', projectsRouter); // Prefix all routes defined in projectsController with /api

app.get('/', (req, res) => {
    res.send('IT Project Management API');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
