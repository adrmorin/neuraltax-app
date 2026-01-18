// NeuralTax AI - Tax Calculator Logic
// Based on projected 2026 Tax Brackets

const taxData = {
    standardDeduction: {
        single: 14600,
        married: 29200,
        head: 21900
    },
    brackets: {
        single: [
            { rate: 0.10, limit: 11925 },
            { rate: 0.12, limit: 48475 },
            { rate: 0.22, limit: 103350 },
            { rate: 0.24, limit: 197300 },
            { rate: 0.32, limit: 250525 },
            { rate: 0.35, limit: 626350 },
            { rate: 0.37, limit: Infinity }
        ],
        married: [
            { rate: 0.10, limit: 23850 },
            { rate: 0.12, limit: 96950 },
            { rate: 0.22, limit: 206700 },
            { rate: 0.24, limit: 394600 },
            { rate: 0.32, limit: 501050 },
            { rate: 0.35, limit: 751600 },
            { rate: 0.37, limit: Infinity }
        ],
        head: [
            { rate: 0.10, limit: 17000 },
            { rate: 0.12, limit: 64850 },
            { rate: 0.22, limit: 103350 },
            { rate: 0.24, limit: 197300 },
            { rate: 0.32, limit: 250500 },
            { rate: 0.35, limit: 626350 },
            { rate: 0.37, limit: Infinity }
        ]
    }
};

// DOM Elements
const inputs = {
    status: document.getElementById('filingStatus'),
    income: document.getElementById('grossIncome'),
    retirement: document.getElementById('retirement'),
    deductionType: document.getElementsByName('deduction'),
    itemizedAmount: document.getElementById('itemizedAmount'),
    itemizedInputContainer: document.getElementById('itemizedInput')
};

const outputs = {
    totalTax: document.getElementById('totalTax'),
    effectiveRate: document.getElementById('effectiveRate'),
    marginalBracket: document.getElementById('marginalBracket'),
    bracketBar: document.getElementById('bracketBar')
};

// Event Listeners
inputs.status.addEventListener('change', calculateTax);
inputs.income.addEventListener('input', calculateTax);
inputs.retirement.addEventListener('input', calculateTax);
inputs.itemizedAmount.addEventListener('input', calculateTax);

inputs.deductionType.forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.value === 'itemized') {
            inputs.itemizedInputContainer.style.display = 'block';
        } else {
            inputs.itemizedInputContainer.style.display = 'none';
        }
        calculateTax();
    });
});

function calculateTax() {
    const status = inputs.status.value;
    const income = parseFloat(inputs.income.value) || 0;
    const retirement = parseFloat(inputs.retirement.value) || 0;

    // Determine Deduction
    let deduction = 0;
    const isItemized = document.querySelector('input[name="deduction"]:checked').value === 'itemized';

    if (isItemized) {
        deduction = parseFloat(inputs.itemizedAmount.value) || 0;
    } else {
        deduction = taxData.standardDeduction[status];
    }

    // Calculate Taxable Income
    let taxableIncome = Math.max(0, income - retirement - deduction);

    // Calculate Tax
    let tax = 0;
    let marginalRate = 0;
    let previousLimit = 0;
    const brackets = taxData.brackets[status];

    for (const bracket of brackets) {
        if (taxableIncome > previousLimit) {
            const taxableAmount = Math.min(taxableIncome, bracket.limit) - previousLimit;
            tax += taxableAmount * bracket.rate;
            marginalRate = bracket.rate;
            previousLimit = bracket.limit;
        } else {
            break;
        }
    }

    // Calculate Effective Rate
    const effectiveRate = income > 0 ? (tax / income) * 100 : 0;

    // Update UI
    updateUI(tax, effectiveRate, marginalRate);
}

function updateUI(tax, effectiveRate, marginalRate) {
    // Format Currency
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });

    outputs.totalTax.textContent = formatter.format(tax);
    outputs.effectiveRate.textContent = effectiveRate.toFixed(1) + '%';
    outputs.marginalBracket.textContent = (marginalRate * 100) + '%';

    // Update Bar
    // Map 10% -> 37% to 0% -> 100% width for visualization
    const minRate = 0.10;
    const maxRate = 0.37;
    const percentage = ((marginalRate - minRate) / (maxRate - minRate)) * 100;
    // Clamp between 5% and 100% for visibility
    const width = Math.max(5, Math.min(100, percentage));

    outputs.bracketBar.style.width = marginalRate > 0 ? `${width}%` : '0%';

    // Color coding based on rate
    if (marginalRate <= 0.12) {
        outputs.bracketBar.style.backgroundColor = 'var(--accent-green-bright)';
    } else if (marginalRate <= 0.24) {
        outputs.bracketBar.style.backgroundColor = '#facc15'; // Yellow
    } else {
        outputs.bracketBar.style.backgroundColor = '#f87171'; // Red
    }
}

// Initial Calculation
calculateTax();
