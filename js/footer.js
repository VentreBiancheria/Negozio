// Questo script cerca una scatola vuota per il footer chiamata 'footer-container'
// e ci inietta dentro il contenuto del footer.
// In questo modo, se un domani aggiungi una categoria, si aggiornerà in tutte le pagine!

document.getElementById("footer-container").innerHTML = `
    <footer class="main-footer">
        <div class="footer-content">
            
            <div class="footer-col">
                <h3>Contatti</h3>
                <ul class="lista-allineata">
                    <li class="riga-contatti">
                        <span><strong>Indirizzo:</strong> Via Duomo, 20, 84121 Salerno SA</span>
                    </li>
                    <li class="riga-contatti">
                        <span><strong>Telefono:</strong> 089 228601</span>
                    </li>
                    <li class="riga-contatti">
                        <a href="https://www.instagram.com/ventre.biancheria?igsh=MWc1YW5rcnR5cmxkbg==" target="_blank" style="color: var(--colore-accento-footer); text-decoration: none; font-weight: bold;">
                            Seguici su Instagram
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer-col">
                <h3>Orari di Apertura</h3>
                <ul class="lista-allineata">
                    <li class="riga-orari"><span>Lunedì</span> <span>17:00 – 20:30</span></li>
                    <li class="riga-orari"><span>Martedì – Sabato</span> <span>09:15–13:15 / 17:00–20:30</span></li>
                    <li class="riga-orari"><span>Domenica</span> <span>Chiuso</span></li>
                </ul>
            </div>

        </div>

        <div class="footer-bottom">
            <p>&copy; 2026 Ventre Biancheria - Salerno. Tutti i diritti riservati.</p>
        </div>
    </footer>
`;