export default function hidePopUp(event) {
    const nearestParent = event.target.closest('.hide');

    if (nearestParent) {
        nearestParent.style.display = none;
    }
} 