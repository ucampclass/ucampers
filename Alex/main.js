function registrar () {
    const name = document.getElementById('exampleInputName').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    const registry = {
        name: name,
        email: email,
        password: password
    };

    console.log(registry);
}