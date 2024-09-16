// Function to toggle the visibility of the skills section
function toggleSkills(): void {
    // Get the skills section and toggle button elements
    const skillsSection = document.querySelector('#Skills') as HTMLDivElement | null;
    const toggleButton = document.querySelector('#togglebutton') as HTMLInputElement | null;

    // Check if both elements are found
    if (skillsSection && toggleButton) {
        // Check the current display state and toggle accordingly
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'flex'; // Show the skills section
            toggleButton.value = 'Hide Skills'; // Update button text
        } else {
            skillsSection.style.display = 'none'; // Hide the skills section
            toggleButton.value = 'Show Skills'; // Update button text
        }
    } else {
        // Log an error if any element is not found
        console.error('Skills section or toggle button not found.');
    }
}
