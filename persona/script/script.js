const elements = [
    { elementId: 'hoverElement1', soundId: 'mySound1' },
    { elementId: 'hoverElement2', soundId: 'mySound2' },
    { elementId: 'nav_logo', soundId: 'mySound3' },
    { elementId: 'hoverElement4', soundId: 'mySound4' },
    { elementId: 'hoverElement5', soundId: 'mySound5' }
];

elements.forEach(({ elementId, soundId }) => {
    const hoverElement = document.getElementById(elementId);
    const hoverSound = document.getElementById(soundId);

    hoverElement.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });

    hoverElement.addEventListener('mouseleave', () => {
        hoverSound.pause();
        hoverSound.currentTime = 0;
    });
});







