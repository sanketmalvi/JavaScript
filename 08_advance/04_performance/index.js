// // Code 1

// const t1 = performance.now();

// // Simulate some work
// for (let i = 1; i <= 100; i++) {
//     let para = document.createElement("p");
//     para.textContent = `This is paragraph number ${i}`;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();
// console.log(`Time taken to add 100 paragraphs: ${t2 - t1} milliseconds`); //It takes 1.2 milliseconds on average

// // You're modifying the DOM 100 times (document.body.appendChild()).

// // Each append may trigger:

// // A reflow: browser recalculates positions/layout.

// // A repaint: browser redraws parts of the page.





// // _________________________________________________________________________________


// // Code 2
// const t3 = performance.now();
// let myDiv = document.createElement("div");
// // Simulate some work
// for (let i = 1; i <= 100; i++) {
//     let para = document.createElement("p");
//     para.textContent = `This is paragraph number ${i}`;
//     myDiv.appendChild(para);
// }
// document.body.appendChild(myDiv);

// const t4 = performance.now();  // It takes 1.2 milliseconds on average
// console.log(`Time taken to add 100 paragraphs in a single div: ${t4 - t3} milliseconds`);



// You do all 100 DOM operations in memory first (off-screen).

// Then do one DOM update by appending the <div> once.

// This greatly reduces reflows/repaints.


// _________________________________________________________________________________




// Best Practice: Use a DocumentFragment
// DocumentFragment: It's a lightweight container for DOM nodes.
// It doesn't trigger reflows/repaints when you append it to the document.

let fragment = document.createDocumentFragment();

for(let i = 1; i <= 100; i++) {
    let para = document.createElement("p");
    para.textContent = `This is paragraph number ${i + 100}`;
    fragment.appendChild(para);
}

document.body.appendChild(fragment);
