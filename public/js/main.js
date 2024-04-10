// Async/await method

async function update_dashboard(){
  try {
    const card1_holder = document.getElementById('ticket1_id');

    const get_data = await fetch("data/content.json");
    const store_data = await get_data.json();

    store_data.tickets.forEach(ticket_item => {

      // Creating HTML elements for ticket 1- Unresolved
      const ticket1_data = document.createElement('div');
      ticket1_data.innerHTML = `<h5 class="card-title ticket-name">${ticket_item.ticket1_name}</h5>
                                <p class="card-text ticket-count">${ticket_item.ticket1_result}</p>`;
      card1_holder.appendChild(ticket1_data);


    });
  } catch (error) {
    console.log('error:', error);
  }
}

update_dashboard();