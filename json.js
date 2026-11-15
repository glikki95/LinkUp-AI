import http from 'http';

const students = [];
const server = http.createServer((req, res) => {
    const { method, url } = req;
    const send = (status, data) => {
        res.writeHead(status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    };

    if (method === 'POST' && url === '/students') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const newStudent = JSON.parse(body);
            students.push(newStudent);
            send(201, { message: 'Student created successfully', student: newStudent });
        });
    } else if (method === 'GET' && url === '/students') {
        send(200, students);
    } else if (method === 'GET' && url.startsWith('/students/')) {
        const studentId = parseInt(url.split('/')[2], 10);
        const student = students.find(s => s.id === studentId);
        send(student ? 200 : 404, student || { message: 'Student not found', data: students });
    } else if (method === 'PUT' && url.startsWith('/students/')) {
        const studentId = parseInt(url.split('/')[2], 10);
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const studentIndex = students.findIndex(s => s.id === studentId);
            if (studentIndex === -1) {
                send(404, { message: 'Student not found' });
                return;
            }
            students[studentIndex] = { ...students[studentIndex], ...JSON.parse(body) };
            send(200, { message: 'Student updated', student: students[studentIndex] });
        });
    } else if (method === 'DELETE' && url.startsWith('/students/')) {
        const studentId = parseInt(url.split('/')[2], 10);
        const studentIndex = students.findIndex(s => s.id === studentId);
        if (studentIndex === -1) {
            send(404, { message: 'Student not found' });
        } else {
            students.splice(studentIndex, 1);
            send(200, { message: 'Student deleted', data: students });
        }
    } else {
        send(404, { message: 'Student not found' });
    }
});

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/');
});