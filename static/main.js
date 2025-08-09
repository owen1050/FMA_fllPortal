document.getElementById("addTeamBtn").addEventListener("click", function() {
    const container = document.getElementById("teamNumbersContainer");
    const row = document.createElement("div");
    row.classList.add("team-number-row");

    const input = document.createElement("input");
    input.type = "number";
    input.name = "teamNumbers[]";
    input.placeholder = "Enter team number";
    input.required = true;

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.classList.add("remove-team");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function() {
        removeTeam(removeBtn);
    };

    row.appendChild(input);
    row.appendChild(removeBtn);
    container.appendChild(row);
});

function removeTeam(button) {
    button.parentElement.remove();
}

document.getElementById("fllForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const values = {};

    for (const [key, value] of formData.entries()) {
        if (key === "teamNumbers[]") {
            if (!values.teamNumbers) values.teamNumbers = [];
            values.teamNumbers.push(value);
        } else {
            values[key] = value;
        }
    }

    console.log("Form Submission Data:", values);
});
