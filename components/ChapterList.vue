<template>
  <div class="course-container">
    <!-- Course Content Section -->
    <div class="course-content">
      <h2 class="course-content-title">Course content</h2>
      <div class="course-stats">
        <span>10 sections • 35 lectures • 4h 15m total length</span>
        <button class="expand-all">Expand all sections</button>
      </div>

      <!-- Section 1 -->
      <div class="section">
        <div class="section-header" @click="toggleSection(0)">
          <div class="section-title">
            <i
              class="fas fa-chevron-down"
              :class="{ rotated: !sections[0].expanded }"
            ></i>
            <h3>INTRODUZIONE A COINBASE Per Comprare BITCOIN</h3>
          </div>
          <span class="section-stats">4 lectures • 13:06</span>
        </div>
        <ul class="lecture-list" v-show="sections[0].expanded">
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Introduction</span>
            </div>
            <span class="time">4:31</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>IMPORTANTE Guarda Prima Di Andare Avanti</span>
            </div>
            <span class="time">1:37</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Invito Per Studenti Al Gruppo Telegram</span>
            </div>
            <span class="time">0:27</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Vantaggi Becker</span>
            </div>
            <span class="time">6:31</span>
          </li>
        </ul>
      </div>

      <!-- Section 2 -->
      <div class="section">
        <div class="section-header" @click="toggleSection(1)">
          <div class="section-title">
            <i
              class="fas fa-chevron-down"
              :class="{ rotated: !sections[1].expanded }"
            ></i>
            <h3>COME CI SI REGISTRA GRATIS A COINBASE IN ITALIANO?</h3>
          </div>
          <span class="section-stats">3 lectures • 22:15</span>
        </div>
        <ul class="lecture-list" v-show="sections[1].expanded">
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Creazione Account Coinbase</span>
            </div>
            <span class="time">9:15</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Verifica Identità</span>
            </div>
            <span class="time">8:45</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Configurazione Sicurezza</span>
            </div>
            <span class="time">4:15</span>
          </li>
        </ul>
      </div>

      <!-- Section 3 -->
      <div class="section">
        <div class="section-header" @click="toggleSection(2)">
          <div class="section-title">
            <i
              class="fas fa-chevron-down"
              :class="{ rotated: !sections[2].expanded }"
            ></i>
            <h3>COINBASE EARN COME SI GUADAGNA E COME FUNZIONA?</h3>
          </div>
          <span class="section-stats">2 lectures • 14:20</span>
        </div>
        <ul class="lecture-list" v-show="sections[2].expanded">
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Introduzione a Coinbase Earn</span>
            </div>
            <span class="time">9:10</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Strategie per Massimizzare i Guadagni</span>
            </div>
            <span class="time">5:10</span>
          </li>
        </ul>
      </div>

      <!-- Section 4 -->
      <div class="section">
        <div class="section-header" @click="toggleSection(3)">
          <div class="section-title">
            <i
              class="fas fa-chevron-down"
              :class="{ rotated: !sections[3].expanded }"
            ></i>
            <h3>FUNZIONALITÀ BASE COINBASE</h3>
          </div>
          <span class="section-stats">4 lectures • 31:45</span>
        </div>
        <ul class="lecture-list" v-show="sections[3].expanded">
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Interfaccia Principale</span>
            </div>
            <span class="time">7:32</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Acquisto e Vendita</span>
            </div>
            <span class="time">9:45</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Portafoglio e Saldo</span>
            </div>
            <span class="time">8:20</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Impostazioni Account</span>
            </div>
            <span class="time">6:08</span>
          </li>
        </ul>
      </div>

      <!-- Section 5 -->
      <div class="section">
        <div class="section-header" @click="toggleSection(4)">
          <div class="section-title">
            <i
              class="fas fa-chevron-down"
              :class="{ rotated: !sections[4].expanded }"
            ></i>
            <h3>COINBASE PRO: FUNZIONI AVANZATE</h3>
          </div>
          <span class="section-stats">3 lectures • 28:30</span>
        </div>
        <ul class="lecture-list" v-show="sections[4].expanded">
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Differenze con Coinbase Base</span>
            </div>
            <span class="time">10:15</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Grafici e Analisi</span>
            </div>
            <span class="time">9:25</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Ordini Limit e Stop</span>
            </div>
            <span class="time">8:50</span>
          </li>
        </ul>
      </div>

      <!-- Section 6 -->
      <div class="section">
        <div class="section-header" @click="toggleSection(5)">
          <div class="section-title">
            <i
              class="fas fa-chevron-down"
              :class="{ rotated: !sections[5].expanded }"
            ></i>
            <h3>SICUREZZA E PROTEZIONE DEL ACCOUNT</h3>
          </div>
          <span class="section-stats">4 lectures • 25:40</span>
        </div>
        <ul class="lecture-list" v-show="sections[5].expanded">
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Autenticazione a Due Fattori</span>
            </div>
            <span class="time">6:20</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Phishing e Scam</span>
            </div>
            <span class="time">7:15</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Backup e Recupero</span>
            </div>
            <span class="time">6:45</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Cold Storage Options</span>
            </div>
            <span class="time">5:20</span>
          </li>
        </ul>
      </div>

      <!-- Section 7 -->
      <div class="section">
        <div class="section-header" @click="toggleSection(6)">
          <div class="section-title">
            <i
              class="fas fa-chevron-down"
              :class="{ rotated: !sections[6].expanded }"
            ></i>
            <h3>TAX E REGOLAMENTAZIONE IN ITALIA</h3>
          </div>
          <span class="section-stats">3 lectures • 22:10</span>
        </div>
        <ul class="lecture-list" v-show="sections[6].expanded">
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Quadro RW e Dichiarazioni</span>
            </div>
            <span class="time">8:30</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Tassazione su Plusvalenze</span>
            </div>
            <span class="time">7:20</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Regolamentazione Europea</span>
            </div>
            <span class="time">6:20</span>
          </li>
        </ul>
      </div>

      <!-- Section 8 -->
      <div class="section">
        <div class="section-header" @click="toggleSection(7)">
          <div class="section-title">
            <i
              class="fas fa-chevron-down"
              :class="{ rotated: !sections[7].expanded }"
            ></i>
            <h3>STRATEGIE DI INVESTIMENTO</h3>
          </div>
          <span class="section-stats">5 lectures • 42:15</span>
        </div>
        <ul class="lecture-list" v-show="sections[7].expanded">
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Dollar Cost Averaging</span>
            </div>
            <span class="time">10:45</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Analisi Fondamentale</span>
            </div>
            <span class="time">9:30</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Analisi Tecnica Base</span>
            </div>
            <span class="time">8:20</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Gestione del Rischio</span>
            </div>
            <span class="time">7:40</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Portfolio Diversificato</span>
            </div>
            <span class="time">6:00</span>
          </li>
        </ul>
      </div>

      <!-- Section 9 -->
      <div class="section">
        <div class="section-header" @click="toggleSection(8)">
          <div class="section-title">
            <i
              class="fas fa-chevron-down"
              :class="{ rotated: !sections[8].expanded }"
            ></i>
            <h3>ALTRE PIATTAFORME A CONFRONTO</h3>
          </div>
          <span class="section-stats">4 lectures • 32:50</span>
        </div>
        <ul class="lecture-list" v-show="sections[8].expanded">
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Binance vs Coinbase</span>
            </div>
            <span class="time">9:15</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Kraken e Gemini</span>
            </div>
            <span class="time">8:20</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Exchange Decentralizzati</span>
            </div>
            <span class="time">7:45</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Scelta della Piattaforma</span>
            </div>
            <span class="time">7:30</span>
          </li>
        </ul>
      </div>

      <!-- Section 10 -->
      <div class="section">
        <div class="section-header" @click="toggleSection(9)">
          <div class="section-title">
            <i
              class="fas fa-chevron-down"
              :class="{ rotated: !sections[9].expanded }"
            ></i>
            <h3>CONCLUSIONI E RISORSE AGGIUNTIVE</h3>
          </div>
          <span class="section-stats">3 lectures • 18:25</span>
        </div>
        <ul class="lecture-list" v-show="sections[9].expanded">
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Riepilogo Corso</span>
            </div>
            <span class="time">7:10</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Risorse per Continuare</span>
            </div>
            <span class="time">6:45</span>
          </li>
          <li class="lecture-item">
            <div class="lecture-info">
              <i class="far fa-play-circle"></i>
              <span>Domande Frequenti</span>
            </div>
            <span class="time">4:30</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        { expanded: true },
        { expanded: false },
        { expanded: false },
        { expanded: false },
        { expanded: false },
        { expanded: false },
        { expanded: false },
        { expanded: false },
        { expanded: false },
        { expanded: false },
      ],
    };
  },
  methods: {
    toggleSection(index) {
      this.sections[index].expanded = !this.sections[index].expanded;
    },
    expandAll() {
      this.sections.forEach((section) => {
        section.expanded = true;
      });
    },
    collapseAll() {
      this.sections.forEach((section) => {
        section.expanded = false;
      });
    },
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");

.course-container {
  width: 60%;
  margin: 20px 100px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #1c1d1f;
}

.course-content {
  border: 1px solid #d1d7dc;
  padding: 0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.course-content-title {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1.6rem;
  margin: 0;
  border-bottom: 1px solid #d1d7dc;
}

.course-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.6rem;
  background-color: #f7f9fa;
  border-bottom: 1px solid #d1d7dc;
  font-size: 0.9rem;
}

.expand-all {
  color: #5624d0;
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
}

.expand-all:hover {
  color: #401b9c;
}

.section {
  border-bottom: 1px solid #d1d7dc;
}

.section:last-child {
  border-bottom: none;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  background-color: white;
  transition: background-color 0.2s ease;
}

.section-header:hover {
  background-color: #f7f9fa;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.section-title h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: #1c1d1f;
}

.section-stats {
  font-size: 0.8rem;
  color: #6a6f73;
}

.fa-chevron-down {
  transition: transform 0.2s ease;
  font-size: 0.8rem;
  color: #6a6f73;
}

.rotated {
  transform: rotate(-90deg);
}

.lecture-list {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #f7f9fa;
}

.lecture-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.6rem 0.8rem 3.2rem;
  border-top: 1px solid #e8e8e8;
  background-color: white;
  transition: background-color 0.2s ease;
}

.lecture-item:hover {
  background-color: #f7f9fa;
}

.lecture-info {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.fa-play-circle {
  color: #6a6f73;
  font-size: 1rem;
}

.time {
  font-size: 0.8rem;
  color: #6a6f73;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .course-container {
    width: 90%;
    margin: 20px auto;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .section-title h3 {
    font-size: 0.9rem;
  }

  .lecture-item {
    padding: 0.8rem 1rem 0.8rem 2.5rem;
  }
}
</style>
