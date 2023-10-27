# ajax-crash

# URL `xhr.open('TYPE','URL',Async)`

- Type: get hoac post
- url: url gui request
- Async: true - bat dong bo; false - dong bo

# ReadyState

- 0: chua tao ket noi toi server
- 1: bat dau thiet lap ket noi toi server
- 2: server da nhan duoc yc
- 3: server dang xu ly yc
- 4: server da hoi dap yc

# cac gia tri cua status

- nhom thong tin: 100,101,103
- nhom thanh cong - successful: 200->206
- nhom chuyen huong - Redirection: 300->308
- Nhom loi client - Client error: 400->403,404->417;
  - 403: server tu choi tra loi
  - 404: khong tim thay noi dung
- nhom loi server - Server error: 500->505,511
  - co nghia la co code gay ra loi hoac xung dot do web server

# gui request

- gui khong bao gom du lieu
  - `xhr.send()`
- gui kem theo du lieu form
  - `xhr.send(form_data)`
- gui theo dang chuoi key=value
  - `xhr.send('key1=value1&key2=value2')`
