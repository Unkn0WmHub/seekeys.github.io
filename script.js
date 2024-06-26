document.addEventListener('DOMContentLoaded', function() {
    const keyOutput = document.getElementById('key');
    const mouseOutput = document.getElementById('mouse');

    // Detect key presses
    document.addEventListener('keydown', function(event) {
        keyOutput.textContent = `${event.key} (code: ${event.code})`;
    });

    // Detect mouse button presses
    document.addEventListener('mousedown', function(event) {
        let button;
        switch (event.button) {
            case 0:
                button = 'Left Button';
                break;
            case 1:
                button = 'Middle Button';
                break;
            case 2:
                button = 'Right Button';
                break;
            default:
                button = `Button ${event.button}`;
                break;
        }
        mouseOutput.textContent = button;
    });
});
