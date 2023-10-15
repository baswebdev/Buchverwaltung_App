const output = document.getElementById("output");
const commandInput = document.getElementById("command");
const availableBooks = [
    "Die Geheimnisse des Universums",
    "Die Verlorene Stadt",
    "Das Rätsel der verschwundenen Malerei",
    "Der Schatten des Phönix",
    "Der Klang der Stille",
    "Die Reise ins Unbekannte"
];

const borrowedBooks = [];

function displayOutput(message) {
    output.innerHTML += `<p>${message}</p>`;
}

function listAvailableBooks() {
    output.innerHTML = "";
    displayOutput("Verfügbare Bücher:");
    availableBooks.forEach(book => {
        displayOutput(book);
    });
}

function listBorrowedBooks() {
    output.innerHTML = "";
    displayOutput("Ausgeliehene Bücher:");
    borrowedBooks.forEach(book => {
        displayOutput(book);
    });
}

function borrowBook(bookTitle) {
    if (availableBooks.includes(bookTitle)) {
        availableBooks.splice(availableBooks.indexOf(bookTitle), 1);
        borrowedBooks.push(bookTitle);
        displayOutput(`Sie haben "${bookTitle}" ausgeliehen.`);
    } else {
        displayOutput(`"${bookTitle}" ist nicht verfügbar.`);
    }
}

function returnBook(bookTitle) {
    if (borrowedBooks.includes(bookTitle)) {
        borrowedBooks.splice(borrowedBooks.indexOf(bookTitle), 1);
        availableBooks.push(bookTitle);
        displayOutput(`Sie haben "${bookTitle}" zurückgegeben.`);
    } else {
        displayOutput(`"${bookTitle}" wurde nicht ausgeliehen.`);
    }
}

commandInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const command = commandInput.value.trim();
        commandInput.value = "";

        if (command === "1") {
            listAvailableBooks();
        } else if (command === "2") {
            listBorrowedBooks();
        } else if (command.startsWith("3 ")) {
            const bookTitle = command.substring(2);
            borrowBook(bookTitle);
        } else if (command.startsWith("4 ")) {
            const bookTitle = command.substring(2);
            returnBook(bookTitle);
        } else {
            displayOutput("Ungültiger Befehl. Verwenden Sie '1', '2', '3 Buchtitel' oder '4 Buchtitel'.");
        }
    }
});
