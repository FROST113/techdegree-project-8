// Variables //
let employees = [];
const apiUrl = 'https://randomuser.me/api/?results=12&inc=name,picture,email,location,phone,dob&noinfo&nat=US';
const container = document.querySelector('.grid');
const overlay = document.querySelector('.hidden-overlay');
const modalContainer = document.querySelector('.content-modal');
const modalClose = document.querySelector('.close-modal');



// fetch employee information from API //
fetch(apiUrl)
  .then(res => res.json())
  .then(res => res.results)
  .then(displayEmployees)
  .catch(err => console.log(err))
  

// Function to display 
  function displayEmployees(employeeInfo) {
        employees = employeeInfo;
        let employeeHTML = "";
            employees.forEach((employee, index) => {
            let picture = employee.picture;
            let name = employee.name;
            let email = employee.email;
            let city = employee.location.city;
            
        employeeHTML += `
            <div class="card" data-index="${index}">
                <img class="avatar" src="${picture.large}">
                <div class="user-info">
                    <h2 class="name">${name.first} ${name.last}</h2>
                    <p class="email">${email}</p>
                    <p class="address">${city}</p>
                </div>
            </div>
      `
    });
        container.innerHTML = employeeHTML;
  };

