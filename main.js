
function problem(a, b, type, result, response) {
    this.a = a;
    this.b = b;
    this.type = type;
    this.result = result;
    this.response = response;
}

var generate_problem = function(problem_setup, problem) {
    problem.a = Math.floor(Math.random() * problem_setup.max_num);
    problem.b = Math.floor(Math.random() * problem_setup.max_num);
    problem.type = Math.floor(Math.random() * 10) % 2;

    switch(problem.type) {
      case 1:
        problem.type = "+";
        break;
      default:
        problem.type = "-";
        break;
    }
    console.log("a: " + problem.a + " b: " + problem.b + "type:" + problem.type);

    var problem_element = document.getElementById("problem");

    problem_element.textContent = problem.a + " " + problem.type + " " + problem.b;

    window.requestAnimationFrame(get_response);
}

var get_response = function() {
  //var response = prompt("type the result");
  return Number(document.getElementById("response_input").value);

}

var evaluate_response = function(problem, response) {
  var result = false;
  switch (problem.type) {
    case "+":
      if((problem.a + problem.b) == response)
        result = true;

    case "-":
      if((problem.a - problem.b) == response)
        result = true;
  }

  return result;
}

var display_results = function(results) {
  var results_element = document.getElementById("result_area");
  var content;
  var i;
  var correct_answers = 0;
  for(i=0;i<results.length;i++) {
    var p = document.createElement("p");
    content = document.createTextNode(results[i].a + " " + results[i].type + " " + results[i].b + " = " + results[i].response);
    p.appendChild(content);
    if(results[i].result == true) {
      correct_answers++;
    }
    else {
      p.style.color = "red";
    }
    results_element.appendChild(p);
  }
  results_element.innerHTML += "<br>";
  var p = document.createElement("p");
  content = document.createTextNode("You got " + correct_answers + " out of " + results.length + " right.");
  p.appendChild(content);
  results_element.appendChild(p);
}
