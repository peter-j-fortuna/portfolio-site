pages['mad-libs'] = `
<div class="container mt-5">
    <button class="btn btn-outline-primary mb-4" onclick="goBack()">← Back</button>
    <h1 class="header">Mad Libs</h1>    
    <h1>Overview</h1>
    <p>This project was built using React, Material UI, and JavaScript. The application is serverless, with API calls to Chatgpt for text generation and Flux for image generation.
    API calls are also made to AWS Lambda for backend logic and AWS S3 for storage. AWS DynamoDB is used to track story views, likes, and other story metrics. User history is cached on the user's browser.</p>
    <div class="row align-items-start">
        <div class="col-6">
        <p>This website is a platform to create AI generated mad libs stories and share them with others. The story creation process has three steps:
        <br/><br/>1. Enter the title of your story.
        <br/>This triggers an API call to a LLM that generates a story based on your title.
        <br/><br/>2. Enter a variety of nouns, verbs, adjectives etc like you would for a mad libs.
        <br/>After the user submits their story, another API call is made to generate an image that both tells the story and encorporates the user's input.
        <br/><br/>3. Enjoy your story! Share it and make it public or private for other users to enjoy.
        <br/><br/>The target audience for this product was primarily children and families. The user input fields contain a swear word filter and prompts were structred to keep the experience family freindly.
        </p>
        </div>
        <div class="col-6">
        <img src="assets/mad-lib-example.png" class="w-100" style="height: auto;"> 
        </div>
    </div>
    <h1>Demo Video</h1>
</div>
`;

