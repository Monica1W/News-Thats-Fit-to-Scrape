<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8">
    <title>Scraping With Mongoose</title>
    <style>
      body { background-color: #F2F6D0 }
      #wrapper {
        width: 960px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 5%;
      }
      #articles {
        display: inline-block;
        overflow: auto;
        width: 60%;
        height: 700px;
      }
      #notes {
        float: right;
        width: 30%;
      }
      textarea, input {
        display: block;
        width: 100%;
        background-color: #FCF5C7;
      }
      input {
        height: 36px;
        font-size: 24px;
      }
      textarea {
        height: 200px;
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
      <h1>Note Scraper</h1>
      
      <div id="articles"></div>
      <div id="notes"></div>
    </div>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>
