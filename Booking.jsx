import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';
import BookingService from '../services/BookingService';
import { toast } from 'react-toastify';

const Booking = () => {
  const { movieId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    const booked = BookingService.getBookedSeats(movieId);
    setBookedSeats(booked);
  }, [movieId]);

  const handleSeatSelect = (seatId) => {
    if (bookedSeats.includes(seatId)) return; // Не дозволяємо обирати вже заброньовані
  
    if (selectedSeats.includes(seatId)) {
      // Якщо вже вибране — знімаємо
      setSelectedSeats(prev => prev.filter(id => id !== seatId));
    } else {
      // Інакше додаємо
      setSelectedSeats(prev => [...prev, seatId]);
    }
  };
  

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Будь ласка, заповніть всі поля");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      toast.error("Невірний формат email");
      return false;
    }
    return true;
  };

  return (
    <div className="booking-page">
      <h2>Book for film ID: {movieId}</h2>
      <CinemaHall 
        onSeatSelect={handleSeatSelect}
        selectedSeats={selectedSeats}
        bookedSeats={bookedSeats}
      />
      <div className="booking-form">
        <h3>📝 Enter your contacts</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <button 
          className="btn-booking"
          onClick={() => validateForm() && toast.success("Успішне бронювання!")}
        >
          🎟️ Book now
        </button>
      </div>
    </div>
  );
};

export default Booking;