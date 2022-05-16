var express = require('express');
var router = express.Router();

let room_details=[
  {
  id:1,
  seat_capacity: 50,
  amenitie:[
    "WIFI","Air-Conditioning", "Hair-Dryer"," fridge"," coffee-maker" , "microwave"
  ],
  price:5000
 }
];

let customer_details=[
  {
  room_id:1,
  customer_name:"Jhon Cena",
  booking_date:"16-05-2021",
  start_time:"4:00 pm",
  end_time:"5:00 pm",
  room_status:"Booked"
  }
];

/* Create Room */
let RoomIds=[1];
router.post('/create_room',(req,res)=>{
console.log(req.body);

if(RoomIds.includes(req.body.id)){
   
    res.send({ 
        status:400,
        message:"Room Already Exist"
    })
  }else{

    room_details.push(req.body);
    RoomIds.push(req.body.id);
    res.json({ 
        status:200,
        data:room_details,
        message:"Room Created successfully"
    })

  }
    
});

/*Booked Room */
router.post('/book_room',(req,res)=>{
  console.log(req.body);
  customer_details.push(req.body);
      res.json({ 
          status:200,
          data:customer_details,
          message:"Room Booked successfully"
      })
  });

/*List All Data with booked data */
router.get('/booked_room_list',(req,res)=>{

    res.json({ 
        status:200,
        data:customer_details,
    })
});


/*List All Customers with booked data */
router.get('/customer_list',(req,res)=>{

  res.json({ 
      status:200,
      data:customer_details,
  })
});

module.exports = router;
