import React from "react";


export default function Calculator() {
return (
  <div class="wrapper">

	<h1>Grade Calculator</h1>

	<div class="directions">Input your grades separated by commas:</div>

	<input id="yourgrades" type="text" />
	<input id="submitbutton" type="button" value="Calculate" onClick="submit();"/>

	<p>Your grades from high to low:</p>
	<div id="grades"></div>

	<p>Your average grade is:</p>
	<div id="avg_grades"></div>

	<p>Your final grade is:</p>
	<div id="final_grade"></div>

</div>
)
}