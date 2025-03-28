<template>
    <div class="description-container">
      <h2>Description</h2>
      <p v-if="!expanded">
        <strong>Come funziona Coinbase per comprare Bitcoin ed altre criptovalute per guadagnarci?</strong><br />
        Guarda in questa serie di Tutorial come funziona Coinbase per comprare, vendere e trasferire criptovalute.
      </p>
      <p v-else>
        <strong>Come funziona Coinbase per comprare Bitcoin ed altre criptovalute per guadagnarci?</strong><br />
        Guarda in questa serie di Tutorial come funziona Coinbase per comprare, vendere e trasferire criptovalute.<br /><br />
  
        Guarda anche come guadagnare con Coinbase Criprovalute con Coinbase Earn: te lo spiego in maniera semplice.<br /><br />
  
        Coinbase è un ottimo modo facile per iniziare con le criptovalute quindi se ti va iscriviti a questo corso e segui le semplici lezioni.<br /><br />
  
        All'interno del corso troverai anche un invito per guadagnare e ti insegnerò anche come generare il tuo invito personale.<br /><br />
  
        <strong>Ecco gli argomenti che vedrai in questo corso su Coinbase:</strong><br /><br />
  
        <ul>
          <li>Introduzione: cosa è ed a cosa serve Coinbase?</li>
          <li>Come Ti Registri Gratis Passo Passo a Coinbase?</li>
          <li>Ecco I Documenti E Dati Che Ti Verranno Richiesti Al Momento Della Tua Registrazione: Come Devi Fare Passo Passo?</li>
          <li>Guarda La Panoramica delle Funzionalità Iniziali Di Coinbase...</li>
          <li>Cosa Vedrai Appena Entrato In Coinbase?</li>
          <li>Carta Di Credito Prepagata Visa Ecco Come Richiederla In Coinbase?</li>
          <li>PAC: Piano Di Accumulo E Portafoglio Crypto In Coinbase</li>
          <li>Nella Pratica Come Si Fa Con Gli Acquisti Programmati E Piani Di Accumulo In Coinbase?</li>
          <li>Acquisto Cripto Con Conti Corrente, IBAN, Bonifici o Carte Prepagate: Come Si Fa?</li>
          <li>Funzionalità Della Scheda Prezzi In Coinbase: Cosa Ci Puoi Fare?</li>
          <li>Come Si Trasferiscono Criptovalute Da Coinbase Ad Altri Wallet Esterni?</li>
          <li>Come Si Ricevono Cryptovalute da altri wallet esterni al tuo Wallet Coinbase?</li>
          <li>Cassaforte Coinbase: Cosa è E Cosa Ci Puoi Fare?</li>
        </ul>
  
        <p>
          Ci vediamo dall'altra parte, iscriviti per non commettere gli errori che il 90% fa sempre quando inizia con Coinbase.<br /><br />
          Ci vediamo dall'altra parte nella prima lezione!
        </p>
  
        <strong>Who this course is for:</strong>
        <ul>
          <li>Chiunque Voglia Imparare A Utilizzare Coinbase Senza Stress</li>
          <li>Chiunque Voglia Imparare Il Metodo Più Facile Per Comprare BITCOIN</li>
          <li>Chiunque Voglia Imparare Il Metodo Più Facile Per Comprare Altre Criptovalute</li>
        </ul>
      </p>
  
      <button @click="expanded = !expanded" class="toggle-btn">
        {{ expanded ? "Show less" : "Show more" }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        expanded: false
      };
    }
  };
  </script>
  
  <style scoped>
  .description-container {
    max-width: 700px;
    margin: 10px 80px ;
    font-family: Arial, sans-serif;
  }
  
  h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
    color: #333;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  .toggle-btn {
    background: transparent;
    border: none;
    color: #6a1b9a;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
  }
  </style>
  