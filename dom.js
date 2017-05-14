console.log("in dom.js")
function getLinks(r, s) {
  console.log(r, s);
  var links = document.querySelectorAll("a");
  var results = [];
  var seenLinks = {};
  // for (var i  = 0; i < links.length; ++i) {
  //   var text = links[i].textContent;
  //   if (text.length > 100)
  //     text = text.substring(0, 100) + "...";
  //   var link = links[i].href.replace(/(.*)#?/, "$1");
  //   if (seenLinks[link])
  //     continue;
  //   seenLinks[link] = 1;
  //   results.push({ href: link, text: text });
  // }
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
      // var outer = links[i].href;

      results.push(obj);
    }

  }
  return results;
};

chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
  console.log(sender);
  console.log(request);
  sendResponse(getLinks(request, sender));
});