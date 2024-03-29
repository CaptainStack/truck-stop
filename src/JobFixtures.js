export const jobs = [
  {
    title: 'Coals to Newcastle',
    referenceId: '18615',
    stops: [
      {
        type: 'PICKUP',
        address: '4506 East Avenue, Renton, Wa 98058',
        cargoDescription: '6 boxes 10x10x23',
        arrivalTime: '2016-01-19T19:14:33.000Z',
        tasks: [{description: 'Receive Bill of Lading', completed: false , GPS: null}, {description: 'Photograph Inventory', completed: false , GPS: null}]
      },
      {
        type: 'DROPOFF',
        address: '6352 Sherwood Drive, Seattle, Wa 98121',
        arrivalTime: '2016-01-19T22:15:52.000Z',
        tasks: [{description: 'Bill of Lading Signed', completed: false , GPS: null}, {description: 'Photograph Inventory', completed: false , GPS: null}]
      },
    ],
  },
  {
    title: 'Twinbrook Creamery To Starbucks',
    referenceId: '548482',
    stops: [
      {
        type: 'PICKUP',
        address: '4103 Fulton Street, Renton, Wa 98058',
        cargoDescription: '5 pallets',
        arrivalTime: '2016-01-20T19:00:00.000Z',
        tasks: [{description: 'Receive Bill of Lading', completed: false , GPS: null}, {description: 'Photograph Inventory', completed: false , GPS: null}]
      },
      {
        type: 'DROPOFF',
        address: '7745 Cherry Street, Seattle, Wa 98121',
        arrivalTime: '2016-01-20T23:10:00.000Z',
        tasks: [{description: 'Bill of Lading Signed', completed: false , GPS: null}, {description: 'Photograph Inventory', completed: false , GPS: null}]
      },
    ],
  },
  {
    title: 'Victrola To Seinheiser',
    referenceId: '4D23C6',
    stops: [
      {
        type: 'PICKUP',
        address: '628 Depot Street, Renton, Wa 98058',
        cargoDescription: '4 pallets',
        arrivalTime: '2016-01-20T21:00:00.000Z',
        tasks: [{description: 'Receive Bill of Lading', completed: false , GPS: null}, {description: 'Photograph Inventory', completed: false , GPS: null}]
      },
      {
        type: 'DROPOFF',
        address: '58 Sunset Avenue, Seattle, Wa 98121',
        arrivalTime: '2016-01-21T00:10:00.000Z',
        tasks: [{description: 'Bill of Lading Signed', completed: false , GPS: null}, {description: 'Photograph Inventory', completed: false , GPS: null}]
      },
    ],
  },
  {
    title: 'Uber To Imprint',
    referenceId: 'B12311',
    stops: [
      {
        type: 'PICKUP',
        address: '163 Cambridge Road, Renton, Wa 98058',
        cargoDescription: '1 box 12x10x12',
        arrivalTime: '2016-01-20T21:00:00.000Z',
        tasks: [{description: 'Receive Bill of Lading', completed: false , GPS: null}, {description: 'Photograph Inventory', completed: false , GPS: null}]
      },
      {
        type: 'DROPOFF',
        address: '668 Jackson Avenue, Seattle, Wa 98121',
        arrivalTime: '2016-01-21T00:10:00.000Z',
        tasks: [{description: 'Bill of Lading Signed', completed: false , GPS: null}, {description: 'Photograph Inventory', completed: false , GPS: null}]
      },
    ],
  },
];
