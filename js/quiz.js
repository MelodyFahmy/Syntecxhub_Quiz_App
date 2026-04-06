//Selectors
const quizData = [
  {
    question: "Which organelle is responsible for the synthesis of lipids and steroid hormones?",
    answers: [
      "A. Rough Endoplasmic Reticulum",
      "B. Smooth Endoplasmic Reticulum",
      "C. Golgi Apparatus",
      "D. Lysosomes"
    ],
    correctAnswer: "B"
  },
  {
    question: "Hematoxylin is a basic stain that typically colors the nucleus:",
    answers: [
      "A. Pink",
      "B. Red",
      "C. Blue/Purple",
      "D. Orange"
    ],
    correctAnswer: "C"
  },
  {
    question: "Which of the following is considered a \"non-true\" cell because it lacks a nucleus and organelles?",
    answers: [
      "A. Neutrophil",
      "B. Monocyte",
      "C. Erythrocyte (RBC)",
      "D. Lymphocyte"
    ],
    correctAnswer: "C"
  },
  {
    question: "The basement membrane is a characteristic feature of which tissue?",
    answers: [
      "A. Connective Tissue",
      "B. Epithelial Tissue",
      "C. Muscular Tissue",
      "D. Nervous Tissue"
    ],
    correctAnswer: "B"
  },
  {
    question: "Which cell is responsible for producing antibodies?",
    answers: [
      "A. T-lymphocyte",
      "B. Plasma cell",
      "C. Mast cell",
      "D. Macrophage"
    ],
    correctAnswer: "B"
  },
  {
    question: "Simple squamous epithelium can be found in:",
    answers: [
      "A. Lining of blood vessels (Endothelium)",
      "B. Air sacs of lungs (Alveoli)",
      "C. Both A and B",
      "D. None of the above"
    ],
    correctAnswer: "C"
  },
  {
    question: "Which WBC has a multi-lobed nucleus (3-5 lobes) and fine granules?",
    answers: [
      "A. Eosinophil",
      "B. Basophil",
      "C. Neutrophil",
      "D. Monocyte"
    ],
    correctAnswer: "C"
  },
  {
    question: "The \"Powerhouse of the cell\" that contains its own DNA is the:",
    answers: [
      "A. Nucleus",
      "B. Mitochondria",
      "C. Ribosome",
      "D. Lysosome"
    ],
    correctAnswer: "B"
  },
  {
    question: "Which fiber type provides high tensile strength and is the most abundant in connective tissue?",
    answers: [
      "A. Elastic fibers",
      "B. Reticular fibers",
      "C. Collagen fibers",
      "D. All of the above"
    ],
    correctAnswer: "C"
  },
  {
    question: "A decrease in the number of Platelets (Thrombocytes) leads to a condition called:",
    answers: [
      "A. Anemia",
      "B. Polycythemia",
      "C. Purpura",
      "D. Leucopenia"
    ],
    correctAnswer: "C"
  },
  {
    question: "Which organelle acts as the \"Shipping and Receiving\" center, modifying proteins?",
    answers: [
      "A. Lysosome",
      "B. Golgi Apparatus",
      "C. Nucleolus",
      "D. Centriole"
    ],
    correctAnswer: "B"
  },
  {
    question: "The lifespan of a human Red Blood Cell is approximately:",
    answers: [
      "A. 10 days",
      "B. 60 days",
      "C. 120 days",
      "D. 200 days"
    ],
    correctAnswer: "C"
  },
  {
    question: "Transitional epithelium is specifically adapted for stretching and is found in the:",
    answers: [
      "A. Trachea",
      "B. Esophagus",
      "C. Urinary bladder",
      "D. Small intestine"
    ],
    correctAnswer: "C"
  },
  {
    question: "Which cell is known as a \"Macrophage\" when it enters the connective tissue?",
    answers: [
      "A. Neutrophil",
      "B. Basophil",
      "C. Monocyte",
      "D. Lymphocyte"
    ],
    correctAnswer: "C"
  },
  {
    question: "Mitochondria are more numerous in cells with:",
    answers: [
      "A. High metabolic activity",
      "B. High protein secretion",
      "C. Low energy requirements",
      "D. None of the above"
    ],
    correctAnswer: "A"
  },
  {
    question: "Which connective tissue is found in the umbilical cord?",
    answers: [
      "A. Adipose tissue",
      "B. Mucoid tissue",
      "C. Yellow elastic tissue",
      "D. Reticular tissue"
    ],
    correctAnswer: "B"
  },
  {
    question: "The primary function of Eosinophils is to:",
    answers: [
      "A. Produce Heparin",
      "B. Kill parasites and phagocytose antigen-antibody complexes",
      "C. Form blood clots",
      "D. Secrete Antibodies"
    ],
    correctAnswer: "B"
  },
  {
    question: "Pseudostratified columnar ciliated epithelium is characteristic of the:",
    answers: [
      "A. Skin",
      "B. Trachea",
      "C. Stomach",
      "D. Uterus"
    ],
    correctAnswer: "B"
  },
  {
    question: "Which of the following are functions of the Cell Membrane?",
    answers: [
      "A. Selective permeability",
      "B. Protection of cell contents",
      "C. Cell-to-cell recognition",
      "D. All of the above"
    ],
    correctAnswer: "D"
  },
  {
    question: "The normal number of White Blood Cells (WBCs) per cubic millimeter is:",
    answers: [
      "A. 5 million",
      "B. 4,000 to 11,000",
      "C. 200,000 to 400,000",
      "D. 1,000 to 2,000"
    ],
    correctAnswer: "B"
  },
  {
    question: "Which organelle contains hydrolytic enzymes for intracellular digestion?",
    answers: [
      "A. Peroxisomes",
      "B. Lysosomes",
      "C. Smooth ER",
      "D. Ribosomes"
    ],
    correctAnswer: "B"
  },
  {
    question: "Which cell type is characterized by a \"clock-face\" or \"cartwheel\" nucleus?",
    answers: [
      "A. Fibroblast",
      "B. Mast cell",
      "C. Plasma cell",
      "D. Fat cell"
    ],
    correctAnswer: "C"
  },
  {
    question: "The size of a normal RBC (normocyte) is approximately:",
    answers: [
      "A. 2.5 μ",
      "B. 7.5 μ",
      "C. 15 μ",
      "D. 20 μ"
    ],
    correctAnswer: "B"
  },
  {
    question: "Connective tissue is characterized by being:",
    answers: [
      "A. Highly vascular (rich blood supply)",
      "B. Derived from mesoderm",
      "C. Composed of cells, fibers, and matrix",
      "D. All of the above"
    ],
    correctAnswer: "D"
  },
  {
    question: "Which type of epithelium covers the skin surface (Epidermis)?",
    answers: [
      "A. Simple cuboidal",
      "B. Stratified squamous keratinized",
      "C. Stratified squamous non-keratinized",
      "D. Transitional"
    ],
    correctAnswer: "B"
  }
];

let currentQuestionIndex = 0;
let score = 0;

//event listeners
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score-container');

//functions
function showQuestion() {
  const currentData = quizData[currentQuestionIndex];
  questionElement.innerText = `Question ${currentQuestionIndex + 1}: ${currentData.question}`;

  // Clear previous options
  optionsContainer.innerHTML = "";
  nextButton.style.display = "none";
  submitButton.style.display = "none";

  // Create buttons for each option
  currentData.answers.forEach((answers, index) => {
    const button = document.createElement('button');
    button.classList.add("opt-btn");
    button.innerText = answers;
    button.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(button);
  });
}

// 5. Function to handle answer selection
function selectAnswer(selectedIndex) {
  if (!quizData[currentQuestionIndex]) return;
  const correctLetter = quizData[currentQuestionIndex].correctAnswer;
  // Convert selected index (0,1,2,3) to letter (A,B,C,D) for comparison
  const selectedLetter = String.fromCharCode(65 + selectedIndex);
  if (selectedLetter === correctLetter) {
    score++;
    localStorage.setItem('quizTotalScore', score);
  }
  // Show 'Next' button after answering
  if (currentQuestionIndex === quizData.length - 1) {
    submitButton.style.display = "block"; // Show Submit if it's the end
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block"; // Show Next for all other questions
  }
}

// 6. Handle "Next" button click
nextButton.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
    nextButton.style.display = "none";
  }
  else {
    submitButton.style.display = "block";
    nextButton.style.display = "none";
  }
};

submitButton.onclick = () => {
  // Save the final score and total questions
  questionElement.style.display = "none";
  optionsContainer.style.display = "none";
  submitButton.style.display = "none";
  localStorage.setItem('userScore', score);
  showResults();
  // The browser will now naturally navigate to the page set in your HTML
};


// 7. Show final score
function showResults() {
  scoreElement.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>Your Score: ${score} / ${quizData.length}</p>
        <button onclick="location.reload()">Restart Quiz</button>
    `;
  nextButton.style.display = "none";
  submitButton.style.display = "none";
}

// Initialize the first question
showQuestion();
