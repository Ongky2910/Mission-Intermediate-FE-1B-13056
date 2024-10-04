import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/common/Hero";
import Category from "../components/common/Category";
import Footer from "../components/common/Footer";
import Popup from "../components/common/Popup";
import Flag from "../components/common/Flag";

const Home = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);

  const continueWatching = [
    {
      title: "Don't Look Up",
      image: "src/assets/image 233.png",
      trailerUrl: "https://www.youtube.com/watch?v=RbIxYm3mKzI",
      description: "Description...",
      date: "2023",
      genre: ["Comedy"],
      cast: ["Actor 1"],
      filmmaker: "Filmmaker 1",
      episodes: [],
    },
    {
      title: "Blue Lock",
      image: "src/assets/image 219.png",
      trailerUrl: "url2",
    },
    {
      title: "Avatar: The Way of Water",
      image: "src/assets/image 217.png",
      trailerUrl: "url3",
    },
    { title: "Suzume", image: "src/assets/image 228.png", trailerUrl: "url4" },
    { title: "Fast X", image: "src/assets/Type=4.png", trailerUrl: "url5" },
    { title: "Rio", image: "src/assets/image 208.png", trailerUrl: "url6" },
  ];

  const topRated = [
    { title: "Antman", image: "/src/assets/antman.jpg", isPremium: true },
    { title: "Oppenheimer", image: "src/assets/opeenheiii.jpeg" },
    {
      title: "Game of Thrones",
      image: "src/assets/gameofthornes.jpg",
      isNewEpisode: true,
      isTop10: true,
    },
    {
      title: "Peaky Blinders",
      image: "src/assets/peakyblinderas.jpg",
      isNewEpisode: true,
    },
    { title: "Interstellar", image: "src/assets/interstellarrr1.jpeg" },
    {
      title: "Money Heist",
      image: "src/assets/moneyheist.webp",
      isNewEpisode: true,
    },
    { title: "Thor Ragnarok", image: "src/assets/ragnarok.jpg" },
  ];

  const trendingMovies = [
    {
      title: "The Dark Knight",
      image: "src/assets/darkknight.jpg",
      isTop10: true,
    },
    {
      title: "Avengers: Endgame",
      image: "src/assets/endgame.webp",
      isTop10: true,
    },
    {
      title: "The Godfather",
      image: "src/assets/thegodfatherrr.jpeg",
      isTop10: true,
    },
    {
      title: "Shawshank Redemption",
      image: "src/assets/theshawshankredemptionnn.jpeg",
      isTop10: true,
    },
    {
      title: "Infinity War",
      image: "src/assets/infinitewar.jpg",
      isTop10: true,
    },
    {
      title: "Interstellar",
      image: "src/assets/interstellarrr1.jpeg",
      isTop10: true,
    },
    {
      title: "Guardians of the Galaxy",
      image: "src/assets/gotg.jpg",
      isTop10: true,
    },
    {
      title: "Love & thunder",
      image: "src/assets/love&thunder.jpg",
      isTop10: true,
    },
  ];

  const newReleases = [
    {
      title: "No Way Home",
      image: "src/assets/nowayhome.webp",
      isPremium: true,
    },
    { title: "Thunderbolts", image: "src/assets/thunderbolts.webp" },
    { title: "Sonic 2", image: "src/assets/Number=29.png" },
    { title: "Miles Morales", image: "src/assets/milesmorales.jpeg" },
    { title: "Ted Lasso", image: "src/assets/Number=23.png" },
    { title: "Captain Marvel", image: "src/assets/captmarvel.jpg" },
  ];

  const handleOpenTrailer = (item) => {
    setSelectedSeries(item);
    setPopupOpen(true);
  };

  return (
    <div className="bg-stone-900 min-h-screen overflow-hidden text-white border">
      <Navbar />

      <Hero
        title="Duty After School"
        description="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, departemen pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
        backgroundImage="src/assets/Rectangle 9.png"
      />
      <Category
        title="Melanjutkan Tonton Film"
        items={continueWatching}
        onOpenTrailer={handleOpenTrailer}
      />

      <Category title="Top Rating Film dan Series Hari Ini" items={topRated} />
      <Category title="Film Trending" items={trendingMovies} />
      <Category title="Rilis Baru" items={newReleases} />
      <Popup
        series={selectedSeries}
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default Home;
