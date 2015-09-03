// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      findPdfs();
    } else if( request.message==="get_bookmarks"){
      console.log(request,sender,sendResponse);
    }
  }
);

function findPdfs() {
  var firstHref = $("a[href^='http']").eq(0).attr("href");
  var pdfs = $("a[href*='pdf']");

  //this return current URL
  var currentURL = window.location.href;
  if (currentURL.indexOf('.pdf') > -1) {
    console.log("its a pdf!");
  }

  //this search for pdfs in page
  if (pdfs.length) {
    pdfs = [].slice.call(pdfs);
    pdfs.forEach((pdf) => {
      console.log(pdf.href);
    });
  }
}