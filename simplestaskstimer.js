import { simplestaskstimer} from '@suseinose/proxy';   
import { simplestaskstimer} from '@suseinose/sleep';
class Event {
  constructor(name, date, capacity) {
      this.name = name;
      this.date = date;
      this.capacity = capacity;
      this.bookings = [];
  }

  bookTicket(user) {
      if (this.bookings.length < this.capacity) {
          this.bookings.push(user);
          console.log(`${user} booked a ticket for ${this.name}`);
      } else {
          console.log(`Sorry, ${this.name} is fully booked.`);
      }
  }

  viewBookings() {
      console.log(`Bookings for ${this.name}:`);
      this.bookings.forEach((user, index) => {
          console.log(`${index + 1}. ${user}`);
      });
  }
}

// Example usage
const concert = new Event('Concert', '2024-04-15', 100);
concert.bookTicket('Alice');
concert.bookTicket('Bob');
concert.bookTicket('Charlie');
concert.viewBookings();

