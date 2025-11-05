const brands = {
  Crestron: [
    { name: "RMC4", desc: "Compact 4-Series control system for small rooms and AV applications." },
    { name: "UC-Engine", desc: "Core component of Crestron Flex systems providing unified communications control." },
  ],
  Extron: [
    { name: "DMP128 Plus", desc: "Digital matrix processor with AEC and Dante support for conferencing systems." },
    { name: "NAV E 121", desc: "Encoder for Extron NAV Pro AV over IP system supporting ultra-low latency streaming." },
  ],
  "Q-SYS": [
    { name: "Core 110f", desc: "Integrated audio, video, and control processor for medium-sized AV environments." },
    { name: "NV-21-HU", desc: "Two-endpoint network video decoder/encoder with HDMI and USB bridging." },
  ],
  Biamp: [
    { name: "TesiraFORTÉ DAN AI", desc: "DSP with Dante audio networking and AEC optimized for conference rooms." },
    { name: "Devio SCR-25", desc: "Huddle room solution integrating microphones, DSP, and USB conferencing." },
  ],
};

function showPage(page) {
  const content = document.getElementById("content");
  document.querySelectorAll("nav button").forEach(b => b.classList.remove("underline"));
  event.target.classList.add("underline");

  if (page === "home") {
    content.innerHTML = `
      <h1 class="text-4xl font-bold mb-2">GVM Tech & Service</h1>
      <p class="text-gray-600">Tech & Service</p>
    `;
  } else if (page === "products") {
    let html = `<div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">`;
    for (const brand in brands) {
      html += `
        <div onclick="showPopup('${brand}')" class="cursor-pointer border border-gray-200 rounded-xl p-6 text-center font-semibold text-lg hover:shadow-md transition-all">${brand}</div>
      `;
    }
    html += `</div>`;
    content.innerHTML = html;
  } else if (page === "about") {
    content.innerHTML = `
      <h2 class="text-2xl font-bold mb-4">About GVM Tech & Service</h2>
      <p class="text-gray-600 leading-relaxed max-w-3xl mx-auto">
        GVM Tech & Service provides professional Audio-Visual and Network Integration solutions across Asia.
        Specializing in systems like Crestron, Extron, Q-SYS, and Biamp, we deliver design, programming, and deployment excellence.
      </p>
    `;
  } else if (page === "contact") {
    content.innerHTML = `
      <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
      <p class="text-gray-600">This section will be added later with company contact details and inquiry form.</p>
    `;
  }
}

function showPopup(brand) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popupTitle");
  const list = document.getElementById("popupList");

  title.textContent = brand + " Products";
  list.innerHTML = brands[brand]
    .map(item => `<li class='border-b pb-2'><p class='font-semibold'>${item.name}</p><p class='text-sm text-gray-600'>${item.desc}</p></li>`)
    .join("");
  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

showPage("home");