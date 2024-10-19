const checkBoxes = document.querySelectorAll(".form-check-input");
checkBoxes.forEach((eachCheckBox) => {
    eachCheckBox.addEventListener("change", showComponents);
});
let dbAPI = new DB();
function showComponents(event) {
    let target = event.target;
    let targetId = target.id;
    // condition to check whether the checkbox is checked or not
  if (target.checked) {
    // show the question label
    document.getElementById("questionLabel").classList.add("d-block");
    document.getElementById("questionLabel").classList.remove("d-none");
    // condition to identify the checkbox that triggers the event
    if (targetId === "smartphone") {
      // if smartphone checkbox is checked, display the phoneUsageBlock
      let phoneUsageBlock = document.getElementById("phoneUsageBlock");
      phoneUsageBlock.classList.add("d-flex");
      phoneUsageBlock.classList.remove("d-none");
    }
    else if (targetId === "laptop") {
      // if laptop checkbox is checked, display the laptopUsageBlock
      let laptopUsageBlock = document.getElementById("laptopUsageBlock");
      laptopUsageBlock.classList.add("d-flex");
      laptopUsageBlock.classList.remove("d-none");
    }
    else if (targetId === "gamingConsole") {
     // if gamingConsole checkbox is checked, display the consoleUsageBlock
      let consoleUsageBlock = document.getElementById("consoleUsageBlock");
      consoleUsageBlock.classList.add("d-flex");
      consoleUsageBlock.classList.remove("d-none");
    }
    else if (targetId === "television") {
      // if television checkbox is checked, display the tvUsageBlock
      let tvUsageBlock = document.getElementById("tvUsageBlock");
      tvUsageBlock.classList.add("d-flex");
      tvUsageBlock.classList.remove("d-none");
    }
  }
  else {
    // check  whether all the checkboxes are unchecked
   let isChecked = false;
   checkBoxes.forEach((eachCheckBox) => {
     if (eachCheckBox.checked) {
       isChecked = true;
     }
   });
    // if all the checkboxes are unchecked, hide the second question label
   if (!isChecked) {
     document.getElementById("questionLabel").classList.add("d-none");
     document.getElementById("questionLabel").classList.remove("d-block");
   }
   // condition to identify the checkbox that triggers the event
   if (targetId === "smartphone") {
     // if smartphone checkbox is unchecked, hide the phoneUsageBlock
     let phoneUsageBlock = document.getElementById("phoneUsageBlock");
     phoneUsageBlock.classList.add("d-none");
     phoneUsageBlock.classList.remove("d-flex");
   }
   else if (targetId === "laptop") {
     // if laptop checkbox is unchecked, hide the laptopUsageBlock
     let laptopUsageBlock = document.getElementById("laptopUsageBlock");
     laptopUsageBlock.classList.add("d-none");
     laptopUsageBlock.classList.remove("d-flex");
   }
   else if (targetId === "gamingConsole") {
    // if gamingConsole checkbox is unchecked, hide the consoleUsageBlock
     let consoleUsageBlock = document.getElementById("consoleUsageBlock");
     consoleUsageBlock.classList.add("d-none");
     consoleUsageBlock.classList.remove("d-flex");
   }
   else if (targetId === "television") {
     // if television checkbox is unchecked, hide the tvUsageBlock
     let tvUsageBlock = document.getElementById("tvUsageBlock");
     tvUsageBlock.classList.add("d-none");
     tvUsageBlock.classList.remove("d-flex");
   }
 }
}
const progress = document.getElementById("progress");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
nextButton.addEventListener("click", showNextTab);
function showNextTab() {
  // get the current tab
  const currentTab = document.querySelector('.tab-pane.show.active');
  // get the form within the current tab
  const currentForm = currentTab.querySelector('form');
  if (currentForm.checkValidity()) {
      const activeTabLink = document.querySelector('.nav-link.active');
      // get the next tab list item  
      const nextTabListItem = activeTabLink.parentElement.nextElementSibling;
      // condition to check whether the next tab list exists or not
      if (nextTabListItem) {
          // get all the tab links
          let allTabs = document.querySelectorAll('.nav-link');
          // disable all the tab links
          allTabs.forEach((tab) => {
            tab.setAttribute('disabled', 'true');
         });
         // get the next tab link element
         const nextTab = nextTabListItem.querySelector('.nav-link');
         // enable the next tab link
         nextTab.removeAttribute('disabled');
         // display the corresponding tab contents
         nextTab.click(); 
         const progressValue = parseInt(progress.ariaValueNow) + 16;
          progress.style.width = progressValue +"%";
          progress.setAttribute('aria-valuenow', progressValue);
          progress.textContent = progressValue +"%";
     }
     if (activeTabLink.textContent === "Electronic usage") {
         nextButton.classList.add("d-none");
         nextButton.classList.remove("d-inline");
         submitButton.classList.add("d-inline");
         submitButton.classList.remove("d-none");
     }
    } else {
      currentForm.classList.add('was-validated');
    }

 }
  const prevButton = document.getElementById("prevButton");
  prevButton.addEventListener("click", showPreviousTab);
  function showPreviousTab() {
    const activeTabLink = document.querySelector('.nav-link.active');
    // get the previous tab list element
    const prevTabListItem = activeTabLink.parentElement.previousElementSibling;
     // condition to check whether the previous tab list exists or not
     if (prevTabListItem) {
        // get all the tab links
        let allTabs = document.querySelectorAll('.nav-link');
        // disable all the tab links
        allTabs.forEach((tab) => {
           tab.setAttribute('disabled', 'true');
        });
        // get the previous tab link
        const prevTab = prevTabListItem.querySelector('.nav-link');
        // enable the previous tab link
        prevTab.removeAttribute('disabled');
        // display the corresponding tab contents
        prevTab.click(); 
        const progressValue = parseInt(progress.ariaValueNow) - 16;
        progress.style.width = progressValue + "%";
        progress.setAttribute('aria-valuenow', progressValue);
        progress.textContent = progressValue + "%";
    }

        if (activeTabLink.textContent === "Shopping") {
           nextButton.classList.add("d-inline");
           nextButton.classList.remove("d-none");
           submitButton.classList.add("d-none");
           submitButton.classList.remove("d-inline");
        }
     
  }

  const homeButton = document.getElementById("homeButton");
  homeButton.addEventListener("click", showHome);
  function showHome() {
    window.location.href = "index.html";
  }

  submitButton.addEventListener("click", calculateResult);
  
  function calculateResult() {
    const currentTab = document.querySelector('.tab-pane.show.active');
    // get the form within the current tab
    const currentForm = currentTab.querySelector('form');
    if (currentForm.checkValidity()) {
        // get all the tab links and disable them
        let allTabs = document.querySelectorAll('.nav-link');
        allTabs.forEach((tab) => {
        tab.setAttribute('disabled', 'true');
        });
        // enable the result tab link
        document.getElementById("resultTab").removeAttribute('disabled');
        // show the tab contents
        document.getElementById("resultTab").click();
        // hide the card component column
        document.getElementById("cardContainer").classList.add("d-none");
        const progressValue = 100;
        progress.style.width = progressValue + "%";
        progress.setAttribute('aria-valuenow', progressValue);
        progress.textContent = progressValue + "%";
        let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let country = document.getElementById("country").value;
    let energyType = document.getElementById("energyTypeDropDown").value;
    let applianceUsage = document.getElementById("range1").value;
    let travelType = document.getElementById("travelTypeDropDown").value;
    let kmCount = document.getElementById("kmCount").value;
    let diet = document.getElementById("dietDropDown").value;
    let eatCount = "0"  + document.getElementById("range2").value;
    let phoneUsage = document.getElementById("phoneUsage").value;
    let laptopUsage = document.getElementById("laptopUsage").value;
    let consoleUsage = document.getElementById("consoleUsage").value;
    let tvUsage = document.getElementById("tvUsage").value;
    let onlineHours = document.getElementById("onlineHoursDropdown").value;
  let clothesFrequency = document.getElementById("clothesFrequency").value;
  // to get the checked radio button value, use the name attribute, which is common for the related radio buttons. 
   let recycleCount = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
   const ef = new Map([
    ["Renewable energy", 0], ["Natural gas", 2], ["Electricity from coal", 4],
       ["0", 0], ["1", 0.6], ["2", 1], ["3", 1.4], ["4", 1.8],
       ["I walk or use a bicycle", 0], ["I use public transportation or the school bus", 1.44], ["I carpool", 0.64], ["I drive alone", 1.28],
       ["Vegan", 2.9], ["Vegetarian", 3.8], ["Meat occasionally", 5.6], ["Regular meat eater", 7.2],
       ["00", 0], ["01", 1], ["02", 1.5], ["03", 2], ["04", 2.5],
       ["smartphone", 0.1], ["laptop", 0.3], ["gamingConsole", 0.5], ["television", 0.4],
       ["Less than 2 hours", 1], ["2-4 hours", 2], ["4-6 hours", 3], ["More than 6 hours", 5],
       ["Rarely", 20], ["Every few months", 50], ["Monthly", 80], ["More than once a month", 100],
       ["Always", -5], ["Sometimes", 0], ["Never", 5]
     ]);
     let home = ef.get(energyType) + ef.get(applianceUsage);
        home = Math.round(home * 100) / 100;
        let travel = (ef.get(travelType) * kmCount);
        travel = Math.round(travel * 100) / 100;
        let food = ef.get(diet) + (ef.get(eatCount) / 7);
        food = Math.round(food * 100) / 100;
        let electronics = (ef.get("smartphone") * phoneUsage) + (ef.get("laptop") * laptopUsage) + (ef.get("gamingConsole") * consoleUsage) + (ef.get("television") * tvUsage) + ef.get(onlineHours);
        electronics = Math.round(electronics * 100) / 100;
        let shopping = ef.get(clothesFrequency) / 365;
        shopping = Math.round(shopping * 100) / 100;
        let recycle = ef.get(recycleCount) / 7;
        recycle = Math.round(recycle * 100) / 100;
      let result = home + travel + food + electronics + shopping + recycle;
        result = Math.round(result * 100) / 100;
        let resultContainer = document.getElementById("resultContainer");
      resultContainer.textContent = "Carbon footprint: "+result+" Kg/day";
      // object to store the categories and the corresponding carbon footprint value
      const categories = { "home": home, "travel": travel, "food": food, "electronics": electronics, "shopping": shopping};
      // variable to store the max value, max category, and suggestions
      let maxValue = 0, maxCategory, suggestion;
      // iterate the categories object
      for (const category in categories) {
           // value of each category
           const value = categories[category];
           // if the value is greater than maxValue, set the value as maxValue and category as maxCateogry
           if (value > maxValue) {
              maxValue = value;
              maxCategory = category;
           }
      }
      if (maxCategory === "home") {
        suggestion = "Your carbon footprint is higher in the home category. To reduce your carbon footprint, use renewable energy sources. Plant more trees and recycle.";
      }
      else if (maxCategory === "travel") {
        suggestion = "Your carbon footprint is higher in the travel category. To reduce your carbon footprint, use electric vehicles and use public transport. Plant more trees and recycle.";
      }
      else if (maxCategory === "food") {
        suggestion = "Your carbon footprint is higher in the food category. To reduce your carbon footprint, consider reducing meat consumption if you are a non-vegetarian. Plant more trees and recycle.";
      }
      else if (maxCategory === "electronics") {
        suggestion = "Your carbon footprint is higher in the electronics category. To reduce your carbon footprint, reduce your screen time and electronics usage. Plant more trees and recycle.";
      }
      else {
        suggestion = "Your carbon footprint is higher in the shopping category. To reduce your carbon footprint, minimize your shopping and shop for eco-friendly products. Plant more trees and recycle.";
      }
      let suggestionContainer = document.getElementById("suggestionContainer");
      suggestionContainer.textContent = suggestion;
      let chartContainer = document.getElementById("chartContainer");
      let chart = "{ type: 'pie', data: { datasets: [ { data: [" + home + ", " + travel + ", " +  food + ", " + electronics + ", " + shopping +"], backgroundColor: [ 'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 235, 59)', 'rgb(75, 192, 192)', 'rgb(50, 205, 50)', ], label: 'Dataset 1', }, ], labels: ['Home', 'Travel', 'Food', 'Electronic usage', 'Shopping'], }, }";
      let chartUrl = "https://quickchart.io/chart?c=" + chart;
      const image = document.createElement("img");
      image.src = chartUrl;
      image.alt = "Result chart";
      image.classList.add("img-fluid");
      chartContainer.appendChild(image);
      dbAPI.insert("INSERT INTO response VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [Date.now(), name, age, country, home, travel, food, electronics, shopping, result, maxCategory, suggestion]);
      renderData();
    } else {
        currentForm.classList.add('was-validated');
  }

  }

const recalculateButton = document.getElementById("recalculateButton");
recalculateButton.addEventListener("click", showForm);
function showForm() {
  window.location.href = "form.html";
}

function renderData(){
  let result = dbAPI.selectAll("SELECT * FROM response");
  console.log(result);
  let home = [], travel = [], food = [], electronics = [], shopping = [];
  if (result.length === 0) {
    return;
  }
  let labels = [], avg = [];
     const groupedData = {};
  result[0].values.forEach((eachResponse) => { home.push(eachResponse[4]);
      travel.push(eachResponse[5]);
      food.push(eachResponse[6]);
      electronics.push(eachResponse[7]);
      shopping.push(eachResponse[8]);
      const age = eachResponse[2];
      if(age> 10 && age <= 20){
        // condition to check whether the groupedData contains the specific age group property
        if(!groupedData["11 to 20"]) {
           // if it is not present, create an empty array as a value
            groupedData["11 to 20"] = [];
        }
        // if it is already present, add the carbon footprint value to the values array
        groupedData["11 to 20"].push(eachResponse[9]);
    }
    else if(age > 20 && age <= 30){
        if (!groupedData["21 to 30"]) {
            groupedData["21 to 30"] = [];
        }  
        groupedData["21 to 30"].push(eachResponse[9]);
    }
    else if(age > 30 && age <= 40){
        if (!groupedData["31 to 40"]) {
           groupedData["31 to 40"] = [];
        }
        groupedData["31 to 40"].push(eachResponse[9]);
    }
    else if(age > 40 && age <= 50){
        if (!groupedData["41 to 50"]) {
           groupedData["41 to 50"] = [];
        }
        groupedData["41 to 50"].push(eachResponse[9]);
    }
    else if(age > 50 && age <= 60){
        if (!groupedData["51 to 60"]) {
           groupedData["51 to 60"] = [];
        }
        groupedData["51 to 60"].push(eachResponse[9]);
    }
    else if(age > 60 && age <= 70){
        if (!groupedData["61 to 70"]) {
           groupedData["61 to 70"] = [];
        }
        groupedData["61 to 70"].push(eachResponse[9]);
    }
    else if(age > 70){
        if (!groupedData["above 70"]) {
           groupedData["above 70"] = [];
        }
        groupedData["above 70"].push(eachResponse[9]);
    }
    else{
        if(!groupedData["others"]) {
          groupedData["others"] = [];
        }
        groupedData["others"].push(eachResponse[9]);
    }
   });
    let chartURL1 = "https://quickchart.io/chart?c={type:'bar',data:{labels:['Home','Travel','Food','Electronics', 'Shopping'], datasets:[{label:'Carbon footprint',data:["+ findAverage(home)+ "," + findAverage(travel)+ "," +findAverage(food)+ "," +findAverage(electronics)+ "," +findAverage(shopping)+"], backgroundColor: 'rgba(54, 162, 235, 0.6)'}]}, options: {title: {display: true, text: 'Category based analysis'}}}";
    const image1 = document.createElement("img");
    image1.src = chartURL1;
    image1.alt = "Result chart";
    image1.classList.add("img-fluid");
    let chartContainer1 = document.getElementById("chartContainer1");
    chartContainer1.appendChild(image1);
    for (data in groupedData) {
      // get the corresponding array value from the object
      const array = groupedData[data];
     // finding the average of the array using findAverage() function.
      let averageValue = findAverage(array);
      // store the property of groupedData in the labels array
      labels.push(data);
      // store the average value in the avg array
      avg.push(averageValue);
    }
    let chart = "{type: 'doughnut', data: {datasets: [{data: [" + avg.toString() + "], backgroundColor: [ 'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', ], label: 'Dataset 1',}, ], labels: ['" + labels.join("','") + "'], }, options: { title: { display: true, text: 'Age group based analysis', }, }, } ";
    let chartURL2 = "https://quickchart.io/chart?c=" + chart;
    const image2 = document.createElement("img");
    image2.src = chartURL2;
    image2.alt = "Result chart";
    image2.classList.add("img-fluid");
    let chartContainer2 = document.getElementById("chartContainer2");
    chartContainer2.appendChild(image2);
  }

function findAverage(array) {
  let sum = 0;
  // iterate over the array value and find the sum of the elements in the array
  for (const element of array) {
    sum = sum + element;
  }
  // find the average
  let average = sum / array.length;
  average = Math.round(average * 100) / 100;
  // return the average value
  return average;
}