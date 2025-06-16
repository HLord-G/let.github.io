$(document).ready(function() {
    // Define the HTML structure as a string or an array of strings
    const menuHtml = `
        <div class="fixed top-4 right-4 z-50">
            <div class="flex flex-col justify-center items-center mb-1">
                <button id="open_menu" class="btn btn-ghost btn-circle transition-all duration-300 hover:bg-primary hover:text-primary-content transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>

                <button id="close_menu" class="btn btn-ghost btn-circle justify-center items-center hidden transition-all duration-300 hover:bg-error hover:text-error-content transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                    </svg>
                </button>
            </div>

            <div id="menu_" class="hidden opacity-0 transform scale-75 transition-all duration-500 ease-out">
                <ul class="menu bg-base-200/95 backdrop-blur-sm rounded-box shadow-2xl border border-base-300">
                    <li class="transform transition-all duration-300 hover:scale-105 mb-[20px]">
                        <button id="gobackready" class="tooltip tooltip-left transition-all duration-200 hover:bg-primary hover:text-primary-content" data-tip="Ready">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                            </svg>
                        </button>
                    </li>
                    <li class="transform transition-all duration-300 hover:scale-105" style="animation-delay: 0.1s">
                        <button id="reloaddata" class="tooltip tooltip-left transition-all duration-200 hover:bg-info hover:text-info-content" data-tip="Reload">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    `;

    // Append the menu HTML to the body
    $('body').append(menuHtml);

    // --- All your existing jQuery code for menu functionality goes here ---
    const $openBtn = $('#open_menu');
    const $closeBtn = $('#close_menu');
    const $menu = $('#menu_');

    // Show menu with animation
    function showMenu() {
        // Button transition
        $openBtn.fadeOut(200, function() {
            $closeBtn.css({"display":"flex"});
        });

        // Menu animation
        $menu.removeClass('hidden').animate({
            opacity: 1
        }, 300).css({
            'transform': 'scale(1) translateY(0)',
            'animation': 'slideInDown 0.5s ease-out'
        });

        // Animate menu items with stagger effect
        $menu.find('li').each(function(index) {
            $(this).delay(index * 100).animate({
                opacity: 1
            }, 200).css({
                'transform': 'translateX(0)',
                'animation': `slideInRight 0.3s ease-out ${index * 0.1}s both`
            });
        });
    }

    // Hide menu with animation
    function hideMenu() {
        // Menu items fade out
        $menu.find('li').each(function(index) {
            const reverseIndex = $menu.find('li').length - 1 - index;
            $(this).delay(reverseIndex * 50).animate({
                opacity: 0.5
            }, 150).css({
                'transform': 'translateX(20px)'
            });
        });

        // Menu container animation
        setTimeout(function() {
            $menu.animate({
                opacity: 0
            }, 300).css({
                'transform': 'scale(0.75) translateY(-10px)'
            });

            setTimeout(function() {
                $menu.addClass('hidden');
                // Reset menu items for next animation
                $menu.find('li').css({
                    'opacity': '',
                    'transform': ''
                });
            }, 300);
        }, 200);

        // Button transition
        $closeBtn.fadeOut(200, function() {
            $openBtn.fadeIn(200);
        });
    }

    // Event listeners
    $openBtn.on('click', showMenu);
    $closeBtn.on('click', hideMenu);

    // Close menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#open_menu, #close_menu, #menu_').length && !$menu.hasClass('hidden')) {
            hideMenu();
        }
    });

    // Add pulse animation to open button
    setInterval(function() {
        if (!$openBtn.hasClass('hidden')) {
            $openBtn.addClass('animate-pulse');
            setTimeout(function() {
                $openBtn.removeClass('animate-pulse');
            }, 2000);
        }
    }, 5000);

    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInDown {
            from {
                transform: translate3d(0, -100%, 0) scale(0.8);
                opacity: 0;
            }
            to {
                transform: translate3d(0, 0, 0) scale(1);
                opacity: 1;
            }
        }

        @keyframes slideInRight {
            from {
                transform: translate3d(100%, 0, 0);
                opacity: 0;
            }
            to {
                transform: translate3d(0, 0, 0);
                opacity: 1;
            }
        }

        .menu li:hover {
            transform: translateX(-5px) scale(1.05);
        }

        #menu_ {
            backdrop-filter: blur(10px);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
    `;
    document.head.appendChild(style);


    $(document).on("click","#gobackhome", function(){
        window.location.href = "../../../";
    });

    $(document).on("click","#gobackready", function(){
        window.location.href = "../ready/";
    });


    $(document).on("click","#reloaddata", function(){
        location.reload();      // I-reload ang page
    });
});









$(document).ready(function() {

    /**
     * Decodes HTML entities.
     * It's safer to let the browser do this by assigning the encoded string
     * to an element's innerHTML and then getting its text content.
     * @param {string} text - The HTML string to decode.
     * @returns {string} - The decoded HTML string.
     */
    function decodeHtml(text) {
        // Using jQuery's .html() method is a concise way to do this.
        return $('<textarea />').html(text).text();
    }

    /**
     * Recursively builds and renders HTML content for a given data object.
     * This function will call itself for any nested sections.
     * @param {object} data - The data object for the current section.
     * @param {jQuery} $container - The jQuery object to append the content to.
     * @param {boolean} isNested - Flag to indicate if it's a nested call for different styling.
     */
    function renderContent(data, $container, isNested = false) {
        // Main content card
        const cardHtml = `
            <div class="card bg-base-200 shadow-lg mb-8 p-6 md:p-8 rounded-box">
                <h2 class="text-3xl font-bold text-primary mb-4">${data.title}</h2>
                <div class="text-base-content text-md mb-4 leading-relaxed">${data.what}</div>
                
                <div class="divider text-base-content/50 my-4"></div>

                <div class="text-base-content text-md mb-4 leading-relaxed">${decodeHtml(data.tutorial)}</div>
                
                ${data.steps ? `<div class="text-base-content text-md space-y-3 pl-4">${decodeHtml(data.steps)}</div>` : ''}
            </div>
        `;
        $container.append(cardHtml);
        
        // Check for and render nested sections recursively
        if (data.sections && data.sections.length > 0) {
            const $nestedContainer = $('<div class="nested-section pl-4 md:pl-8 border-l-4 border-primary/20"></div>');
            $container.append($nestedContainer);

            data.sections.forEach(section => {
                // The magic of recursion: call the same function for the subsection
                renderContent(section, $nestedContainer, true);
            });
        }
    }

    /**
     * Initializes the page, rendering the main title and introduction.
     * @param {object} data - The main JSON data object.
     */
    function initializePage(data) {
        const $mainContainer = $('#content-container');
        $mainContainer.empty(); // Clear previous content

        // Render the main page title and introduction
        const headerHtml = `
            <h1 class="text-4xl lg:text-5xl font-extrabold text-primary mb-6 text-center">${data.title}</h1>
            <p class="text-base-content text-lg mb-4 leading-relaxed">${data.what}</p>
            <div class="divider text-base-content/50 my-8"></div>
        `;
        $mainContainer.append(headerHtml);

        // Start the rendering process for the top-level sections
        if (data.sections && data.sections.length > 0) {
            data.sections.forEach(section => {
                renderContent(section, $mainContainer);
            });
        }
    }

    /**
     * Loads JSON data from external file using AJAX
     * Modified version of your loadDoc function
     */
    function loadDoc() {
        const xhttp = new XMLHttpRequest();
        
        xhttp.onload = function() {
            if (this.status === 200) {
                try {
                    // Parse the JSON response
                    const jsonData = JSON.parse(this.responseText);
                    // Initialize the page with the loaded data
                    initializePage(jsonData);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    showError('Error loading content: Invalid JSON format');
                }
            } else {
                console.error('HTTP Error:', this.status);
                showError('Error loading content: HTTP ' + this.status);
            }
        };
        
        xhttp.onerror = function() {
            console.error('Network Error');
            showError('Error loading content: Network error');
        };
        
        // Change this to your actual JSON file path
        xhttp.open("GET", "data.json", true);
        xhttp.send();
    }

    /**
     * Shows error message to user
     * @param {string} message - Error message to display
     */
    function showError(message) {
        const $mainContainer = $('#content-container');
        $mainContainer.html(`
            <div class="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>${message}</span>
            </div>
        `);
    }

    /**
     * Shows loading indicator
     */
    function showLoading() {
        const $mainContainer = $('#content-container');
        $mainContainer.html(`
            <div class="flex justify-center items-center h-64">
                <div class="loading loading-spinner loading-lg text-primary"></div>
                <span class="ml-4 text-base-content">Loading content...</span>
            </div>
        `);
    }

    // Show loading indicator and then load the data
    showLoading();
    loadDoc();

});