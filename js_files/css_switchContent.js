const rwd = document.getElementById('rwd');
const css = document.getElementById('css');


document.querySelectorAll("aside ul li").forEach(li => {
    li.addEventListener('click', () => {
        // Alle Inhalte ausblenden
        rwd.style.display = 'none';
        css.style.display = 'none';

        // Nur den gewünschten Inhalt einblenden
        if (li.id === 'li_rwd') {
            rwd.style.display = 'block';
        } else if (li.id === 'li_css') {
            css.style.display = 'block';
        }
    });
});