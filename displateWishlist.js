// // Get the wishlist product list items

// const wishlistItems = document.querySelectorAll('.wishlist-product-list-item');

// // Create an array to store the wishlist details
// const wishlistDetails = [];

// // Loop through each wishlist item
// wishlistItems.forEach(item => {
//     // Extract information from the current item
//     const title = item.querySelector('.displate-item-link').getAttribute('data-item-name');
//     const artist = item.querySelector('.displate-item-link').getAttribute('data-author-name');
//     const imageUrl = item.querySelector('.displate-item--search-image').getAttribute('src');
//     const artworkName = item.querySelector('.displate-item--search-image').getAttribute('alt');

//     // Create an object with the extracted details
//     const artworkDetails = {
//         title: title,
//         artist: artist,
//         imageUrl: imageUrl,
//         artworkName: artworkName
//     };

//     // Add the object to the wishlistDetails array
//     wishlistDetails.push(artworkDetails);
// });

// // Create a string with the wishlist details
// const wishlistText = 'Wishlist:\n' +
//     wishlistDetails.map(item => `Title: ${item.title}\nArtist: ${item.artist}\nArtwork Name: ${item.artworkName}\nImage URL: ${item.imageUrl}\n`).join('\n');

// // Create a Blob containing the text
// const blob = new Blob([wishlistText], { type: 'text/plain' });

// // Create a link element to download the Blob
// const downloadLink = document.createElement('a');
// downloadLink.href = URL.createObjectURL(blob);
// downloadLink.download = 'wishlist.txt';

// // Append the link to the document
// document.body.appendChild(downloadLink);

// // Trigger a click on the link to start the download
// downloadLink.click();

// // Remove the link from the document
// document.body.removeChild(downloadLink);




///////////////////////////////////////////////
/// Removed  NULL populated fields in the list


// Get the wishlist product list items
const wishlistItems = document.querySelectorAll('.wishlist-product-list-item');

// Create an array to store the wishlist details
const wishlistDetails = [];

// Loop through each wishlist item
wishlistItems.forEach(item => {
    // Extract information from the current item
    const imageUrl = item.querySelector('.displate-item--search-image').getAttribute('src');
    const artworkName = item.querySelector('.displate-item--search-image').getAttribute('alt');

    // Create an object with the extracted details
    const artworkDetails = {
        artworkName: artworkName,
        imageUrl: imageUrl
    };

    // Add the object to the wishlistDetails array
    wishlistDetails.push(artworkDetails);
});

// Create a string with the wishlist details
const wishlistText = 'Wishlist:\n' +
    wishlistDetails.map(item => `Artwork Name: ${item.artworkName}\nImage URL: ${item.imageUrl}\n`).join('\n');

// Create a Blob containing the text
const blob = new Blob([wishlistText], { type: 'text/plain' });

// Create a link element to download the Blob
const downloadLink = document.createElement('a');
downloadLink.href = URL.createObjectURL(blob);
downloadLink.download = 'wishlist.txt';

// Append the link to the document
document.body.appendChild(downloadLink);

// Trigger a click on the link to start the download
downloadLink.click();

// Remove the link from the document
document.body.removeChild(downloadLink);
