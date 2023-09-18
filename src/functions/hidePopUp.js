export default function hidePopUp(event) {
    // Find the nearest parent element with the class "parent"
    const nearestParent = event.target.closest('.hide');

    if (nearestParent) {
        nearestParent.style.display = none;
    }
} 