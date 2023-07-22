const fs = require("fs");

window.onload = load_workouts();

document.getElementById("exerciseSelectButton").onclick = display_exercises;
document.getElementById("submitExercise").onclick = submit_exercise;

function get_data_object() {
    fs.readFile("data.txt", "utf-8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        };    

        if (data === '') {
            data = '[]';
        };
        const jsonData = JSON.parse(data);
        return jsonData;
    });
}

function load_workouts() {
    dataObject = get_data_object();
    dataObject.forEach(function (workout) {
        workoutDate = workout.Date;
        const workoutElement = document.createElement("option");
        const textNode = document.createTextNode(workoutDate);
        workoutElement.appendChild(textNode);

        document.getElementById("workoutList").appendChild(workoutElement);
    });
}

function submit_exercise () {
    const exerciseName = document.getElementById("exerciseName").value;
    dataObject = get_data_object();
    //submit exercise to a workout here
}

function display_exercises () {
    document.getElementById("selectionBox").innerHTML = "";
    exerciseArray = get_exercises();
    exerciseArray.forEach(function (exercise) {
        const exerciseElement = document.createElement("button");
        const textNode = document.createTextNode(exercise);
        exerciseElement.appendChild(textNode);
        exerciseElement.classList.add("exerciseButton");

        document.getElementById("selectionBox").appendChild(exerciseElement);
    });
    
}

function get_exercises () {
    dataObject = get_data_object();
    const exerciseNameList = [];
    dataObject.forEach(function (workout) {
        workout.Exercises.forEach(function (exercise) {
            exerciseNameList.push(exercise.Name)
        });
    });

    //convert list into a set to remove duplicates


}