// Async/await method
// V: Prof i'm sorry i couldn't solve this quadrupling bug
async function update_dashboard(){
  try {
    // Ticket 1 Unresolved
    const card1_holder = document.getElementById('ticket1_id');
    // Ticket 2 - Overdue
    const card2_holder = document.getElementById('ticket2_id');
    // Ticket 3 - Open
    const card3_holder = document.getElementById('ticket3_id');
    // Ticket 4 - Open
    const card4_holder = document.getElementById('ticket4_id');

    // Trend 1 Resolved
    const trend1_holder = document.getElementById('trend1_id');
    // Trend 2 Recieved
    const trend2_holder = document.getElementById('trend2_id');
    // Trend 3 Avg 1st res time
    const trend3_holder = document.getElementById('trend3_id');
    // Ticket 4 Avg res time 
    const trend4_holder = document.getElementById('trend4_id');
    // Ticket 5 Res w/in SLA 
    const trend5_holder = document.getElementById('trend5_id');







    const get_data = await fetch("data/content.json");
    const store_data = await get_data.json();


    // Loop for updating tickets
    store_data.tickets.forEach(ticket_item=> {

      // Creating HTML elements for ticket 1- Unresolved
      const ticket1_data = document.createElement('div');
      ticket1_data.innerHTML = `<h5 class="card-title ticket-name">${ticket_item.ticket1_name}</h5>
                                <p class="card-text ticket-count">${ticket_item.ticket1_result}</p>`;
      card1_holder.append(ticket1_data);

      // Creating HTML elements for ticket 2- Overdue
      const ticket2_data = document.createElement('div');
      ticket2_data.innerHTML = `<h5 class="card-title ticket-name">${ticket_item.ticket2_name}</h5>
                              <p class="card-text ticket-count">${ticket_item.ticket2_result}</p>`;
      card2_holder.append(ticket2_data);

      // Creating HTML elements for ticket 3- Open
      const ticket3_data = document.createElement('div');
      ticket3_data.innerHTML = `<h5 class="card-title ticket-name">${ticket_item.ticket3_name}</h5>
                                <p class="card-text ticket-count">${ticket_item.ticket3_result}</p>`;
      card3_holder.append(ticket3_data);

      // Creating HTML elements for ticket 4- Open
      const ticket4_data = document.createElement('div');
      ticket4_data.innerHTML = `<h5 class="card-title ticket-name">${ticket_item.ticket4_name}</h5>
                                <p class="card-text ticket-count">${ticket_item.ticket4_result}</p>`;
      card4_holder.append(ticket4_data);

    });


    // Loop for updating trends
    store_data.todays_trends.forEach(trend_item=>{

      // Creating HTML elements for trend 1 - Resolved
      const trend1_data = document.createElement('div');
      trend1_data.innerHTML = `<h5 class="card-title ticket-name">${trend_item.trend1_name}</h5>
                                <p class="card-text ticket-count">${trend_item.trend1_result}</p>`;
      trend1_holder.append(trend1_data);

      // Creating HTML elements for trend 2 - Recieved 
      const trend2_data = document.createElement('div');
      trend2_data.innerHTML = `<h5 class="card-title ticket-name">${trend_item.trend2_name}</h5>
                                <p class="card-text ticket-count">${trend_item.trend2_result}</p>`;
      trend2_holder.append(trend2_data);

      // Creating HTML elements for trend 3 - Avg 1st res time 
      const trend3_data = document.createElement('div');
      trend3_data.innerHTML = `<h5 class="card-title ticket-name">${trend_item.trend3_name}</h5>
                                <p class="card-text ticket-count">${trend_item.trend3_result}</p>`;
      trend3_holder.append(trend3_data);

      // Creating HTML elements for trend 4 - Avg res time
      const trend4_data = document.createElement('div');
      trend4_data.innerHTML = `<h5 class="card-title ticket-name">${trend_item.trend4_name}</h5>
                                <p class="card-text ticket-count">${trend_item.trend4_result}</p>`;
      trend4_holder.append(trend4_data);

        // Creating HTML elements for trend 5 - Res w/in SLA
        const trend5_data = document.createElement('div');
        trend5_data.innerHTML = `<h5 class="card-title ticket-name">${trend_item.trend5_name}</h5>
                                  <p class="card-text ticket-count">${trend_item.trend5_result}</p>`;
        trend5_holder.append(trend5_data);
      

    });

  } catch (error) {
    console.log('error: something is wrong', error);
  }
}

update_dashboard();