// Questo script cerca una scatola vuota chiamata 'header-container' 
// e ci inietta dentro la nostra barra di navigazione.
// In questo modo, se un domani aggiungi una categoria, si aggiornerà in tutte le pagine!

document.getElementById("header-container").innerHTML = `
    <header class="top-bar">
        
        <div class="logo-container">
            <a href="index.html">
                <img src="./img/logo.png" alt="Logo" class="logo-img">
            </a>
        </div>

        <nav class="nav-centrale">
            <ul class="menu-list">
                <li class="menu-item">
                    <a href="#">Biancheria da letto</a>
                    <div class="popup-sottocategorie">
                        <a href="#" class="link-sottocategoria">Lenzuola</a>
                        <a href="#" class="link-sottocategoria">Copriletto</a>
                        <a href="#" class="link-sottocategoria">Piumoni</a>
                        <a href="#" class="link-sottocategoria">Trapunte</a>
                        <a href="#" class="link-sottocategoria">Copri piumino</a>
                        <a href="#" class="link-sottocategoria">Quilt</a>
                    </div>
                </li>

                <li class="menu-item">
                    <a href="#">Accessori letto</a>
                    <div class="popup-sottocategorie">
                        <a href="#" class="link-sottocategoria">Guanciali</a>
                        <a href="#" class="link-sottocategoria">Coprimaterasso</a>
                        <a href="#" class="link-sottocategoria">Coprirete</a>
                        <a href="#" class="link-sottocategoria">Topper</a>
                        <a href="#" class="link-sottocategoria">Sottofedere</a>
                        <a href="#" class="link-sottocategoria">Materassi</a>
                    </div>
                </li>

                <li class="menu-item">
                    <a href="#">Servizi da tavola</a>
                    <div class="popup-sottocategorie">
                        <a href="#" class="link-sottocategoria">Tovaglie</a>
                        <a href="#" class="link-sottocategoria">Runner</a>
                        <a href="#" class="link-sottocategoria">Set americano</a>
                        <a href="#" class="link-sottocategoria">Sottotovaglie protettivo</a>
                        <a href="#" class="link-sottocategoria">Tappeto cucina</a>
                    </div>
                </li>

                <li class="menu-item">
                    <a href="#">Bagno</a>
                    <div class="popup-sottocategorie">
                        <a href="#" class="link-sottocategoria">Set asciugamani</a>
                        <a href="#" class="link-sottocategoria">Telo doccia</a>
                        <a href="#" class="link-sottocategoria">Accappatoi</a>
                        <a href="#" class="link-sottocategoria">Tappeto bagno</a>
                        <a href="#" class="link-sottocategoria">Lavette per ospiti</a>
                    </div>
                </li>

                <li class="menu-item">
                    <a href="#">Pigiameria</a>
                    <div class="popup-sottocategorie">
                        <div class="has-submenu">
                            <a href="#" class="link-sottocategoria"><strong>Uomo</strong> <span class="freccia">&#9654;</span></a>
                            <div class="popup-sotto-sottocategorie">
                                <a href="#" class="link-sottocategoria">Pigiami</a>
                                <a href="#" class="link-sottocategoria">Vestaglie e giacche da camera</a>
                            </div>
                        </div>
                        <div class="has-submenu">
                            <a href="#" class="link-sottocategoria"><strong>Donna</strong> <span class="freccia">&#9654;</span></a>
                            <div class="popup-sotto-sottocategorie">
                                <a href="#" class="link-sottocategoria">Pigiami e camicie da notte</a>
                                <a href="#" class="link-sottocategoria">Vestaglie</a>
                            </div>
                        </div>
                        <div class="has-submenu">
                            <a href="#" class="link-sottocategoria"><strong>Bambino</strong> <span class="freccia">&#9654;</span></a>
                            <div class="popup-sotto-sottocategorie">
                                <a href="#" class="link-sottocategoria">Pigiami</a>
                                <a href="#" class="link-sottocategoria">Vestaglie</a>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="menu-item">
                    <a href="#">Intimo</a>
                    <div class="popup-sottocategorie">
                        <div class="has-submenu">
                            <a href="#" class="link-sottocategoria"><strong>Uomo</strong> <span class="freccia">&#9654;</span></a>
                            <div class="popup-sotto-sottocategorie">
                                <a href="#" class="link-sottocategoria">Slip</a>
                                <a href="#" class="link-sottocategoria">Boxer</a>
                                <a href="#" class="link-sottocategoria">Maglieria intima</a>
                                <a href="#" class="link-sottocategoria">Calze</a>
                            </div>
                        </div>
                        <div class="has-submenu">
                            <a href="#" class="link-sottocategoria"><strong>Donna</strong> <span class="freccia">&#9654;</span></a>
                            <div class="popup-sotto-sottocategorie">
                                <a href="#" class="link-sottocategoria">Reggiseni</a>
                                <a href="#" class="link-sottocategoria">Slip</a>
                                <a href="#" class="link-sottocategoria">Maglieria intima</a>
                                <a href="#" class="link-sottocategoria">Calze</a>
                            </div>
                        </div>
                        <div class="has-submenu">
                            <a href="#" class="link-sottocategoria"><strong>Bambino</strong> <span class="freccia">&#9654;</span></a>
                            <div class="popup-sotto-sottocategorie">
                                <a href="#" class="link-sottocategoria">Maglieria intima</a>
                                <a href="#" class="link-sottocategoria">Calze</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>

        <div class="info-destra">
            <a href="chi-siamo.html" class="btn-chi-siamo">Chi siamo</a>
        </div>

    </header>
`;