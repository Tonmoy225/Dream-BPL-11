import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayerProps {
  playersPromise: Promise<Iplayer[]>;
  coin : number;
  setCoin : Dispatch<SetStateAction<number>>;
  
}

const Players = ({ playersPromise ,coin ,setCoin}: PlayerProps) => {
  console.log(playersPromise);
  const players = use(playersPromise);
  // console.log(players, "players");



  const [buttonType, setButtonType] = useState <"available" | "selected">("available"); // available or selected
  const [selectedPlayers, setSelectedPlayers] =useState <Iplayer[]>([]);




  console.log(buttonType);

  const handleUpldateBtnType = (type :"available" | "selected") => {
    setButtonType(type);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 mb-2">
        <h2 className="font-bold text-xl">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>

        <div>
         
          <button  onClick ={() => handleUpldateBtnType("available")}
          className={`btn  ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}>Available</button>
          
          <button
           onClick ={() => handleUpldateBtnType("selected")}
           className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}>Selected</button>
        </div>
      </div>

      <div>
        {buttonType === "available" ? (
          <AvailablePlayers
            players={players}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            coin={coin}
            setCoin={setCoin}
          />
        )}
      </div>
    </div>
  );
};

export default Players;
