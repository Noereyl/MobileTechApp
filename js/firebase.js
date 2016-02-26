var myFirebase = new Firebase("https://imoviesapp.firebaseio.com/");

var	targetChildRef = myFirebase.child('storageList');

$('#pword').keypress(function (e) {
    if(e.keyCode == 13) {
        var _fname = $('#fname').val();
        var _lname = $('#lname').val();
        var _mname = $('#mname').val();
        var _uname = $('#uname').val();
        var _address = $('#address').val();
        var _pass = $('#pword').val();
        var _gender = $('#gender').val();
        targetChildRef.push({
            Firstname: _fname,
            Middlename: _mname,
            Lastname: _lname,
            Gender: _gender,
            Address: _address,
            Username: _uname,
            Pass: _pass
        });
        $('#fname').val('');
        $('#lname').val('');
        $('#mname').val('');
        $('#gender').val('');
        $('#address').val('');
        $('#uname').val('');
        $('#pword').val('');
    }
});
