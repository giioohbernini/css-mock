/* Na hora de importar usa esse snippet aqui abaixo

 <script src="/Scripts/redirect.js"></script>
*/

const redirectPage = 'pagina/do/ops'
const isMobile = window.matchMedia && window.matchMedia('(max-width: 800px)').matches;

if (!isMobile) window.location = redirectPage;

