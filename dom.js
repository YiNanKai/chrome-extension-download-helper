function getLinks(r, s) {
  var links = document.querySelectorAll("a");
  var results = [];
  var seenLinks = {};
  
  for (var i = 0; i < links.length; i++) {

    if (links[i].href.indexOf(".pdf") !== -1 || links[i].href.indexOf(".docx") !== -1 || links[i].href.indexOf(".ppt") !== -1) {
      var type = "";
      if (links[i].href.indexOf(".pdf") !== -1) {
        type = "pdf";
      } else if (links[i].href.indexOf(".docx") !== -1) {
        type = "docx";
      } else if (links[i].href.indexOf(".ppt") !== -1) {
        type = "ppt";
      }
      var obj = {};
      obj.url = links[i].href;
      obj.type = type;
      obj.text = links[i].innerHTML;

      results.push(obj);
    }

  }
  return results;
};

chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
  
  sendResponse(getLinks(request, sender));
});