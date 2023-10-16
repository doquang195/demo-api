let coursesAPI = "<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REST API Demo</title>
</head>
<body>

    <h1>REST API Demo</h1>

    <button onclick="getData()">Get Data from Server</button>
    <button onclick="sendData()">Send Data to Server</button>

    <script>
        function getData() {
            fetch('server.php', {
                method: 'GET',
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        }

        function sendData() {
            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ key: 'value' }), // Dữ liệu cần gửi
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        }
    </script>

</body>
</html>"