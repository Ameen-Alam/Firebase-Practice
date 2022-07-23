// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIgXhGsj-8HtHKQAsbCWu2di_cLjiz6V4",
    authDomain: "adminpannel-2625e.firebaseapp.com",
    databaseURL: "https://adminpannel-2625e.firebaseio.com",
    projectId: "adminpannel-2625e",
    storageBucket: "adminpannel-2625e.appspot.com",
    messagingSenderId: "388760984590",
    appId: "1:388760984590:web:cbf7be52964d07e9a6b05f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


        
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
            let setData = JSON.stringify(data.val())
            localStorage.setItem("data", setData)
            window.location = "home.html"

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
            localStorage.removeItem("data")
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