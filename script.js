function processForm() {
    // Get user inputs
    let symptoms = document.getElementById("symptoms").value;
    let temperature = document.getElementById("temperature").value;
    let paracetamol = document.querySelector('input[name="paracetamol"]:checked').value;
    let weight = document.getElementById("weight").value;
    let eaten = document.querySelector('input[name="eaten"]:checked').value;
    let water = document.getElementById("water").value;

    // Calculate recommendations based on inputs
    let resultText = "Based on your input, here is our recommendation: <br>";

    // Dosage recommendation logic
    let dosage = 500; // default dosage
    if (weight === "more_100") {
        dosage = 650; // higher dosage for heavier individuals
    }

    // Timing suggestion based on eating
    let timing = (eaten === "no") ? "Please eat something before taking Kapton." : "You can take the tablet now.";

    // Water intake advice
    let hydration = (water === "less_3") ? "Please drink more water before taking Kapton." : "You are hydrated enough.";

    // Fever logic
    if (temperature === "above_102") {
        resultText += "Your fever is quite high. We recommend consulting a doctor. <br>";
    }

    // Recommendation result
    resultText += `Recommended dosage: ${dosage}mg <br>`;
    resultText += `${timing} <br>`;
    resultText += `${hydration} <br>`;

    // Add Kapton to cart logic (simulation)
    resultText += `<br><strong>Kapton paracetamol has been added to your cart.</strong>`;

    // Display the result
    document.getElementById("result").innerHTML = resultText;
    document.getElementById("result").style.display = "block";
}
