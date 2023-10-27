var url = "https://jsonplaceholder.typicode.com/posts";

// var output = document.getElementById("output");

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
let form_data = new FormData();

//them data vao form
form_data.append("username", "Poo Phoong");
form_data.append("password", "abc123");

//cai dat time toi da cho response sau khi da gui Request theo millisecond
xhr.timeout = 30000; //30s

//ham xu ly khi timeout xay ra
xhr.ontimeout = function () {
  //logic
  console.log(">> Du lieu dang bi gian doan.");
};

/**
 * can thiep vao Request Header
 * dung cu phap: xhr.setRequestHeader('Key','Value');
 */

xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("tokenAuth", "abcxyz123");
