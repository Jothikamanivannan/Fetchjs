<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch</title>
</head>
<body>
    <script scr="script.js"></script>
</body>
</html>
*Script js*
addfetch('https://reqres.in/api/users?page=2')
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
})
