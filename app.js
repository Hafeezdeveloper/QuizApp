 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 import { getDatabase,ref,set,push } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAAp7ZMk9uuTFpvSTIM1W-9OPuxCO9OsaU",
   authDomain: "online-webmobile-f8a21.firebaseapp.com",
   databaseURL: "https://online-webmobile-f8a21-default-rtdb.firebaseio.com",
   projectId: "online-webmobile-f8a21",
   storageBucket: "online-webmobile-f8a21.appspot.com",
   messagingSenderId: "746857652123",
   appId: "1:746857652123:web:bb7629295f2a37f2b48b3e",
   measurementId: "G-2WH901XQH0"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase();


var question_area = document.getElementById("question_area")
var inp_options = document.getElementById("inp_options")
var option_dis = document.getElementById("option_dis")



var arr = []
var arr2 = []

window.render = function (){
    option_dis.innerHTML = ""   

    for(var i=0 ; i < arr.length ;i++){
        option_dis.innerHTML += `<li onclick="selec('${arr[i]}')">${arr[i]}</li>`
        
    }
    
    inp_options.value = ""
}

window.selec = function(e){
    var main = document.getElementById("main")
      main.innerHTML = e  
    arr.push(e)
      main.style.border = "2px solid red"
}

window.options = function (){
    arr.push(inp_options.value)

    render()
}

window.subm  = function(){    
    var obj = {
        opt : arr,
        corr : arr2,
        questions : question_area.value,
    }
console.log(obj.corr)
    const keyRefer = ref(db,`task/`)
    obj.id = push(keyRefer).key


    const refer = ref(db,`task/${obj.id}`)
    set(refer,obj)
    
    question_area.value = ""
    // option_dis.innerHTML = ""   
}
