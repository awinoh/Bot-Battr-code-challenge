import React,{useState,useEffect} from "react";
import BotCard from "./BotCard";


function BotCollection({bots, action, deleteBot}) {

  const addBot = (bot) => {
    action(bot)
  }

  return (
    <div className="ui four column grid">
      <div className="row">
      {bots && bots.map(bot =>
        <BotCard key={bot.id} bot={bot} action={addBot} deleteBot={deleteBot}/>
        )}
      </div>
    </div>
  );
}

export default BotCollection;
