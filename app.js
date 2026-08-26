const tracks = [
  { group: "juz", number: 78, surah: "Ан-Наба", reciter: "Насер аль-Катами", file: "078 — Ан-Наба — Насер аль-Катами.mp3" },
  { group: "juz", number: 79, surah: "Ан-Назиат", reciter: "Мухаммад аль-Люхайдан", file: "079 — Ан-Назиат — Мухаммад аль-Люхайдан.mp3" },
  { group: "juz", number: 80, surah: "Абаса", reciter: "Ясир ад-Досари", file: "080 — Абаса — Ясир ад-Досари.mp3" },
  { group: "juz", number: 81, surah: "Ат-Таквир", reciter: "Хани ар-Рифаи", file: "081 — Ат-Таквир — Хани ар-Рифаи.mp3" },
  { group: "juz", number: 82, surah: "Аль-Инфитар", reciter: "Ясир ад-Досари", file: "082 — Аль-Инфитар — Ясир ад-Досари.mp3" },
  { group: "juz", number: 83, surah: "Аль-Мутаффифин", reciter: "Насер аль-Катами", file: "083 — Аль-Мутаффифин — Насер аль-Катами.mp3" },
  { group: "juz", number: 84, surah: "Аль-Иншикак", reciter: "Мухаммад Сиддик аль-Миншави", file: "084 — Аль-Иншикак — Мухаммад Сиддик аль-Миншави.mp3" },
  { group: "juz", number: 85, surah: "Аль-Бурудж", reciter: "Мухаммад аль-Люхайдан", file: "085 — Аль-Бурудж — Мухаммад аль-Люхайдан.mp3" },
  { group: "juz", number: 86, surah: "Ат-Тарик", reciter: "Ясир ад-Досари", file: "086 — Ат-Тарик — Ясир ад-Досари.mp3" },
  { group: "juz", number: 87, surah: "Аль-Аля", reciter: "Хани ар-Рифаи", file: "087 — Аль-Аля — Хани ар-Рифаи.mp3" },
  { group: "juz", number: 88, surah: "Аль-Гашия", reciter: "Ясир ад-Досари", file: "088 — Аль-Гашия — Ясир ад-Досари.mp3" },
  { group: "juz", number: 89, surah: "Аль-Фаджр", reciter: "Ясир ад-Досари", file: "089 — Аль-Фаджр — Ясир ад-Досари.mp3" },
  { group: "juz", number: 90, surah: "Аль-Балад", reciter: "Насер аль-Катами", file: "090 — Аль-Балад — Насер аль-Катами.mp3" },
  { group: "juz", number: 91, surah: "Аш-Шамс", reciter: "Хани ар-Рифаи", file: "091 — Аш-Шамс — Хани ар-Рифаи.mp3" },
  { group: "juz", number: 92, surah: "Аль-Лейль", reciter: "Мухаммад аль-Люхайдан", file: "092 — Аль-Лейль — Мухаммад аль-Люхайдан.mp3" },
  { group: "juz", number: 93, surah: "Ад-Духа", reciter: "Мухаммад аль-Люхайдан", file: "093 — Ад-Духа — Мухаммад аль-Люхайдан.mp3" },
  { group: "juz", number: 94, surah: "Аш-Шарх", reciter: "Ясир ад-Досари", file: "094 — Аш-Шарх — Ясир ад-Досари.mp3" },
  { group: "juz", number: 95, surah: "Ат-Тин", reciter: "Мухаммад Сиддик аль-Миншави", file: "095 — Ат-Тин — Мухаммад Сиддик аль-Миншави.mp3" },
  { group: "juz", number: 96, surah: "Аль-Аляк", reciter: "Мухаммад аль-Люхайдан", file: "096 — Аль-Аляк — Мухаммад аль-Люхайдан.mp3" },
  { group: "juz", number: 97, surah: "Аль-Кадр", reciter: "Хани ар-Рифаи", file: "097 — Аль-Кадр — Хани ар-Рифаи.mp3" },
  { group: "juz", number: 98, surah: "Аль-Баййина", reciter: "Ясир ад-Досари", file: "098 — Аль-Баййина — Ясир ад-Досари.mp3" },
  { group: "juz", number: 99, surah: "Аз-Зальзаля", reciter: "Насер аль-Катами", file: "099 — Аз-Зальзаля — Насер аль-Катами.mp3" },
  { group: "juz", number: 100, surah: "Аль-Адият", reciter: "Хани ар-Рифаи", file: "100 — Аль-Адият — Хани ар-Рифаи.mp3" },
  { group: "juz", number: 101, surah: "Аль-Кариа", reciter: "Мухаммад Сиддик аль-Миншави", file: "101 — Аль-Кариа — Мухаммад Сиддик аль-Миншави.mp3" },
  { group: "juz", number: 102, surah: "Ат-Такасур", reciter: "Ясир ад-Досари", file: "102 — Ат-Такасур — Ясир ад-Досари.mp3" },
  { group: "juz", number: 103, surah: "Аль-Аср", reciter: "Мухаммад аль-Люхайдан", file: "103 — Аль-Аср — Мухаммад аль-Люхайдан.mp3" },
  { group: "juz", number: 104, surah: "Аль-Хумаза", reciter: "Хани ар-Рифаи", file: "104 — Аль-Хумаза — Хани ар-Рифаи.mp3" },
  { group: "juz", number: 105, surah: "Аль-Филь", reciter: "Насер аль-Катами", file: "105 — Аль-Филь — Насер аль-Катами.mp3" },
  { group: "juz", number: 106, surah: "Курайш", reciter: "Ясир ад-Досари", file: "106 — Курайш — Ясир ад-Досари.mp3" },
  { group: "juz", number: 107, surah: "Аль-Маун", reciter: "Мухаммад Сиддик аль-Миншави", file: "107 — Аль-Маун — Мухаммад Сиддик аль-Миншави.mp3" },
  { group: "juz", number: 108, surah: "Аль-Каусар", reciter: "Мухаммад аль-Люхайдан", file: "108 — Аль-Каусар — Мухаммад аль-Люхайдан.mp3" },
  { group: "juz", number: 109, surah: "Аль-Кафирун", reciter: "Насер аль-Катами", file: "109 — Аль-Кафирун — Насер аль-Катами.mp3" },
  { group: "juz", number: 110, surah: "Ан-Наср", reciter: "Хани ар-Рифаи", file: "110 — Ан-Наср — Хани ар-Рифаи.mp3" },
  { group: "juz", number: 111, surah: "Аль-Масад", reciter: "Ясир ад-Досари", file: "111 — Аль-Масад — Ясир ад-Досари.mp3" },
  { group: "juz", number: 112, surah: "Аль-Ихляс", reciter: "Мухаммад Сиддик аль-Миншави", file: "112 — Аль-Ихляс — Мухаммад Сиддик аль-Миншави.mp3" },
  { group: "juz", number: 113, surah: "Аль-Фаляк", reciter: "Ясир ад-Досари", file: "113 — Аль-Фаляк — Ясир ад-Досари.mp3" },
  { group: "juz", number: 114, surah: "Ан-Нас", reciter: "Мухаммад аль-Люхайдан", file: "114 — Ан-Нас — Мухаммад аль-Люхайдан.mp3" },
  { group: "excerpt", number: 19, surah: "Марьям", reciter: "Мухаммад аль-Люхайдан", note: "Финал суры", file: "07 — Мухаммад аль-Люхайдан — финал суры Марьям (19).mp3" },
  { group: "excerpt", number: 25, surah: "Аль-Фуркан", reciter: "Мухаммад аль-Люхайдан", note: "Финал суры", file: "08 — Мухаммад аль-Люхайдан — финал суры Аль-Фуркан (25).mp3" },
  { group: "excerpt", number: 50, surah: "Каф", reciter: "Мухаммад аль-Люхайдан", note: "Начало суры", file: "09 — Мухаммад аль-Люхайдан — начало суры Каф (50).mp3" },
  { group: "excerpt", number: 23, surah: "Аль-Муминун", reciter: "Ясир ад-Досари", note: "Начало суры", file: "10 — Ясир ад-Досари — начало суры Аль-Муминун (23).mp3" },
  { group: "excerpt", number: 39, surah: "Аз-Зумар", reciter: "Ясир ад-Досари", note: "Начало суры", file: "11 — Ясир ад-Досари — начало суры Аз-Зумар (39).mp3" },
  { group: "excerpt", number: 75, surah: "Аль-Кияма", reciter: "Ясир ад-Досари", note: "Начало суры", file: "12 — Ясир ад-Досари — начало суры Аль-Кияма (75).mp3" },
  { group: "excerpt", number: 39, surah: "Аз-Зумар", reciter: "Идрис Абкар", note: "Аяты 53–61 · о милости Аллаха", featured: true, file: "13 — Идрис Абкар — Аз-Зумар 53–61.mp3" },
  { group: "excerpt", number: 19, surah: "Марьям", reciter: "Идрис Абкар", note: "Аяты 58–65", featured: true, file: "14 — Идрис Абкар — Марьям 58–65.mp3" },
  { group: "excerpt", number: 69, surah: "Аль-Хакка", reciter: "Абдуррахман аль-Усси", note: "Аяты 13–37", featured: true, file: "15 — Абдуррахман аль-Усси — Аль-Хакка 13–37.mp3" },
  { group: "excerpt", number: 59, surah: "Аль-Хашр", reciter: "Абдуррахман аль-Усси", note: "Аяты 18–24", featured: true, file: "16 — Абдуррахман аль-Усси — Аль-Хашр 18–24.mp3" },
  { group: "excerpt", number: 23, surah: "Аль-Муминун", reciter: "Ясир ад-Досари", note: "Аяты 99–118 · завершение суры", featured: true, file: "17 — Ясир ад-Досари — Аль-Муминун 99–118.mp3" },
  { group: "excerpt", number: 54, surah: "Аль-Камар", reciter: "Мухаммад аль-Люхайдан", note: "Полная сура", featured: true, file: "18 — Мухаммад аль-Люхайдан — сура Аль-Камар (54).mp3" },
  { group: "excerpt", number: 39, surah: "Аз-Зумар", reciter: "Насер аль-Катами", note: "Аяты 71–75 · завершение суры", featured: true, file: "19 — Насер аль-Катами — Аз-Зумар 71–75.mp3" },
  { group: "excerpt", number: 59, surah: "Аль-Хашр", reciter: "Хани ар-Рифаи", note: "Аяты 21–24", featured: true, file: "20 — Хани ар-Рифаи — Аль-Хашр 21–24.mp3" },
  { group: "excerpt", number: 19, surah: "Марьям", reciter: "Умар Сильдинский", note: "Полная сура", featured: true, file: "21 — Умар Сильдинский — Марьям.mp3" },
  { group: "excerpt", number: 38, surah: "Сад", reciter: "Умар Сильдинский", note: "Аяты 44–50", featured: true, file: "22 — Умар Сильдинский — Сад 44–50.mp3" },
  { group: "excerpt", number: 18, surah: "Аль-Кахф", reciter: "Умар Сильдинский", note: "Полная сура", featured: true, file: "23 — Умар Сильдинский — Аль-Кахф.mp3" },
  { group: "excerpt", number: 25, surah: "Аль-Фуркан", reciter: "Умар Сильдинский", note: "Аяты 72–75", featured: true, file: "24 — Умар Сильдинский — Аль-Фуркан 72–75.mp3" }
];

const juzList = document.querySelector("#juz-list");
const excerptList = document.querySelector("#excerpt-list");
const searchInput = document.querySelector("#search");
const resultCount = document.querySelector("#result-count");
const offlineButton = document.querySelector("#offline-button");
const offlineStatus = document.querySelector("#offline-status");
const shareButton = document.querySelector("#share-button");

const audioUrl = (file) => {
  const encoded = encodeURIComponent(file).replaceAll("%2F", "/");
  return `audio/${encoded}`;
};

function trackCard(track) {
  const article = document.createElement("article");
  article.className = "track-card";
  article.dataset.search = `${track.number} ${track.surah} ${track.reciter} ${track.note ?? ""}`.toLocaleLowerCase("ru");
  const url = audioUrl(track.file);
  article.innerHTML = `
    <div class="track-heading">
      <span class="track-number">${track.number}</span>
      <div>
        <h3>Сура ${track.surah}</h3>
        <p class="track-meta">${track.reciter}</p>
        ${track.note ? `<p class="track-note">${track.note}</p>` : ""}
        ${track.featured ? `<span class="track-badge">Особенно сильное чтение</span>` : ""}
      </div>
    </div>
    <div class="track-controls">
      <audio controls preload="none" src="${url}" aria-label="Сура ${track.surah}, ${track.reciter}"></audio>
      <a class="download-link" href="${url}" download>Скачать</a>
    </div>`;
  return article;
}

for (const track of tracks) {
  (track.group === "juz" ? juzList : excerptList).append(trackCard(track));
}

const allCards = [...document.querySelectorAll(".track-card")];
const allAudio = [...document.querySelectorAll("audio")];
const localTracks = tracks;

for (const player of allAudio) {
  player.addEventListener("play", () => {
    for (const other of allAudio) if (other !== player) other.pause();
  });
  player.addEventListener("ended", async () => {
    const visibleCards = allCards.filter((card) => !card.hidden);
    const currentCard = player.closest(".track-card");
    const nextCard = visibleCards[visibleCards.indexOf(currentCard) + 1];
    const nextPlayer = nextCard?.querySelector("audio");
    if (!nextPlayer) return;
    nextCard.scrollIntoView({ behavior: "smooth", block: "center" });
    try {
      await nextPlayer.play();
    } catch {
      offlineStatus.textContent = "Следующая запись готова — нажмите ▶︎, если браузер остановил автозапуск.";
    }
  });
}

function filterTracks() {
  const query = searchInput.value.trim().toLocaleLowerCase("ru");
  let visible = 0;
  for (const card of allCards) {
    const matches = !query || card.dataset.search.includes(query);
    card.hidden = !matches;
    if (matches) visible += 1;
  }
  resultCount.textContent = query ? `Найдено записей: ${visible}` : `Всего записей: ${tracks.length}`;
}

searchInput.addEventListener("input", filterTracks);
filterTracks();

shareButton.addEventListener("click", async () => {
  const data = { title: document.title, text: "Сакина — 30-й джуз и избранные чтения Корана", url: location.href };
  try {
    if (navigator.share) await navigator.share(data);
    else {
      await navigator.clipboard.writeText(location.href);
      shareButton.textContent = "Ссылка скопирована";
      setTimeout(() => (shareButton.textContent = "Поделиться сайтом"), 2200);
    }
  } catch (error) {
    if (error?.name !== "AbortError") offlineStatus.textContent = "Не удалось открыть меню. Скопируйте адрес сайта из строки браузера.";
  }
});

offlineButton.addEventListener("click", async () => {
  if (!("caches" in window)) {
    offlineStatus.textContent = "Этот браузер не поддерживает сохранение сайта. Используйте кнопки «Скачать» рядом с записями.";
    return;
  }

  offlineButton.disabled = true;
  offlineStatus.textContent = "Подготавливаю сохранение…";
  try {
    if (navigator.storage?.persist) await navigator.storage.persist();
    const cache = await caches.open("quran-audio-v3");
    const urls = localTracks.map((track) => new URL(audioUrl(track.file), location.href).href);
    let done = 0;
    for (const url of urls) {
      if (!(await cache.match(url))) {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Не удалось загрузить ${url}`);
        await cache.put(url, response);
      }
      done += 1;
      offlineStatus.textContent = `Сохранено ${done} из ${urls.length} записей… Не закрывайте страницу.`;
    }
    offlineStatus.textContent = `Готово: все ${localTracks.length} аудиозаписей сохранены на этом устройстве для прослушивания без интернета.`;
    offlineButton.textContent = "Сохранено офлайн ✓";
  } catch {
    offlineStatus.textContent = "Сохранение остановилось. Проверьте свободное место и интернет, затем нажмите кнопку ещё раз — уже сохранённые записи не загрузятся повторно.";
    offlineButton.disabled = false;
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
