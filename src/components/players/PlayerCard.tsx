
import { useState, type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../types/player';
import { FaUser, FaGlobe } from 'react-icons/fa';
import { MdSportsCricket } from 'react-icons/md';
import { Bounce, toast } from 'react-toastify';

interface PlayerCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({ player, coin, setCoin ,selectedPlayers ,setSelectedPlayers}: PlayerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);
  console.log(isSelected,setIsSelected,"isSelected,setIsSelected");
  // console.log(coin, setCoin, "PlayerCard");

  const handleSelectPlayer = () => {
    setIsSelected(true);

    const newCoinPrice = coin - player.price;
    if (newCoinPrice >= 0) {
      setCoin(newCoinPrice);
      // toast.success(`${player.playerName} is purchased!`);
      toast(`${player.playerName} is purchased!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      toast.error("Insufficient coins to select this player.");
    }

    // Selected player logic :
    setSelectedPlayers([...selectedPlayers, player]);
  };


  return (
    <div className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Player Image */}
      <figure className="relative h-56 overflow-hidden bg-base-200">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Player Type Badge */}
        <div className="absolute right-3 top-3">
          <span className="badge badge-primary px-3 py-3 font-semibold shadow-sm">
            {player.playerType}
          </span>
        </div>
      </figure>

      <div className="card-body gap-4 p-5">

        {/* Player Name */}
        <div className="flex items-center gap-2">
          <FaUser className="shrink-0 text-primary" />
          <h2 className="card-title line-clamp-1 text-lg font-bold">
            {player.playerName}
          </h2>
        </div>

        {/* Origin */}
        <div className="flex items-center gap-2 text-sm text-base-content/70">
          <FaGlobe className="shrink-0" />
          <span>{player.origin}</span>
        </div>

        <div className="divider my-0" />

        {/* Playing Styles */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-base-content/50">
            Player Details
          </h3>

          <div className="flex items-start justify-between gap-3">
            <span className="text-sm text-base-content/60">
              Batting Style
            </span>
            <span className="text-right text-sm font-semibold">
              {player.battingStyle}
            </span>
          </div>

          <div className="flex items-start justify-between gap-3">
            <span className="text-sm text-base-content/60">
              Bowling Style
            </span>
            <span className="text-right text-sm font-semibold">
              {player.bowlingStyle}
            </span>
          </div>
        </div>

        <div className="divider my-0" />

        {/* Price and Action */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="mb-1 text-xs text-base-content/60">
              Player Price
            </p>
            <h3 className="text-2xl font-extrabold text-primary">
              {player.price}
            </h3>
          </div>

          <button
            onClick={() => handleSelectPlayer()}
            type="button"
            className={`btn btn-primary rounded-xl px-4 shadow-sm transition-all hover:shadow-md`}
            // disabled={isSelected === true ? true : false}
            // disabled={isSelected  ? true : false} 
            disabled={isSelected}
          >
            <MdSportsCricket className="text-lg" />
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default PlayerCard;