function doGet(e) {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function getRecords()
{
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var recordsSheet = ss.getSheetByName("Student");
  var recordsRange = recordsSheet.getDataRange();
  var recordsValues = recordsRange.getValues();  
  return recordsValues;

}
