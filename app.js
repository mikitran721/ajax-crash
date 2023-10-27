var url = "https://jsonplaceholder.typicode.com/posts";
var output = document.getElementById("output");

var xhr = new XMLHttpRequest();

/* xhr.open("GET", url, true);
xhr.onreadystatechange = handleResult;
xhr.send();

function handleResult() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    output.innerHTML = xhr.responseText;
  }
}
 */

xhr.open("GET", url, true);

//cai dat event listener
xhr.onreadystatechange = function () {
  //kiem tra trang thai dung
  if (xhr.readyState == 4 && xhr.status == 200) {
    //nhan kq response tu server va xu ly tiep
    var data = xhr.responseText;
    console.log(">>data response: ", data);
  }
};

//bat dau gui request;
xhr.send();

//form du lieu
