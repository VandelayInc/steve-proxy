
module.exports = (title, body, scripts) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel='stylesheet' href='../../style.css'>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
      <title>${title}</title>
    </head>
    <body>
    ${body}
    </div>
    </body>
    ${scripts}
  </html>
`;
