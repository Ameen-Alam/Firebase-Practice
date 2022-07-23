
let register = () => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            let user = {
                username: username.value,
                email: email.value,
                password: password.value
            }

            firebase.database().ref(`users/${res.user.uid}`).set(user)
                .then(() => {
                    alert("new user is registered")
                    window.location = "login.html"
                })

        })
        .catch((err) => {
            console.log("err=>", err)
        })
}


let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            firebase.database().ref(`users/${res.user.uid}`).once('value', (data) => {
                alert("successfully logged in")
                window.location = "home.html"
                console.log(data.val())
            })
        })
        .catch((err) => {
            console.log('err=>', err)
        })

}

let logout = () => {
    firebase.auth().signOut()
        .then(() => {
            alert('Signed Out');
            window.location = "login.html"
        })
        .catch((err) => {
            console.log('err=>', err)
        })

}


// let abc = new Promise(() => {

// })


// abc
//     .then(() => {

//     })
//     .catch(() => {

//     })