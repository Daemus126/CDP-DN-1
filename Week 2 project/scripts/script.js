console.log("loading javascript");


const filterButtons = document.querySelectorAll(".filter button");
const MainQuestions = document.querySelectorAll(".Question button");
const prompt1 = document.querySelectorAll(".Prompt1 button");
const prompt2 = document.querySelectorAll(".Prompt2 button");

console.log("found buttons", filterButtons);
console.log("found filter", prompt1)
console.log("found filter", MainQuestions)


function togglefilterClass(button) {
    const filterButtons = button.closest(".filter button");
    filterButtons.classList.toggle("filter--selected")
    if (filterButtons.classList.contains("filter--selected")) {
        button.classList.add("added");
    } else {
        button.classList.remove("added");
    }

    // console.log("found filter", filterButtons)

}


filterButtons.forEach(function (button) {
    // Give this button the click behaviour
    button.addEventListener("click", function () {
        togglefilterClass(button);

        const selectedFilter = document.querySelectorAll(".filter--selected");

    });
});


function togglesetDisable (key) {
    const KeyValue = key.split("-");
    console.log('key', key, KeyValue)
    MainQuestions.forEach(function (button) {
        if (button.dataset.index.includes(KeyValue[0])) {
            if (button.dataset.index !== key) {
                button.classList.add('disabled');
            } else {
                button.classList.remove('disabled');
            }

        }
    });

}

MainQuestions.forEach(function (button) {
    // Give this button the click behaviour
    button.addEventListener("click", function () {
         togglesetDisable(button);
      

        

    })
});




/*


function toggleMainQuestions(button) {
    const MainQuestions = button.closest(".Question button");
    MainQuestions.classList.toggle("Question--selected")

     button.addEventListener("click", function () {
    setDisable(button.dataset.index)
  

    })
}

console.log("promt1");

function toggleMainQuestions(button) {
    const prompt1 = button.closest(".Prompt1 button");
    prompt1.classList.toggle("Prompt1--selected")
    if (prompt1.classList.contains("Prompt1--selected")) {
        button.classList.add("added");
   
    } else {
        button.classList.remove("added");
         
    }




}


prompt1.forEach(function (button) {
    // Give this button the click behaviour
    button.addEventListener("click", function () {
        toggleMainQuestions(button);

        const selectedPrompt1 = document.querySelectorAll(".prompt1--selected");

    })
});


    




function setEnable (button) {
    const prompt1 = button.closest(".Prompt1 button");
    const prompt2 = button.closest(".Prompt2 button");
 console.log("test2", prompt1, prompt1);
    if (prompt1.classList.contains("Prompt1--selected")) {
        prompt2.classList.add("disabled");


    } else {
        prompt2.classList.remove("Prompt2 button");
    }

    console.log("please");
}

MainQuestions.forEach(function (button) {
    // Give this button the click behaviour
    button.addEventListener("click", function () {
        setEnable(button);



    });
});
*/