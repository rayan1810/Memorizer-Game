import * as React from "react";
import { View, Text } from "react-native";
import { Card } from "../../components";
import { generateGameData } from "../../utils";
import { Style } from "./styles";

export function GameScreen() {
  const boardSize = 8;
  const [gameData, setGameData] = React.useState(generateGameData(boardSize));
  const [match, setMatch] = React.useState(0);
  const [attempts, setAttempts] = React.useState(0);
  const [firstChoice, setFirstChoice] = React.useState(-1);
  const [gameInactive, setGameInactive] = React.useState(false);

  const validate = (id: number) => {
    setGameInactive(true);
    gameData[id].status = "active";
    if (gameData[id].id === gameData[firstChoice].id) {
      gameData[id].status = "matched";
      gameData[firstChoice].status = "matched";
      setGameData([...gameData]);
      setMatch(match + 1);
      setFirstChoice(-1);
      setGameInactive(false);
    } else {
      gameData[id].status = "invalid";
      gameData[firstChoice].status = "invalid";
      setGameData([...gameData]);
      setTimeout(() => {
        gameData[id].status = "";
        gameData[firstChoice].status = "";
        setGameData([...gameData]);
        setFirstChoice(-1);
        setGameInactive(false);
      }, 1500);
    }
  };

  const handleFlip = (id: number) => {
    if (firstChoice === -1) {
      gameData[id].status = "active";
      setGameData([...gameData]);
      setFirstChoice(id);
    } else {
      setAttempts(attempts + 1);
      validate(id);
    }
  };

  React.useEffect(() => {
    if (match === boardSize) {
      alert("Congratulations! You won the game in " + attempts + " attempts");
      setGameData(generateGameData(boardSize));
      setMatch(0);
      setAttempts(0);
    }
  }, [match]);

  return (
    // @ts-ignore
    <View>
      <View style={Style.container}>
        <Text>Matches: {match} </Text>
        <View style={Style.spacer} />
        <Text>Attempts: {attempts}</Text>
      </View>
      <View style={Style.board}>
        {gameData.map((item: any, index: number) => {
          return (
            <Card
              key={index}
              item={item}
              id={index}
              handleFlip={handleFlip}
              gameInactive={gameInactive}
            />
          );
        })}
      </View>
    </View>
  );
}
