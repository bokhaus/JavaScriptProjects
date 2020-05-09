function loadFileAsText(){
    let myFile = document.getElementById("myFile").files[0];

    let fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        let textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };

    fileReader.readAsText(myFile, "UTF-8");
  }
  function savefile(){
      let content = document.getElementById("inputTextToSave").value;
      uriContent = "data:application/octet-stream," + encodeURIComponent(content);
      document.getElementById("dlink").innerHTML = "<a href=" + uriContent + " download=\"savedfile.txt\">Here is the download link</a>";
  }