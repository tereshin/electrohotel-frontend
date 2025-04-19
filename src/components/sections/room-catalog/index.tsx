import React from "react";
import RoomCard from "./room-card"
import rooms from '@/lib/rooms';

const RoomCatalog: React.FC = () => {

  // Create pairs of rooms for the rows
  const createRoomPairs = () => {
    const pairs = [];
    for (let i = 0; i < rooms.length; i += 2) {
      pairs.push(rooms.slice(i, i + 2));
    }
    return pairs;
  };

  const roomPairs = createRoomPairs();

  return (
    <section className="py-12 px-4">
      <div className="max-w-content mx-auto flex flex-col gap-8 md:gap-14">
        <div className="w-full mt-12">
          {/* Room rows */}
          {roomPairs.map((pair, pairIndex) => (
            <React.Fragment key={`pair-${pairIndex}`}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-14 lg:gap-[60px] mb-12">
                {pair.map((room) => (
                  <RoomCard key={room.id} room={room} />
                ))}
                
                {/* If we have an odd number of rooms in the last row, add a spacer */}
                {pairIndex === roomPairs.length - 1 && pair.length === 1 && (
                  <div className="hidden md:block w-full max-w-[600px]"></div>
                )}
              </div>
              
              {/* Add divider except after the last pair */}
              {pairIndex < roomPairs.length - 1 && (
                <div className="w-full h-px bg-[#021A13] opacity-20 my-12"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomCatalog; 