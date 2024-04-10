// Async/await method

async function update_dashboard(){
  try {
    // Ticket 1 Unresolved
    const card1_holder = document.getElementById('ticket1_id');
    // Ticket 2 - Overdue
    const card2_holder = document.getElementById('ticket2_id');

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

    });
  } catch (error) {
    console.log('error:', error);
  }
}

update_dashboard();