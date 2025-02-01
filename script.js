const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "YOU SAID YES! NOW YOU’RE STUCK WITH ME. LET’S HAVE FUN!";
    gif.src = "https://media1.tenor.com/m/kglDzTqoEUAAAAAC/maxwell-cat.gif";

    // Hide the Yes and No buttons after clicking Yes
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// Make the No button move randomly within the wrapper bounds
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate the max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Generate random X and Y values that keep the button within bounds
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply absolute positioning for the button to move within the wrapper
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
