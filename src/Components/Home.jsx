import React, { useEffect, useState } from "react";
import axios from "../Utils/Axios";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Header from "./Header";
import HorizontalCard from "./HorizontalCard";
import Loader from "./Loader";

const Home = () => {
  document.title = "MOVIES | Home";

  const [headerPoster, setHeaderPoster] = useState(null);
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getHeaderPoster = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setHeaderPoster(data.results[randomIndex]);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get("/trending/all/day");
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([getHeaderPoster(), getTrending()]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const MainContent = () =>
    isLoading ? (
      <Loader />
    ) : (
      <>
        <Header data={[headerPoster]} />
        <HorizontalCard data={trending} />
      </>
    );

  return (
    <>
      <SideBar />
      <div className="w-[95%] h-full text-white overflow-auto">
        <TopBar />
        <MainContent />
      </div>
    </>
  );
};

export default Home;
