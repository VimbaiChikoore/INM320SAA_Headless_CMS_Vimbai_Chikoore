// async/await method 

async function ticketStatus(){
    try{
        const ticket1_holder = document.getElementById('ticket1_id')

        const temp = await fetch("data/content.json")
        const data = await temp.json();
        
        data.tickets.forEach(ticket_item=>{
            const pickle = document.createElement('h5');
            pickle.innerHTML = `<h5>${ticket_item.ticket1_name}</h5>`
            ticket1_holder.append(pickle);
            
            console.log(pickle);
        })

    } catch(error){
        console.log(error);
        console.log('error')
    }
}

ticketStatus();