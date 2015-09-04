// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      findPdfs();
    } else if( request.message==="get_bookmarks"){
      printURLlinks(request.bookmarks);
    }
  }
);

function findPdfs() {
  var firstHref = $("a[href^='http']").eq(0).attr("href");
  var pdfs = $("a[href*='pdf']");

  //this return current URL
  var currentURL = window.location.href;
  if (currentURL.indexOf('.pdf') > -1) {
    console.log("it's a pdf!");
  }

  //this search for pdfs in page
  else if (pdfs.length) {
    pdfs = [].slice.call(pdfs);
    pdfs.forEach((pdf) => {
      console.log(pdf.href);
    });
  }

  else {
    console.log("no pdf found!");
  }

}

function printURLlinks(bookmarks){
  console.log(`found ${bookmarks.length} pdfs in bookmarks`);
  bookmarks.forEach(function(bookmark){
    console.log(`${bookmark.title}, link: ${bookmark.url}`);
  })
}