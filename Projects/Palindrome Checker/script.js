const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

const checkPalindrome = () => { 
  const inputValue = inputText.value.trim();
  
  if (!inputValue) {
    alert("Please input a value");
    return;
  }

  resultDiv.replaceChildren();
  resultDiv.classList.remove("hidden");

  const cleanedText = cleanText(inputValue);
  const isPalindrome = cleanedText === reverseString(cleanedText);

  resultDiv.innerHTML = `<p class="user-input">"${inputValue}" is ${isPalindrome ? "" : "not "}a palindrome.</p>`;

  inputText.value = "";
};

const reverseString = (text) => text.split("").reverse().join("");

const cleanText = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, '');

checkButton.addEventListener("click", checkPalindrome);
