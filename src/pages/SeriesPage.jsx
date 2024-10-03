import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Dropdown from "/src/components/common/GenreDrop.jsx";
import Hero from "../components/common/Hero";
import Category from "../components/common/Category";
import Footer from "../components/common/Footer";
import Popup from "../components/common/Popup";
import HoverPoster from "/src/components/common/HoverPoster";

const Series = () => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [currentTrailerUrl, setCurrentTrailerUrl] = useState("");
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleOpenTrailer = (trailerUrl, series) => {
    setCurrentTrailerUrl(trailerUrl);
    setSelectedSeries(series);
    console.log("Selected Series:", series);
    setIsTrailerOpen(true);
  };

  const handleCloseTrailer = () => {
    setIsTrailerOpen(false);
    setCurrentTrailerUrl("");
  };

  const handleDropdownChange = (e) => {
    console.log("Selected Genre:", e.target.value);
    setSelectedGenre(value);
  };

  const options = [
    { value: "Aksi", label: "Aksi" },
    { value: "KDrama", label: "KDrama" },
    { value: "Anak-anak", label: "Anak-anak" },
    { value: "Komedi", label: "Komedi" },
    { value: "Anime", label: "Anime" },
    { value: "Petualangan", label: "Petualangan" },
    { value: "Britania", label: "Britania" },
    { value: "Perang", label: "Perang" },
    { value: "Drama", label: "Drama" },
    { value: "Romantis", label: "Romantis" },
    { value: "Sains Ilmiah", label: "Sains Ilmiah" },
    { value: "Kejahatan", label: "Kejahatan" },
    { value: "Fantasi", label: "Fantasi" },
  ];

  const continueWatching = [
    {
      title: "Alice in Borderland",
      image: "src/assets/aliceinborderlandpopup.webp",
      isNewEpisode: true,
      trailerUrl: "https://www.youtube.com/embed/example1",
      date: "2020 12 episode 16+",
      description:
        "Serial televisi Jepang yang bercerita tentang sekelompok anak muda yang terperangkap di dunia paralel dan harus bertahan hidup dengan mengikuti serangkaian permainan maut.",
      genre: ["Thriller", "Drama"],
      cast: ["Kento Yamazaki", "Tao Tsuchiya"],
      filmmaker: "Shinsuke Sato",
      episodes: [
        {
          title: "Episode 1",
          duration: "40m",
          description: "Introduction",
          trailerUrl: "https://www.youtube.com/embed/episode1_trailer",
        },
      ],
    },
    {
      title: "Ted Lasso",
      image: "src/assets/image 237.png",
      isNewEpisode: true,
      trailerUrl: "https://www.youtube.com/embed/example2",
      date: "2020",
      totalEpisodes: "10 Episode",
      ageRating: "16+",
      description:
        "Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke London untuk mengelola AFC Richmond, tim sepakbola Liga Utama Inggris yang kesulitan.",
      genre: [":Komedi", "Drama", "Olahraga"],
      cast: [
        "Jason Sudeikis",
        "Brett Goldstein",
        "Brendan Hunt",
        "Nick Mohammed",
        "dan lain-lain",
      ],
      filmmaker: "Brendan Hunt,Joe Killy,Bill Lawrence",
      episodes: [
        {
          title: "Pilot",
          duration: "30 min",
          description:
            "American football coach Ted Lasso is hired by a wealthy divorcee to coach the English soccer team AFC Richmond",
          trailerUrl: "https://www.youtube.com/embed/episode_trailer1",
          image: "src/assets/image 214.png",
        },
        {
          title: "Biscuits",
          duration: "29 min",
          description:
            "It's Ted's first day of coaching, and fans aren't happy. He makes little headway but remains undeterred as the team...",
          trailerUrl: "https://www.youtube.com/embed/episode_trailer2",
          image: "src/assets/image 209.png",
        },
        {
          title: "Trent Crimm: Independent",
          duration: "3o min",
          description:
            "To arrange an in-depth expose, Rebecca pairs cynical journalist Trent Crimm with Ted for a day.Ted and Roy...",
          trailerUrl: "https://www.youtube.com/embed/episode_trailer2",
          image: "src/assets/image 210.png",
        },
        {
          title: "For The Children",
          duration: "33 min",
          description:
            "Rebecca hosts the team's annual charity benefit, where Ted stages a reconciliation between Roy and Jamie.",
          trailerUrl: "https://www.youtube.com/embed/episode_trailer2",
          image: "src/assets/image 211.png",
        },
        {
          title: "Tan Lines",
          duration: "31 min",
          description:
            "With his wife and son visiting from America, Ted makes drastic changes to the lineup during a critical match.",
          trailerUrl: "https://www.youtube.com/embed/episode_trailer2",
          image: "src/assets/image 212.png",
        },
      ],
    },
    {
      title: "All of Us are Dead",
      image: "src/assets/image 223 (1).png",
      isNewEpisode: true,
      trailerUrl: "https://www.youtube.com/embed/example3",
      description:
        "An American football coach is hired to manage an English soccer team.",
      genre: ["Comedy", "Drama", "Sports"],
      cast: ["Jason Sudeikis", "Hannah Waddingham", "Brett Goldstein"],
      filmmaker: "Bill Lawrence",
      episodes: [
        {
          title: "Pilot",
          duration: "30 min",
          description: "The team is introduced to their new coach.",
          trailerUrl: "https://www.youtube.com/embed/episode_trailer1",
        },
      ],
    },
    {
      title: "The Tomorrow War",
      image: "src/assets/tomorow war.png",
      isNewEpisode: true,
    },
    {
      title: "My Hero Academia",
      image: "src/assets/image 231.png",
      isNewEpisode: true,
    },
    {
      title: "Blue Lock",
      image: "src/assets/image 219.png",
      isNewEpisode: true,
    },
  ];

  const topRated = [
    { title: "Antman", image: "/src/assets/antman.jpg" },
    {
      title: "Oppenheimer",
      image: "src/assets/opeenheiii.jpeg",
      isPremium: true,
    },
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

  return (
    <div className="bg-stone-900 min-h-screen overflow-hidden text-white ">
      <Navbar />
      <Hero
        title="Happiness"
        description="Berlatar waktu masa depan, sebuah gedung apartemen bertingkat tinggi baru saja dibangun di kota besar. Gedung apartemen tersebut memiliki penghuni dari berbagai latar belakang, tetapi sebuah penyakit menular baru merebak. Karena wabah tersebut, apartemen bertingkat tinggi tersebut ditutup. Para penghuni berjuang untuk bertahan hidup, sambil dilanda ketakutan dan ketidakpercayaan terhadap orang lain.
"
        options={options}
        onDropdownChange={handleDropdownChange}
        showDropdown={true}
        backgroundImage="src/assets/Rectangle 9 (1).png"
      />

      <Category
        title="Melanjutkan Tonton Series"
        items={continueWatching}
        onOpenTrailer={handleOpenTrailer}
      />
      <Category
        title="Series Persembahan Chill"
        items={topRated}
        onOpenTrailer={handleOpenTrailer}
      />
      <Category
        title="Top Rating Series Hari Ini"
        items={topRated}
        onOpenTrailer={handleOpenTrailer}
      />
      <Category
        title="Series Trending"
        items={trendingMovies}
        onOpenTrailer={handleOpenTrailer}
      />
      <Category
        title="Rilis Baru"
        items={newReleases}
        onOpenTrailer={handleOpenTrailer}
      />

      <div className="flex flex-wrap">
        {continueWatching.map((series) => (
          <HoverPoster
            key={series.title}
            series={series}
            onClick={() => handleOpenTrailer(series.trailerUrl, series)}
          />
        ))}
      </div>

      <Footer />

      {selectedSeries && (
        <Popup
          series={selectedSeries}
          isOpen={isTrailerOpen}
          videoUrl={currentTrailerUrl}
          onClose={() => setIsTrailerOpen(false)}
        />
      )}
    </div>
  );
};

export default Series;
