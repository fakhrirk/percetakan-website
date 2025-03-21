const productInfo = {
  undangan: {
    text: "Percetakan Firdaus menyediakan layanan cetak undangan dengan berbagai desain menarik. Tersedia pilihan undangan pernikahan, khitanan, ulang tahun, dan acara lainnya. Anda bisa memilih dari template yang tersedia atau custom sesuai keinginan.",
    image: "/assets/images/prdk-6.jpeg",
  },
  mug: {
    text: "Percetakan Firdaus menawarkan jasa custom mug dengan desain sesuai keinginan Anda. Bisa untuk souvenir, kado, atau merchandise bisnis. Tersedia berbagai jenis mug dengan kualitas printing terbaik.",
    image: "/assets/images/prdk-8.jpeg",
  },
  banner: {
    text: "Percetakan Firdaus melayani cetak banner dan spanduk dengan berbagai ukuran. Cocok untuk promosi bisnis, acara, atau keperluan lainnya. Menggunakan bahan berkualitas dengan hasil cetak yang tajam.",
    image: "/assets/images/prdk-5.jpeg",
  },
  Buku: {
    text: "Percetakan Firdaus menyediakan layanan cetak buku yang profesional dan berkualitas untuk berbagai kebutuhan Anda. Dengan menggunakan teknologi cetak terbaru, kami menjamin hasil cetakan yang tajam, tahan lama, dan sesuai ekspektasi. Kami melayani berbagai jenis cetak buku, seperti buku teks, buku cerita, buku panduan, dan lainnya, dengan pilihan desain dan material sesuai keinginan.",
    image: "/assets/images/prdk-4.jpeg",
  },
  stiker: {
    text: "Percetakan Firdaus melayani cetak stiker dengan bahan vinyl atau kertas stiker. Bisa custom bentuk dan ukuran sesuai kebutuhan.",
    image: "/assets/images/prdk-7.jpeg",
  },
  brosur: {
    text: "Percetakan Firdaus menyediakan cetak brosur promosi dengan berbagai pilihan kertas dan ukuran. Desain bisa disesuaikan dengan kebutuhan bisnis Anda.",
    image: "https://example-images.com/brosur.jpg",
  },
  default: {
    text: "Maaf, saya Bot Percetakan Firdaus tidak memiliki informasi spesifik tentang produk tersebut.",
    image: null,
  },
};

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.toLowerCase();
  const chatMessages = document.getElementById("chatMessages");

  // Menambahkan pesan user
  chatMessages.innerHTML += `
        <div class="message user">
          ${input.value}
        </div>
      `;

  // Mendapatkan respons
  let response = productInfo.default;
  for (let product in productInfo) {
    if (message.includes(product)) {
      response = productInfo[product];
      break;
    }
  }

  // Menambahkan respons bot
  setTimeout(() => {
    let botResponse = `
          <div class="message bot">
            ${response.text}
        `;

    // pembukaan
    if (message.includes("halo") || message.includes("hai") || message.includes("selamat") || message.includes("bismillah")) {
      botResponse += `
          ${message}! Selamat datang di website Percetakan Firdaus, ada yang bisa mimin bantu ?
          `;
    } else {
      if (message.includes("assalamualaikum") || message.includes("assalamu'alaikum")) {
        botResponse += `Waalaikumsalam. Selamat datang di website Percetakan Firdaus, ada yang bisa mimin bantu ?`;
      }
    }

    // Jika user menanyakan tentang contoh/gambar
    if (message.includes("contoh") || message.includes("gambar") || message.includes("foto") || message.includes("desain") || message.includes("design")) {
      if (response.image) {
        botResponse += `
              <br><br>
              Berikut adalah contoh produk kami:<br>
              <img src="${response.image}" alt="Product Image" class="product-image">
            `;
      } else {
        botResponse += `<br><br>Maaf, saat ini contoh gambar belum tersedia.`;
      }
    }

    // Jika user menanyakan tentang harga atau desain lain
    if (message.includes("harga") || message.includes("desain lainnya") || message.includes("pesan")) {
      botResponse += `
            <br><br>
            Untuk informasi lebih detail mengenai harga dan desain lainnya, silakan kunjungi: 
            <a href="https://bit.ly/percetakanfirdaus-contact" class="link" target="_blank">https://bit.ly/percetakanfirdaus-contact</a>
          `;
    }

    botResponse += `</div>`;
    chatMessages.innerHTML += botResponse;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 500);

  input.value = "";
}

// Event listener untuk tombol Enter
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
