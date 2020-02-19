//REMEMBER TO CHANGE DEFAULT COMPETITION BETWEEN EVENT

function increment(increaseValue, tagID) {
    var currentValue = Number(document.getElementById(tagID).value);
    console.log(currentValue);
    if (currentValue + increaseValue < 0) {
        document.getElementById(tagID).value = 0;
    } else {
        if (currentValue + increaseValue <= document.getElementById(tagID).max || document.getElementById(tagID).max == 0) {
            document.getElementById(tagID).value = currentValue + increaseValue;
        }
    }

    console.log(document.getElementById(tagID).value);
    console.log(document.getElementById(tagID).max)
}

function autoOrTeleop(state) {
    if (state == 'auto') {
        console.log(document.getElementById(autoCollapser).data - toggle);
    }
}

function inputOtherCompetition(name) {
    if (name == 'Other')
        document.getElementById('otherCompetitionInput').innerHTML = 'Other Competition: <input type="text" id="otherCompetition" />';
    else
        document.getElementById('otherCompetitionInput').innerHTML = '';
}

function writeNewPost() {

    //  Pre-Match Inputs
    var scoutName = document.getElementById("scoutName").value;
    if (scoutName == null || scoutName == "")
        scoutName = "defaultScoutName";
    var scoutTeam = document.getElementById("scoutTeam").value;
    if (scoutTeam == null || scoutTeam == "")
        scoutTeam = "9999";
    var competition = document.getElementById("competition").value;
    if (competition == "Other")
        competition = document.getElementById("otherCompetition").value;
    if (competition == null || competition == "" || competition == "Select Competition")
        competition = "defaultCompetition"
    var alliance = document.getElementsByName('alliance');
    var allianceValue;
    for (var i = 0; i < alliance.length; i++) {
        if (alliance[i].checked) {
            allianceValue = alliance[i].value;
            break;
        }
    }
    if (allianceValue == null || allianceValue == "")
        allianceValue = "defaultAlliance";
    var matchNumber = document.getElementById("matchNumber").value;
    if (matchNumber == null || matchNumber == "")
        matchNumber = "9999";
    var teamNumber = document.getElementById("teamNumber").value;
    if (teamNumber == null || teamNumber == "")
        teamNumber = "9999";

    //  Autonomous Inputs
    var startLocation = document.getElementsByName("startLocation");
    var startLocationValue;
    for (var i = 0; i < startLocation.length; i++) {
        if (startLocation[i].checked) {
            console.log(startLocation[i].checked)
            startLocationValue = startLocation[i].value;
            break;
        }
    }
    if (startLocationValue == null || startLocationValue == "")
        startLocationValue = "defaultStartLocation";
    //auto
    var autoRunArray = document.getElementsByName("autoRun");
    console.log(autoRunArray)
    var autoRun;
    for (var i = 0; i < autoRunArray.length; i++) {
        if (autoRunArray[i].checked) {
            autoRun = autoRunArray[i].value;
            break;
        }
    }
    if (autoRun == null || autoRun == "") autoRun = 0;
    var autoBallsMissed = document.getElementById("autoBallsMissed").value;
    if (autoBallsMissed == null || autoBallsMissed == "")
        autoBallsMissed = 0;
    var autoBallsLow = document.getElementById("autoBallsLow").value;
    if (autoBallsLow == null || autoBallsLow == "")
        autoBallsLow = 0;
    var autoBallsOuter = document.getElementById("autoBallsOuter").value;
    if (autoBallsOuter == null || autoBallsOuter == "")
        autoBallsOuter = 0;
    var autoBallsInner = document.getElementById("autoBallsInner").value;
    if (autoBallsInner == null || autoBallsInner == "")
        autoBallsInner = 0;

    //  Teleop Inputs
    var teleopBallsMissed = document.getElementById("teleopBallsMissed").value;
    if (teleopBallsMissed == null || teleopBallsMissed == "")
        teleopBallsMissed = 0;
    var teleopBallsLow = document.getElementById("teleopBallsLow").value;
    if (teleopBallsLow == null || teleopBallsLow == "")
        teleopBallsLow = 0;
    var teleopBallsOuter = document.getElementById("teleopBallsOuter").value;
    if (teleopBallsOuter == null || teleopBallsOuter == "")
        teleopBallsOuter = 0;
    var teleopBallsInner = document.getElementById("teleopBallsInner").value;
    if (teleopBallsInner == null || teleopBallsInner == "")
        teleopBallsInner = 0;

 var controlPanelPos = document.getElementById("controlPanelPosition").checked;
     var controlPanelRot = document.getElementById("controlPanelRotation").checked;
    var playedDefense = document.getElementById("playedDefense").checked;

    //needs to be redone, then ready for testing
    var robotEndPosition = document.getElementsByName("robotEndPosition");
    console.log(robotEndPosition)
    var robotEndPositionValue;
    for (var i = 0; i < robotEndPosition.length; i++) {
        if (robotEndPosition[i].checked) {
            robotEndPositionValue = robotEndPosition[i].value;
            break;
        }
    }
    if (robotEndPositionValue == null || robotEndPositionValue == "")
        robotEndPositionValue = "defaultPosition";
    var balancing = document.getElementById("balancing").checked;
    var attemptedClimb = document.getElementById("attemptedClimb").checked;

    var assistedClimbs = document.getElementById("assistedClimbs").value;
    if (assistedClimbs == null || assistedClimbs == "")
        assistedClimbs = 0;
    var everInactive = document.getElementById("everInactive").checked;
    var comments = document.getElementById("comments").value;

    var postData = {
        "Data": {
            "DateTime": Date(),
            "ScoutName": scoutName,
            "ScoutTeam": scoutTeam,
            "Competition": competition,
            "Alliance": allianceValue,
            "MatchNumber": matchNumber,
            "TeamNumber": teamNumber,
            "StartLocation": startLocationValue,

            "autoRun": autoRun,
            "autoBallsMissed": autoBallsMissed,
            "autoBallsLow": autoBallsLow,
            "autoBallsOuter": autoBallsOuter,
            "autoBallsInner": autoBallsInner,

            "teleopBallsMissed": teleopBallsMissed,
            "teleopBallsLow": teleopBallsLow,
            "teleopBallsOuter": teleopBallsOuter,
            "teleopBallsInner": teleopBallsInner,
            "controlPanelPos":controlPanelPos,
            "controlPanelRot":controlPanelRot,
            "PlayedDefense": playedDefense,

            "RobotEndPosition": robotEndPositionValue,
            "Balancing":balancing,
            "AttemptedClimb": attemptedClimb,
            "AssistedClimbs": assistedClimbs,
            "EverInactive": everInactive,
            "Comments": comments

        }
    }

    console.log(postData);
    postData = JSON.stringify(postData);

        var xhr = new XMLHttpRequest();
        var url ="https://script.google.com/macros/s/AKfycbwrXXbL5-hBep_iiX-kbtTTCvBHyyQXt_K35RNnWILrEkk6cCE/exec";
        console.log(teamNumber%2 == 1);
        xhr.open("POST", url, true);
        xhr.send(postData);



    window.alert("Thank you for submitting!");

}
