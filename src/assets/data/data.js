export const data = {
  bride: {
    L: {
      id: 1,
      name: "Đức Phú",
      child: "Nguyễn Đức Phú",
      father: "Nguyễn Tuấn Hải",
      mother: "Phạm Thị Nguyệt",
      image: "./src/assets/images/nam.jpg",
    },
    P: {
      id: 2,
      name: "Thanh Huế",
      child: "Nguyễn Thị Huế",
      father: "Nguyễn Văn Sỉu",
      mother: "Bùi Thị Dừa",
      image: "./src/assets/images/nu.jpg",
    },

    couple: "./src/assets/images/couple.jpg",
  },

  time: {
    marriage: {
      year: "2025",
      month: "November",
      date: "16",
      day: "Kamis",
      hours: {
        start: "08.00",
        finish: "Selesai",
      },
    },
    reception: {
      year: "2024",
      month: "November",
      date: "14",
      day: "Kamis",
      hours: {
        start: "11.00",
        finish: "Selesai",
      },
    },
    address:
      "Kp. Lorem, RT 000/ RW 000, Desa.Lorem, Kec.Ipsum, Kab.Lorem, Lorem (1234)",
  },

  link: {
    calendar: "https://calendar.app.google/oSVLRMYC79GzuA4f9",
    map: "https://maps.app.goo.gl/q1Ask2Jgd4ekiiKBA",
  },

  galeri: [
    {
      id: 1,
      image: "./src/assets/images/NTQ06096.jpg",
    },
    {
      id: 2,
      image: "./src/assets/images/NTQ06129.jpg",
    },
    {
      id: 3,
      image: "./src/assets/images/NTQ06866.jpg",
    },
    {
      id: 4,
      image: "./src/assets/images/NTQ06365.jpg",
    },
    // {
    //   id: 5,
    //   image: "./src/assets/images/5.png",
    // },
  ],

  bank: [
    {
      id: 1,
      name: "Lorem Ipsum",
      icon: "./src/assets/images/bca.png",
      rekening: "12345678",
    },
    {
      id: 2,
      name: "Ipsum Lorem",
      icon: "./src/assets/images/bri.png",
      rekening: "12345678",
    },
  ],

  audio: "./src/assets/audio/wedding.mp3",

  api: "https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec",

  navbar: [
    {
      id: 1,
      teks: "Home",
      icon: "bx bxs-home-heart",
      path: "#home",
    },
    {
      id: 2,
      teks: "Mempelai",
      icon: "bx bxs-group",
      path: "#bride",
    },
    {
      id: 3,
      teks: "Tanggal",
      icon: "bx bxs-calendar-check",
      path: "#time",
    },
    {
      id: 4,
      teks: "Galeri",
      icon: "bx bxs-photo-album",
      path: "#galeri",
    },
    {
      id: 5,
      teks: "Ucapan",
      icon: "bx bxs-message-rounded-dots",
      path: "#wishas",
    },
  ],
};
