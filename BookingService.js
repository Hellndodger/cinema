const BOOKING_KEY = 'cinema_bookings';

const BookingService = {
  getBookings: () => {
    const data = localStorage.getItem(BOOKING_KEY);
    return data ? JSON.parse(data) : {};
  },
  getBookedSeats: (movieId) => {
    const bookings = BookingService.getBookings();
    return bookings[movieId]?.seats || [];
  },
  bookSeats: (movieId, seats, userData) => {
    const bookings = BookingService.getBookings();
    bookings[movieId] = {
      seats: [...(bookings[movieId]?.seats || []), ...seats],
      userData: userData
    };
    localStorage.setItem(BOOKING_KEY, JSON.stringify(bookings));
  }
};

export default BookingService;
