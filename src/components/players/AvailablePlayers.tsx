
import React , { type Dispatch , type SetStateAction } from "react";
import type { Iplayer } from '../../types/player';
import { FaUser } from "react-icons/fa";
import PlayerCard from './PlayerCard';
interface props{
  players : Iplayer[];
  coin : number;
  setCoin : Dispatch<SetStateAction<number>>;
  selectedPlayers : Iplayer[];
  setSelectedPlayers : Dispatch<SetStateAction<Iplayer[]>>;
}

const AvailablePlayers = ({ players , coin ,setCoin ,selectedPlayers ,setSelectedPlayers}: props) => {
    // console.log(players,'players from avaiable players');
    console.log(coin,setCoin ,"Avableable player");
    return (
      <div className='grid grid-cols-3 gap-7 mt-6'>
        {players.map((player : Iplayer ,ind : number) => {
          return <PlayerCard key={ind} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>;
        })}
      </div>
    );
};

export default AvailablePlayers;