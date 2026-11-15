import http from 'http';

const server = http.createServer((req, res) => {

    // CREATE student - POST /students
    if (req.method === 'POST' && req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Student Created</h1>');
    }

    // READ all students - GET /students
    else if (req.method === 'GET' && req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Student List</h1>');
    }

    // READ student by ID - GET /students/1
    else if (req.method === 'GET' && req.url === '/students/1') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Student Details</h1>');
    }

    // UPDATE student by ID - PUT /students/1
    else if (req.method === 'PUT' && req.url === '/students/1') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Student Updated</h1>');
    }

    // DELETE student by ID - DELETE /students/1
    else if (req.method === 'DELETE' && req.url === '/students/1') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Student Deleted</h1>');
    }

    // If route not found
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Not Found</h1>');
    }
});

// Start server
server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/');
});
