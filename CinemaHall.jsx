import React from 'react';
import { FaChair } from 'react-icons/fa';

const CinemaHall = ({ onSeatSelect, selectedSeats, bookedSeats }) => {
  const rows = 10;
  const cols = 6;
  const seatLabels = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="cinema-hall-container">
      <div className="cinema-screen"> Screen</div>
      <div className="cinema-hall">
        {Array.from({ length: rows }).map((_, row) => (
          <div key={row} className="seat-row">
            {Array.from({ length: cols }).map((_, col) => {
              const seatId = `${row}-${col}`;
              let status = 'available';
              if (bookedSeats.includes(seatId)) status = 'booked';
              if (selectedSeats.includes(seatId)) status = 'selected';

              return (
                <div
                  key={seatId}
                  className={`seat ${status}`}
                  onClick={() => onSeatSelect(seatId)}
                  data-tooltip={`Ряд ${seatLabels[row]}, Місце ${col + 1}`}
                >
                  <FaChair />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CinemaHall;