let saleData = [
              {product:'laptop',price:1200},
              {product:'smartphone',price:800},
              {product:'Hedphone',price:150},
              {product:'keyboard',price:80}         
]
let totalSale = saleData.reduce((acc,item) =>acc+item.price,0);
//console.log("tottal sale = ", totalSale);

inventory = [
            {name:"widet A",stock:30},
            {name:"widet B",stock:120},
            {name:"widet C",stock:45},
            {name:"widet D",stock:70}
]

let lowStockItme = inventory.reduce((acc,item) => (acc<item.price ) ? item.price : acc);

//console.log("low stock item = ", lowStockItme);


let userActivity = [
                     {user:"alice",activityCount:45},
                     {user:"bob",activityCount:72},
                     {user:"simon",activityCount:33}
]

mostActive = userActivity.reduce((acc,user) => {
                  return acc.activityCount>user.activityCount ? acc : user;      
}); 
//console.log("most active user = ",mostActive);


let expenses = [
                  {discription:"groceries",amount:50,category:"food"},
                  {discription:"Electricity bill",amount:100,category:"utility"},
                  {discription:"dinner",amount:30,category:"food"},
                  {discription:"internet bill",amount:50,category:"utility"}

]
//show total amount report by category 
expenseReport = expenses.reduce((acc,expnese) => {

    acc[expnese.category] = acc[expnese.category]+expnese.amount;
   // acc[expnese.category]  = (acc[expnese.category] || 0) + expnese.amount;   //use for dynamically adding categories
    return acc
},{food:0,utility:0});
//console.log("expenses  = ",expenseReport);



let task = [
                {discription:"write report",completed:false,priority:2},
                {discription:"send email",completed:true,priority:3},
                {discription:"prepare presentation",completed:false,priority:1}
];

let incompleteTask = task.filter(obj => !obj.completed)
                         .sort((a,b) => a.priority-b.priority);

                        // console.log("Incomplted task ",incompleteTask);


    
    let movieRatings = [                    
                          {title:"movie A",ratings:[4,5,3]},
                          {title:"movie B",ratings:[5,5,4]},
                          {title:"movie C",ratings:[3,4,2]}
    ]

     

    let avereageRatings = movieRatings.map((movie =>{
           total = movie.ratings.reduce((acc,rating) => acc+rating,0);
           average = total / movie.ratings.length;
           return {title:movie.title,averageRating:average.toFixed(2)}
    }));
                                             

    console.log("movie rating by average ",avereageRatings);
    