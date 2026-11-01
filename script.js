
console.log("Welcome to TrustBridge!");

let abilityScore = 80;
let willingnessScore = 75;
let stabilityScore = 80;

console.log(abilityScore);
console.log(willingnessScore);
console.log(stabilityScore);


function calculateScore() {

    let ability = Number(document.getElementById("ability").value);
    let willingness = Number(document.getElementById("willingness").value);
    let stability = Number(document.getElementById("stability").value);

    // Step 1: Check empty fields
    if (
        document.getElementById("ability").value === "" ||
        document.getElementById("willingness").value === "" ||
        document.getElementById("stability").value === ""
    ) {
        document.getElementById("result").innerText =
            "Please enter all three scores.";
        return;
    }

    // Step 2: Validate score range
    if (
        ability < 0 || ability > 100 ||
        willingness < 0 || willingness > 100 ||
        stability < 0 || stability > 100
    ) {
        document.getElementById("result").innerText =
            "Please enter scores between 0 and 100.";
        return;
    }

    // Step 3: Calculate contributions
    let abilityContribution = ability * 0.40;
    let willingnessContribution = willingness * 0.35;
    let stabilityContribution = stability * 0.25;

    // Step 4: Calculate final score
    let finalScore =
        abilityContribution +
        willingnessContribution +
        stabilityContribution;
        let riskCategory = "";
        // Update Trust Score on Dashboard

document.getElementById("dashTrustScore").innerText =
    finalScore.toFixed(2) + " / 100";

if (finalScore >= 80) {
    riskCategory = "High Demo Score";
} else if (finalScore >= 60) {
    riskCategory = "Medium Demo Score";
} else {
    riskCategory = "Low Demo Score";
}

    // Step 5: Display score breakdown
    document.getElementById("result").innerHTML = `
        <h3>Trust Score: ${finalScore.toFixed(2)} / 100</h3>
        <p>Risk Category: ${riskCategory}</p>

        <h4>Score Breakdown</h4>

        <div class="score-item">
            <p>Ability to Repay: ${ability}</p>
            <div class="progress">
                <div class="progress-fill" style="width: ${ability}%"></div>
            </div>
            <small>Contribution: ${abilityContribution.toFixed(2)}</small>
        </div>

        <div class="score-item">
            <p>Willingness to Repay: ${willingness}</p>
            <div class="progress">
                <div class="progress-fill" style="width: ${willingness}%"></div>
            </div>
            <small>Contribution: ${willingnessContribution.toFixed(2)}</small>
        </div>

        <div class="score-item">
            <p>Stability of Activity: ${stability}</p>
            <div class="progress">
                <div class="progress-fill" style="width: ${stability}%"></div>
            </div>
            <small>Contribution: ${stabilityContribution.toFixed(2)}</small>
        </div>
    `;
}

function resetCalculator() {
    document.getElementById("ability").value = "";
    document.getElementById("willingness").value = "";
    document.getElementById("stability").value = "";

    document.getElementById("result").innerHTML = "";
}

function submitApplication() {

    let name = document.getElementById("borrowerName").value.trim();
    let business = document.getElementById("businessName").value.trim();
    let type = document.getElementById("businessType").value.trim();
    let experience = document.getElementById("businessExperience").value;
    let income = document.getElementById("monthlyIncome").value;
    let expenses = document.getElementById("monthlyExpenses").value;
    let consent = document.getElementById("consent").checked;

    if (
        name === "" || business === "" || type === "" ||
        experience === "" || income === "" || expenses === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    if (
        Number(experience) < 0 ||
        Number(income) < 0 ||
        Number(expenses) < 0
    ) {
        alert("Please enter valid positive values.");
        return;
    }

    if (!consent) {
        alert("Please provide your consent first.");
        return;
    }
    if (Number(income) === 0) {
    alert("Monthly income must be greater than zero.");
    return;
}

if (Number(expenses) > Number(income)) {
    alert("Warning: Your business expenses are higher than your income. Your cash flow will be negative.");
}
    
let borrower = {
    name: name,
    businessName: business,
    businessType: type,
    experience: Number(experience),
    monthlyIncome: Number(income),
    monthlyExpenses: Number(expenses)
};

console.log(borrower);

let monthlySavings =
    borrower.monthlyIncome - borrower.monthlyExpenses;

console.log("Monthly Savings:", monthlySavings);

let savingsPercentage = 0;

if (borrower.monthlyIncome > 0) {
    savingsPercentage =
        (monthlySavings / borrower.monthlyIncome) * 100;
}

console.log("Savings Percentage:", savingsPercentage.toFixed(2) + "%");
// Calculate Demo Ability Indicator

let abilityIndicator = 0;

if (borrower.monthlyIncome <= 0) {
    abilityIndicator = 0;
} else if (savingsPercentage >= 40) {
    abilityIndicator = 90;
} else if (savingsPercentage >= 30) {
    abilityIndicator = 80;
} else if (savingsPercentage >= 20) {
    abilityIndicator = 70;
} else if (savingsPercentage >= 10) {
    abilityIndicator = 60;
} else if (savingsPercentage >= 0) {
    abilityIndicator = 50;
} else {
    abilityIndicator = 30;
}

console.log("Demo Ability Indicator:", abilityIndicator);
// Calculate Demo Willingness Indicator

let willingnessIndicator = 0;

if (borrower.experience >= 36) {
    willingnessIndicator = 90;
} else if (borrower.experience >= 24) {
    willingnessIndicator = 80;
} else if (borrower.experience >= 12) {
    willingnessIndicator = 70;
} else if (borrower.experience >= 6) {
    willingnessIndicator = 60;
} else {
    willingnessIndicator = 40;
}

console.log("Demo Willingness Indicator:", willingnessIndicator);
// Calculate Demo Stability Indicator

let stabilityIndicator = 0;

if (borrower.experience >= 36) {
    stabilityIndicator = 95;
} else if (borrower.experience >= 24) {
    stabilityIndicator = 85;
} else if (borrower.experience >= 12) {
    stabilityIndicator = 75;
} else if (borrower.experience >= 6) {
    stabilityIndicator = 60;
} else {
    stabilityIndicator = 40;
}

console.log("Demo Stability Indicator:", stabilityIndicator);
// Calculate Overall Demo Indicator Score

let overallIndicatorScore =
    (abilityIndicator * 0.40) +
    (willingnessIndicator * 0.35) +
    (stabilityIndicator * 0.25);

console.log(
    "Overall Demo Indicator Score:",
    overallIndicatorScore.toFixed(2)
);
// Fill Calculator with Application Indicators

document.getElementById("ability").value = abilityIndicator;

document.getElementById("willingness").value = willingnessIndicator;

document.getElementById("stability").value = stabilityIndicator;
calculateScore();
// Update Dashboard Overall Indicator Score

document.getElementById("dashOverallScore").innerText =
    overallIndicatorScore.toFixed(2) + " / 100";
// Update Dashboard Stability Indicator

document.getElementById("dashStabilityIndicator").innerText =
    stabilityIndicator + " / 100";
// Update Dashboard Willingness Indicator

document.getElementById("dashWillingnessIndicator").innerText =
    willingnessIndicator + " / 100";
// Update Dashboard Ability Indicator

document.getElementById("dashAbilityIndicator").innerText =
    abilityIndicator + " / 100";


let cashFlowStatus = "";

if (monthlySavings > 0) {
    cashFlowStatus = "Positive Cash Flow";
} else if (monthlySavings === 0) {
    cashFlowStatus = "Break-even";
} else {
    cashFlowStatus = "Negative Cash Flow";
}

console.log("Cash Flow Status:", cashFlowStatus);
// Update Dashboard Savings Percentage

document.getElementById("dashSavingsPercentage").innerText =
    savingsPercentage.toFixed(2) + "%";

// Update Dashboard Cash Flow Status

document.getElementById("dashCashFlow").innerText =
    cashFlowStatus;
// Update Dashboard with Borrower Details

document.getElementById("dashName").innerText = name;

document.getElementById("dashIncome").innerText =
    "₹" + borrower.monthlyIncome.toLocaleString("en-IN");

document.getElementById("dashSavings").innerText =
    "₹" + monthlySavings.toLocaleString("en-IN");

    
document.getElementById("applicationResult").innerHTML =
    "<h3>Application Submitted Successfully!</h3>" +
    "<p>Borrower: " + name + "</p>" +
    "<p>Business: " + business + "</p>" +
    "<p>Business Type: " + type + "</p>" +
    "<p>Monthly Income: ₹" + borrower.monthlyIncome + "</p>" +
    
"<p>Monthly Expenses: ₹" + borrower.monthlyExpenses + "</p>" +
"<h3>Monthly Savings: ₹" + monthlySavings + "</h3>" +
"<h3>Savings Percentage: " + savingsPercentage.toFixed(2) + "%</h3>" +
"<h3>Cash Flow Status: " + cashFlowStatus + "</h3>";



}
// Tab Switching Function

function showTab(tabId) {

    let sections = document.querySelectorAll("main > section");

    sections.forEach(function(section) {
        section.style.display = "none";
    });

    let selectedTab = document.getElementById(tabId);

    if (selectedTab) {
        selectedTab.style.display = "block";
    }

    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function(link) {
        link.classList.remove("active");

        if (link.getAttribute("onclick").includes(tabId)) {
            link.classList.add("active");
        }
    });
}

// Show Home when website opens

document.addEventListener("DOMContentLoaded", function() {
    showTab("home");
});