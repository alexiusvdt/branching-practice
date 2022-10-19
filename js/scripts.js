window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    let canVote = document.getElementById("voting");
    canVote.setAttribute("class", "hidden");
    let canNotVote = document.getElementById("underage");
    canNotVote.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);

    if (age >= 18) {
      canVote.removeAttribute("class");
    } else {
      canNotVote.removeAttribute("class");
    } 
  };
};
