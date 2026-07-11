function doGet(e) {
  return ContentService.createTextOutput('Google Apps Script is running.').setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  const choice = (e && e.parameter && e.parameter.choice) ? e.parameter.choice : 'No selection';
  const recipient = 'YOUR_EMAIL@gmail.com';
  const subject = 'New invitation response';
  const body = 'Someone chose: ' + choice + '\n\nTime: ' + new Date().toString();

  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    body: body
  });

  return ContentService.createTextOutput(JSON.stringify({ ok: true, choice: choice }))
    .setMimeType(ContentService.MimeType.JSON);
}
