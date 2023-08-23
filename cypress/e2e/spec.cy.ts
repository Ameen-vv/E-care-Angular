const Dappointments = {
  _id: "1",
  doctorId: {
      _id: "doc123",
      fullName: "Dr. Sarah Smith",
      specialization: "Cardiologist",
      // Other DoctorModel properties
  },
  patientId: {
      _id: "user456",
      fullName: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
      // Other UserModel properties
  },
  slot: "10:00 AM - 11:00 AM",
  paymentStatus: true,
  date: new Date("2023-08-30"),
  status: "booked",
  createdAt: new Date(),
  price: 100,
  paymentId: "pay789",
  paymentMode: "online"
}

const Dapp = [
  Dappointments,
  Dappointments
]

describe('My First Test', () => {
  const email = 'test@email.com';
  const password = '123'
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Cardiology')
  })

  it('sign in test',()=>{
    cy.visit('/user/signIn');
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password').type(password);
    cy.get('#authForm').submit()
    cy.contains('User with this email dont exist please register');
  })

  it('navigate to doctors page',()=>{
     cy.visit('/');
     cy.contains('Find a Doctor').click();
     cy.url().should('include','doctors');
     localStorage.setItem('token','mockToken');
     cy.contains('View Profile').click();
     cy.url().should('include','doctorDetails')
  })

  it('should check profile',()=>{
    localStorage.setItem('token','mockToken')
    const dummyUser = {
      _id: "1",
      fullName: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
      dateOfBirth: new Date("1990-01-15"),
      block: false,
      createdAt: new Date(),
      profilePic: "profile.jpg",
      address: "123 Main Street, Cityville"
    };
    cy.log('Visited user profile');
    cy.intercept({
      method:'GET',
      url:'http://localhost:2000/getUserDetails'
    }, {
      statusCode: 200,
      body: { data: dummyUser }
    }).as('getUserProfile');

    cy.intercept({
      method:'GET',
      url:'http://localhost:2000/getAppointments'
    }, {
      statusCode: 200,
      body: { data: Dapp }
    })
    .as('getAppointments');

    cy.visit('user/profile');
  
    cy.wait('@getUserProfile');
    cy.wait('@getAppointments');
  })

 


})
