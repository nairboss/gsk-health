// Function to handle page navigation
function nextPage(pageNumber) {
    // Hide all pages
    for (let i = 1; i <= 7; i++) {
        document.getElementById(`page${i}`).style.display = 'none';
    }
    // Show the selected page
    document.getElementById(`page${pageNumber}`).style.display = 'block';
}

// Function to display weight value dynamically from the slider
function showWeightValue(value) {
    document.getElementById("weightValue").innerText = value;
}

// Function to process form inputs and display the final recommendation
function processForm() {
    // Get user inputs for symptoms
    let symptoms = [];
    if (document.getElementById("symptom-fever").checked) symptoms.push("Fever");
    if (document.getElementById("symptom-headache").checked) symptoms.push("Headache");
    if (document.getElementById("symptom-body-aches").checked) symptoms.push("Body aches");
    if (document.getElementById("symptom-cold").checked) symptoms.push("Cold/flu-like symptoms");
    if (document.getElementById("symptom-sore-throat").checked) symptoms.push("Sore throat");

    let temperature = document.getElementById("temperature").value;
    let paracetamol = document.querySelector('input[name="paracetamol"]:checked').value;
    let weight = document.getElementById("weight").value;
    let eaten = document.querySelector('input[name="eaten"]:checked').value;
    let water = document.getElementById("water").value;

    // Initialize the recommendation message
    let resultText = "<p>Based on your input, here is our recommendation:</p>";

    // Dosage recommendation logic based on weight
    let dosage = 500; // default dosage
    if (weight >= 80) {
        dosage = 650; // higher dosage for heavier individuals
    }

    // Fever severity influences timing and dosage
    let frequency = "twice a day"; // default frequency
    let timing = "after lunch and dinner"; // default timing
    if (temperature === "above_102") {
        resultText += "<p>Your fever is quite high. We recommend consulting a doctor.</p>";
        frequency = "three times a day";
        timing = "after every meal (breakfast, lunch, and dinner)";
    }

    // Modify dosage and warning based on prior paracetamol intake
    if (paracetamol === "yes") {
        resultText += "<p>You have already taken paracetamol in the last 24 hours. Please ensure you do not exceed the maximum daily dosage of 2000mg.</p>";
    }

    // Hydration advice based on water intake
    let hydration = (water === "less_3") ? "Please drink more water before taking Kapton." : "You are hydrated enough.";

    // Timing suggestion based on eating status
    let mealAdvice = (eaten === "no") ? "Please eat something before taking Kapton." : "You can take the tablet now.";

    // Final recommendation output in bullet points
    resultText += `<ul>
                    <li><strong>Recommended dosage:</strong> ${dosage}mg, ${frequency}, ${timing}</li>
                    <li>${mealAdvice}</li>
                    <li>${hydration}</li>
                  </ul>`;

    // Display the recommendation
    document.getElementById("recommendation").innerHTML = resultText;

    // Show the result page
    document.getElementById("result").style.display = 'block';

    // Show the cart pop-up message
    document.getElementById("cartPopup").style.display = 'block';

    // Hide all previous pages
    for (let i = 1; i <= 7; i++) {
        document.getElementById(`page${i}`).style.display = 'none';
    }
}
