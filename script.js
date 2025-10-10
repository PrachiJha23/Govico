// Weekly menu data
const menuData = [
  {
    day: "MONDAY",
    meals: [
      { label: "Breakfast", items: [{name:"Poha", price:"₹169"}, {name:"Aloo Paratha (4 pcs)", price:"₹179"}] },
      { label: "Lunch", items: [{name:"4 Roti, Rice, Chilka Moong Dal & Lauki Kofta", price:"₹279"}] },
      { label: "Dinner", items: [{name:"4 Roti with Aloo Gobi Sabzi & Dry Bhindi", price:"₹249"}] }
    ]
  },
  {
    day: "TUESDAY",
    meals: [
      { label: "Breakfast", items: [{name:"Idli (6 pcs) Sambhar", price:"₹189"}, {name:"Khichu (10 pcs)", price:"₹149"}] },
      { label: "Lunch", items: [{name:"4 Roti, Rice, Masala Bhindi & Shahi Paneer", price:"₹299"}] },
      { label: "Dinner", items: [{name:"4 Roti with Dum Aloo & Dry Ghiya", price:"₹249"}] }
    ]
  },
  {
    day: "WEDNESDAY",
    meals: [
      { label: "Breakfast", items: [{name:"Idli (6 pcs) Sambhar", price:"₹189"}, {name:"Khichu (10 pcs)", price:"₹149"}] },
      { label: "Lunch", items: [{name:"4 Roti, Rice, Masala Bhindi & Shahi Paneer", price:"₹299"}] },
      { label: "Dinner", items: [{name:"4 Roti with Dum Aloo & Dry Ghiya", price:"₹249"}] }
    ]
  },
  {
    day: "THURSDAY",
    meals: [
      { label: "Breakfast", items: [{name:"Khaman (6 pcs)", price:"₹179"}, {name:"Vada-Pav (4 pcs)", price:"₹189"}] },
      { label: "Lunch", items: [{name:"4 Roti, Rice, Sambhar & Dry Aloo", price:"₹269"}] },
      { label: "Dinner", items: [{name:"4 Roti with Aloo Tamatar & Dry Masala Bhindi", price:"₹249"}] }
    ]
  },
  {
    day: "FRIDAY",
    meals: [
      { label: "Breakfast", items: [{name:"Masala Dosa (4 pcs)", price:"₹189"}, {name:"Soyabean Kabab (6 pcs)", price:"₹189"}] },
      { label: "Lunch", items: [{name:"4 Roti, Rice, Kadhi Pakora & Aloo Gobi", price:"₹249"}] },
      { label: "Dinner", items: [{name:"4 Roti with Lauki Kofta & Jeera Aloo", price:"₹249"}] }
    ]
  },
  {
    day: "SATURDAY",
    meals: [
      { label: "Breakfast", items: [{name:"Sooji Rolls (8 pcs)", price:"₹169"}, {name:"Puri (6 pcs) - Sabzi", price:"₹179"}] },
      { label: "Lunch", items: [{name:"4 Roti, Khichdi with Kadhi & Jeera Aloo", price:"₹259"}] },
      { label: "Dinner", items: [{name:"4 Roti with Palak Paneer & Dry Aloo Baingan", price:"₹269"}] }
    ]
  },
  {
    day: "SUNDAY",
    meals: [
      { label: "Breakfast", items: [{name:"4 Aloo Toast (no bread)", price:"₹149"}, {name:"Pav Bhaji", price:"₹199"}] },
      { label: "Lunch", items: [{name:"4 Roti & Rice with Rajma & Masala Paneer Tikka", price:"₹279"}] },
      { label: "Dinner", items: [{name:"4 Roti with Paneer Kofta & Jeera Aloo", price:"₹299"}] }
    ]
  },
];

// Populate menu cards
const menuGrid = document.getElementById('menuGrid');
menuData.forEach(day => {
  const card = document.createElement('div');
  card.className = 'menu-card';
  let mealsHTML = '';
  day.meals.forEach(meal => {
    let itemsHTML = meal.items.map(item => `<li>${item.name}<span>${item.price}</span></li>`).join('');
    mealsHTML += `<div class="meal"><h4>${meal.label}</h4><ul>${itemsHTML}</ul></div>`;
  });
  card.innerHTML = `<h3>${day.day}</h3>${mealsHTML}`;
  menuGrid.appendChild(card);
});
