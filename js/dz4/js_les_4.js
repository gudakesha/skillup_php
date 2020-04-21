
$(document).ready(function(event) {
  let userForm=$('#userForm'),
      button=userForm.find('button#sendForm'),
      name=userForm.find('#nameInput'),
      lname=userForm.find('#lastNameInput'),
      birthday=userForm.find('#birthDayInput'),
      email=userForm.find('#InputEmail'),
      login=userForm.find('#loginInput'),
      password=userForm.find('#passwordInput');

    button.on('click',function () {

        xhr = new window.XMLHttpRequest();
        xhr.open('POST', 'post.php', true);

        let data= {
            [name.attr('name')]: name.val(),
            [lname.attr('name')]: lname.val(),
            [birthday.attr('name')]: birthday.val(),
            [email.attr('name')]: email.val(),
            [login.attr('name')]: login.val(),
            [password.attr('name')]: password.val(),
        };
        /* или так
        let data= {};
        $('#userForm').find('input').each(function() {
             $data[this.name] = $(this).val();
         });
         */

        xhr.send(data);

        xhr.onerror = (error) => {
            console.log("Ошибка отправки")
        };
        
    });
});







