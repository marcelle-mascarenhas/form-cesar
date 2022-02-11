(function () {
    var form = document.querySelector('#teste');
    var fields = {};

    var enterField = function (name) {
        fields[name] = new Date().getTime();
    }

    var leaveField = function (e) {
        var timeSpent;
        var fieldName = e.target.name;
        var leaveType = e.type;
        if (fields.hasOwnProperty(fieldName)) {

            timeSpent = new Date().getTime() - fields[fieldName];

            window.dataLayer.push({
                'event': 'fieldTiming',
                'timingName': fieldName,
                'timingLabel': leaveType,
                'timingValue': timeSpent
            });

            delete fields[fieldName];
        }
    }

    if (form) {
        form.addEventListener('focus', function (e) { enterField(e.target.name); }, true);
        form.addEventListener('blur', function (e) { leaveField(e); }, true);
    }
})();