window.onload = () => {
      var config = {
        apiKey: "AIzaSyAcnjtDLee5E2kTULRDWI1bHzjXOhre9jE",
        authDomain: "rnaosx.firebaseapp.com",
        databaseURL: "https://rnaosx.firebaseio.com",
        projectId: "rnaosx",
        storageBucket: "rnaosx.appspot.com",
        messagingSenderId: "430779929325",
        appId: "1:430779929325:web:b2a1506db556a9e33df2e4",
      };


    firebase.initializeApp(config);

    var database = firebase.database();
    var ref = firebase.database().ref();
    ref.on("value", function (snapshot) {
       var a = snapshot.val().locations;

        for (var key in a) {
            var value = a[key];
            console.log(value.longitudine);


            document.getElementById('all').innerHTML +=`
            <div class="card" style="width:90%;margin:30px auto;">
                    <div class="card-body">
                        <h5 class="card-title">Tourist Endangered!</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Here are the coordinates</h6>
                        <p class="card-text">Latitude : ${value.latitudine}  and Longitudine : ${value.longitudine}</p>
                       <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${value.latitudine},${value.longitudine}+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                    </div>
            </div>` ;

            

        }

    }, function (error) {
        console.log("Error: " + error.code);
    });

};