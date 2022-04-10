import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CardList from './Components/CardList';
import Scroll from './Components/Scroll';
import SearchBox from './Components/SearchBox';
import Loading from './Components/Loading';
const url = 'https://jsonplaceholder.typicode.com/users';

function App() {

  const [robotsData, setRobotsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchField, setSearchField] = useState('');

  const fetchRobots = async () => {
    const response = await axios.get(url);
    setRobotsData(response.data);
    setIsLoading(false)
  }

  useEffect(() => {
    fetchRobots()
  }, [])

  const onSearchChange = (e) => {
    setSearchField(e.target.value)
  }
  const filteredRobots = robotsData.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  const deleteRobot = (id) => {
    setRobotsData(robotsData.filter((item) => item.id !== id));
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="tc mainDiv">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <CardList filteredRobots={filteredRobots} deleteRobot={deleteRobot} />
      </Scroll>
    </div>
  )
}

export default App