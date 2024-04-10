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

    const get_data = await fetch("data/content.json");
    const store_data = await get_data.json();

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
  } catch (error) {
    console.log('error: something is wrong', error);
  }
}

update_dashboard();