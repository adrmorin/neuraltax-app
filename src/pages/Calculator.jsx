import React, { useState, useEffect } from 'react';

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

const Calculator = () => {
    const [filingStatus, setFilingStatus] = useState('single');
    const [grossIncome, setGrossIncome] = useState('');
    const [retirement, setRetirement] = useState('');
    const [deductionType, setDeductionType] = useState('standard');
    const [itemizedAmount, setItemizedAmount] = useState('');

    const [results, setResults] = useState({
        tax: 0,
        effectiveRate: 0,
        marginalRate: 0,
        bracketWidth: 0,
        bracketColor: 'var(--accent-green-bright)'
    });

    useEffect(() => {
        calculateTax();
    }, [filingStatus, grossIncome, retirement, deductionType, itemizedAmount]);

    const calculateTax = () => {
        const income = parseFloat(grossIncome) || 0;
        const retire = parseFloat(retirement) || 0;

        // Determine Deduction
        let deduction = 0;
        if (deductionType === 'itemized') {
            deduction = parseFloat(itemizedAmount) || 0;
        } else {
            deduction = taxData.standardDeduction[filingStatus];
        }

        // Calculate Taxable Income
        let taxableIncome = Math.max(0, income - retire - deduction);

        // Calculate Tax
        let tax = 0;
        let marginalRate = 0;
        let previousLimit = 0;
        const brackets = taxData.brackets[filingStatus];

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

        // Visuals
        const minRate = 0.10;
        const maxRate = 0.37;
        const percentage = ((marginalRate - minRate) / (maxRate - minRate)) * 100;
        const width = Math.max(5, Math.min(100, percentage));

        let color = 'var(--accent-green-bright)';
        if (marginalRate > 0.12 && marginalRate <= 0.24) color = '#facc15';
        if (marginalRate > 0.24) color = '#f87171';

        setResults({
            tax,
            effectiveRate,
            marginalRate,
            bracketWidth: marginalRate > 0 ? width : 0,
            bracketColor: color
        });
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className="main-content">
            <header style={{ background: 'transparent', padding: 0, marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>2026 Tax Estimator</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Estimate your federal tax liability based on projected 2026 brackets.</p>
            </header>

            <div className="calc-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {/* Input Section */}
                <div className="calc-card" style={{ background: 'white', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Your Information</h3>

                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                        <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)' }}>Filing Status</label>
                        <select
                            className="form-select"
                            value={filingStatus}
                            onChange={(e) => setFilingStatus(e.target.value)}
                            style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem' }}
                        >
                            <option value="single">Single</option>
                            <option value="married">Married Filing Jointly</option>
                            <option value="head">Head of Household</option>
                        </select>
                    </div>

                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                        <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)' }}>Gross Annual Income</label>
                        <div style={{ position: 'relative' }}>
                            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>$</span>
                            <input
                                type="number"
                                className="form-input"
                                value={grossIncome}
                                onChange={(e) => setGrossIncome(e.target.value)}
                                style={{ width: '100%', padding: '0.75rem 1rem', paddingLeft: '2rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem' }}
                                placeholder="e.g. 75000"
                            />
                        </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                        <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)' }}>401(k) / IRA Contributions</label>
                        <div style={{ position: 'relative' }}>
                            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>$</span>
                            <input
                                type="number"
                                className="form-input"
                                value={retirement}
                                onChange={(e) => setRetirement(e.target.value)}
                                style={{ width: '100%', padding: '0.75rem 1rem', paddingLeft: '2rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem' }}
                                placeholder="e.g. 5000"
                            />
                        </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                        <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)' }}>Deduction Type</label>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input
                                    type="radio"
                                    name="deduction"
                                    value="standard"
                                    checked={deductionType === 'standard'}
                                    onChange={() => setDeductionType('standard')}
                                /> Standard
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input
                                    type="radio"
                                    name="deduction"
                                    value="itemized"
                                    checked={deductionType === 'itemized'}
                                    onChange={() => setDeductionType('itemized')}
                                /> Itemized
                            </label>
                        </div>
                    </div>

                    {deductionType === 'itemized' && (
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: 'var(--text-dark)' }}>Total Itemized Deductions</label>
                            <div style={{ position: 'relative' }}>
                                <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>$</span>
                                <input
                                    type="number"
                                    className="form-input"
                                    value={itemizedAmount}
                                    onChange={(e) => setItemizedAmount(e.target.value)}
                                    style={{ width: '100%', padding: '0.75rem 1rem', paddingLeft: '2rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem' }}
                                    placeholder="e.g. 20000"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Results Section */}
                <div className="calc-card result-card" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: 'white', position: 'sticky', top: '2rem', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                    <h3 style={{ marginBottom: '1.5rem', color: 'white' }}>Estimated Results</h3>

                    <div className="result-item" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        <div className="result-label" style={{ color: 'var(--accent-mint)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Estimated Federal Tax</div>
                        <div className="result-value" style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>{formatCurrency(results.tax)}</div>
                        <div className="result-sub" style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)' }}>Based on 2026 brackets</div>
                    </div>

                    <div className="result-item" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        <div className="result-label" style={{ color: 'var(--accent-mint)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Effective Tax Rate</div>
                        <div className="result-value" style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>{results.effectiveRate.toFixed(1)}%</div>
                        <div className="result-sub" style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)' }}>Percentage of income paid in tax</div>
                    </div>

                    <div className="result-item" style={{ marginBottom: '0', paddingBottom: '0', borderBottom: 'none' }}>
                        <div className="result-label" style={{ color: 'var(--accent-mint)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Marginal Tax Bracket</div>
                        <div className="result-value" style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>{(results.marginalRate * 100).toFixed(0)}%</div>
                        <div className="tax-bracket-bar" style={{ height: '8px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '4px', marginTop: '1rem', overflow: 'hidden', position: 'relative' }}>
                            <div className="tax-bracket-fill" style={{ height: '100%', background: results.bracketColor, width: `${results.bracketWidth}%`, transition: 'width 0.5s ease-out' }}></div>
                        </div>
                        <div className="result-sub" style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)' }}>Top dollar taxed at this rate</div>
                    </div>

                    <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <p style={{ fontSize: '0.8rem', opacity: 0.7, fontStyle: 'italic' }}>
                            * This is an estimate for educational purposes only. Actual tax liability may vary based on specific circumstances.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
