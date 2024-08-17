document.addEventListener('DOMContentLoaded', function () {
    const askButton = document.getElementById('ask-a-question');

    askButton.addEventListener('click', function () {
        document.body.innerHTML = `
           <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question page</title>
    <style>
        .questionbox {
            width: 500px;
            height: 150px;
            background-color: #add8e6; 
            border: 2px solid #000000; 
            font-size: 20px;
            padding: 10px;
            font-family: 'Comic Sans MS', sans-serif;
        }
        
        .post {
            background-color: #ffeb3b; 
            border: 1px solid #000000; 
            font-size: 18px;
            padding: 10px 20px;
            font-family: 'Comic Sans MS', sans-serif;
            cursor: pointer;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <textarea placeholder="Write your question" class="questionbox"></textarea>
    <br>
    <button class="post">Post now</button>
</body>
</html>
        `;
    });
});
