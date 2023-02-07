if (typeof jQuery != 'undefined') {
    console.log("jQuery library is loaded!");
} else {
    console.error("jQuery library is not found!");
} // test to see if the library is working


$(document).ready(function () {
    $('#calculate').click(function () {
        // Get input values
      
        var Assignment_Percent = parseFloat($("input[name='Assignments']").val());
        var Group_Percent = parseFloat($("input[name='Group']").val());
        var Quiz_Percent = parseFloat($("input[name='Quizzes']").val());
        var Midterm_Percent = parseFloat($("input[name='Midterm']").val());
        var Final_Percent = parseFloat($("input[name='Final']").val());
        var INTEX_Percent = parseFloat($("input[name='INTEX']").val());

        var Weight1 = 50;
        var Weight2 = 10;

        // Calculate weighted average
        var average = (Assignment_Percent * Weight1 +
            Group_Percent * Weight2 + Quiz_Percent * Weight2 + Midterm_Percent * Weight2 +
            Final_Percent * Weight2 + 
            INTEX_Percent * Weight2 ) / 100;

        // Round to two decimal places
        average = average.toFixed(2);

        // Assign letter grade
        var letterGrade;
        if (average >= 94) {
            letterGrade = "A";
        } else if (average >= 90) {
            letterGrade = "A-";
        } else if (average >= 87) {
            letterGrade = "B+";
        } else if (average >= 84) {
            letterGrade = "B";
        } else if (average >= 80) {
            letterGrade = "B-";
        } else if (average >= 77) {
            letterGrade = "C+";
        } else if (average >= 74) {
            letterGrade = "C";
        } else if (average >= 70) {
            letterGrade = "C-";
        } else if (average >= 67) {
            letterGrade = "D+";
        } else if (average >= 64) {
            letterGrade = "D";
        } else if (average >= 60) {
            letterGrade = "D-";
        } else {
            letterGrade = "E";
        }

        // Display result
        $("#result").text("Overall Grade: " + average + "% (" + letterGrade + ")");
    });
});