$(document).ready(function () {
    $("#calculate").click(function () {
        // Get input values
        var category1Percent = parseFloat($("#category1Percent").val());
        var category2Percent = parseFloat($("#category2Percent").val());
        var category3Percent = parseFloat($("#category3Percent").val());
        var category1Weight = parseFloat($("#category1Weight").val());
        var category2Weight = parseFloat($("#category2Weight").val());
        var category3Weight = parseFloat($("#category3Weight").val());

        // Calculate weighted average
        var average = (category1Percent * category1Weight +
            category2Percent * category2Weight +
            category3Percent * category3Weight) / 100;

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