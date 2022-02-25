document.querySelector('.button-swapper').addEventListener(
    'click', () => {
        document.body.classList.toggle('dark');
        document.querySelector('.button-swapper').classList.toggle('dark');
        document.querySelectorAll('.icon-button-swapper').forEach(el => el.classList.toggle('dark'));
    }
)