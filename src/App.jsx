import React, { useState } from 'react'
import {Flex, Heading, Stack, Text, ListItem, List} from '@chakra-ui/layout'
import { Button, Image, Box } from '@chakra-ui/react'

function App() {
  const [gameStarted, setGameStarted]=useState(false);
  const [selectedNumber, setSelectedNumber]=useState();
  const [dice, setDice]=useState(1);
  const [error, setError]=useState(null);
  const [score, setScore]=useState(0);

  const numbers=[1,2,3,4,5,6];
  const startGameHandler=()=>{
    setGameStarted(true)
  }
  
  const onNumberClicked=(value)=>{
    setSelectedNumber(value);
    setError(null)
  }

  const genRandomNo=()=>{
    if(selectedNumber){
      const genratedNo=Math.ceil(Math.random()*6);
      setDice(genratedNo);
    if(selectedNumber===genratedNo){
      setScore((prev)=>prev+genratedNo);
    }else{
      setScore((prev)=>prev-2);
    }
    }else{
      setError("Please Select Number");
    }    
  }
  return (
    <>
      {gameStarted ? (<><Stack justify="center" align="center" maxW="1300px" mx="auto" h="100vh"> 
        <Heading as="h1" fontSize="6xl" mb="8" color={error ? "red" : "black"}>{error ? error : "Select Number"}</Heading>

        <Flex pb="10">
          {numbers.map((value)=>(
          <Flex cursor="pointer" justify="center" align="center" h="50px" w="50px" bg={selectedNumber===value ? "green" : "black"} color="white" fontSize="2xl" key={value} mr={4} borderRadius="md" onClick={()=>onNumberClicked(value)}>
          {value}
        </Flex>
        ))}   
        </Flex>   

        <Box onClick={genRandomNo}><Image cursor="pointer" src={`./dice/dice${dice}.png`}/></Box>  
        <Text as="p" fontSize="xl">Click on dice to Roll</Text>    
        <Text fontSize="8xl" fontWeight="bold" color={score >= 0 ? "green" : "red"}>{score}</Text>
        <Text fontSize="6xl" fontWeight="bold">Total Score</Text>
        <Button onClick={()=>setScore(0)}>Reset Score</Button>

      </Stack>
      <Stack maxW="900px" mx="auto">
        <Heading as="h2">Game Rules:-</Heading>
        <List>
        <ListItem>Select Number any number.</ListItem>
        <ListItem>Click on dice image to roll it.</ListItem>
        <ListItem>Select number is equla to obtained dice result then you will get same point of dice.</ListItem>
        <ListItem>Select number is equal to obtained dice restult then you will get same point of dice.</ListItem>
        <ListItem>Select Number any number</ListItem>
        </List>
      </Stack>
      </>) : (<Flex justify="center" align="center">
        <Image width="50%" src="/dices.png" />
        <Stack>
          <Heading fontSize="6xl" as="h1">The Dice Game</Heading>
          <Button alignSelf="flex-end" bg="black" color="white"
           _hover={{bg:"gray"}} onClick={startGameHandler}>Start Game</Button>
        </Stack>
      </Flex>)}
    </>
  )
}

export default App