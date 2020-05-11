//JQuery

$("#save-btn").click(function() {
    var blob = new Blob(["test text"], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "testfile1.txt");
  });