// Event list in one place
const events = [
  "Event A - Philadelphia",
  "Event B - Trenton",
  "Event C - Wilmington",
  "Event D - Harrisburg",
  "Event E - Baltimore"
];

// Populate dropdowns on page load
document.addEventListener("DOMContentLoaded", () => {
  const selects = ["pref1", "pref2", "pref3", "pref4"];

  selects.forEach(selectId => {
    const selectElement = document.getElementById(selectId);
    selectElement.innerHTML = `<option value="">-- Select an Event --</option>`; // default

    events.forEach(eventName => {
      const option = document.createElement("option");
      option.value = eventName;
      option.textContent = eventName;
      selectElement.appendChild(option);
    });
  });
});

function submitForm() {
  const email = document.getElementById("email").value;
  const teamNumber = document.getElementById("teamNumber").value;
  const prefs = [
    document.getElementById("pref1").value,
    document.getElementById("pref2").value,
    document.getElementById("pref3").value,
    document.getElementById("pref4").value
  ];

  console.log("Form Submitted:");
  console.log("Email:", email);
  console.log("Team Number:", teamNumber);
  console.log("Preferences:", prefs);

  alert("Form submitted successfully!");
}
