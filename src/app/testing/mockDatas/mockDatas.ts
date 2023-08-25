import { DepModel, DoctorModel } from "src/app/core/Models/CommonModels";


export const mockDoctor: DoctorModel = {
    _id: 'mock-id',
    fullName: 'Mock Doctor',
    phone: '1234567890',
    email: 'mock@example.com',
    dateOfBirth: new Date('1990-01-01'),
    qualification: 'MBBS',
    address: '123 Mock Street',
    hospital: 'Mock Hospital',
    timings: [], // Replace with appropriate values
    verification: 'success',
    block: false,
    department: {
      _id: 'dept-id',
      name: 'Mock Department',
      commonDiseases: ['Mock Disease'],
      imageUrl: 'mock-dept-image.jpg',
      list: true,
      description: 'Description of Mock Department',
      doctors: [],
    },
    licenseUrl: 'mock-license-url',
    bio: 'I am a mock doctor.',
    experience: 5,
    priceOnline: 50,
    priceOffline: 100,
    profilePic: 'mock-profile-pic.jpg',
  };

export const Mdoctors:DoctorModel[] = [
    mockDoctor,
    mockDoctor
]

export const mockDepartments: DepModel[] = [
  {
    _id: '1',
    name: 'Department A',
    commonDiseases: ['Disease X', 'Disease Y'],
    imageUrl: 'department-a.jpg',
    list: true,
    description: 'This is Department A',
    doctors: ['Dr. John Doe', 'Dr. Jane Smith'],
  },
  {
    _id: '2',
    name: 'Department B',
    commonDiseases: ['Disease Z', 'Disease W'],
    imageUrl: 'department-b.jpg',
    list: true,
    description: 'This is Department B',
    doctors: ['Dr. Mark Johnson', 'Dr. Emily Brown'],
  },
  // Add more departments as needed
];




