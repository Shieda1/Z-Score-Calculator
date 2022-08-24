// https://calculator.swiftutors.com/z-score-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const zscoreRadio = document.getElementById('zscoreRadio');
const rawScoreRadio = document.getElementById('rawScoreRadio');
const populationMeanRadio = document.getElementById('populationMeanRadio');
const populationStandardDeviationRadio = document.getElementById('populationStandardDeviationRadio');

let zscore;
let rawScore = v1;
let populationMean = v2;
let populationStandardDeviation = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

zscoreRadio.addEventListener('click', function() {
  variable1.textContent = '(x) Raw Score';
  variable2.textContent = '(μ) Population Mean';
  variable3.textContent = '(σ) Population Standard Deviation';
  rawScore = v1;
  populationMean = v2;
  populationStandardDeviation = v3;
  result.textContent = '';
});

rawScoreRadio.addEventListener('click', function() {
  variable1.textContent = '(z) z-score';
  variable2.textContent = '(μ) Population Mean';
  variable3.textContent = '(σ) Population Standard Deviation';
  zscore = v1;
  populationMean = v2;
  populationStandardDeviation = v3;
  result.textContent = '';
});

populationMeanRadio.addEventListener('click', function() {
  variable1.textContent = '(z) z-score';
  variable2.textContent = '(x) Raw Score';
  variable3.textContent = '(σ) Population Standard Deviation';
  zscore = v1;
  rawScore = v2;
  populationStandardDeviation = v3;
  result.textContent = '';
});

populationStandardDeviationRadio.addEventListener('click', function() {
  variable1.textContent = '(z) z-score';
  variable2.textContent = '(x) Raw Score';
  variable3.textContent = '(μ) Population Mean';
  zscore = v1;
  rawScore = v2;
  populationMean = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(zscoreRadio.checked)
    result.textContent = `z-score = ${computezscore().toFixed(2)}`;

  else if(rawScoreRadio.checked)
    result.textContent = `Raw Score = ${computeRawScore().toFixed(2)}`;

  else if(populationMeanRadio.checked)
    result.textContent = `Population Mean = ${computePopulationMean().toFixed(2)}`;

  else if(populationStandardDeviationRadio.checked)
    result.textContent = `Population Standard Deviation = ${computePopulationStandardDeviation().toFixed(2)}`;
})

// calculation

function computezscore() {
  return (Number(rawScore.value) - Number(populationMean.value)) / Number(populationStandardDeviation.value);
}

function computeRawScore() {
  return (Number(zscore.value) * Number(populationStandardDeviation.value)) + Number(populationMean.value);
}

function computePopulationMean() {
  return Number(rawScore.value) - (Number(zscore.value) * Number(populationStandardDeviation.value));
}

function computePopulationStandardDeviation() {
  return (Number(rawScore.value) - Number(populationMean.value)) / Number(zscore.value);
}