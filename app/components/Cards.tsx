import React from 'react';
import cards from '../../data/cards'

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {cards.map((card) => (
        <div key={card.id} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
          <img className="w-full" src={card.imazhi} alt={`${card.emri} ${card.mbiemri}`} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{`${card.emri} ${card.mbiemri}`}</div>
            <p className="text-gray-700 text-base">Mosha: {card.mosha}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;