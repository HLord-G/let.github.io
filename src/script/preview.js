function sabta(entities) {
const _0x1dfc80=_0xa239;(function(_0x570917,_0x230a73){const _0x4213ec=_0xa239,_0x3b37ac=_0x570917();while(!![]){try{const _0x3ca6ce=-parseInt(_0x4213ec(0x13d))/0x1+parseInt(_0x4213ec(0x13f))/0x2+-parseInt(_0x4213ec(0x13b))/0x3+parseInt(_0x4213ec(0x140))/0x4*(-parseInt(_0x4213ec(0x142))/0x5)+-parseInt(_0x4213ec(0x143))/0x6*(-parseInt(_0x4213ec(0x144))/0x7)+-parseInt(_0x4213ec(0x13c))/0x8*(-parseInt(_0x4213ec(0x148))/0x9)+-parseInt(_0x4213ec(0x145))/0xa;if(_0x3ca6ce===_0x230a73)break;else _0x3b37ac['push'](_0x3b37ac['shift']());}catch(_0x4fbb83){_0x3b37ac['push'](_0x3b37ac['shift']());}}}(_0x3e63,0x55b21));const textarea=document[_0x1dfc80(0x141)](_0x1dfc80(0x13e));textarea[_0x1dfc80(0x147)]=entities;return textarea[_0x1dfc80(0x146)];function _0xa239(_0x28fc97,_0x2bf39f){const _0x3e63cf=_0x3e63();return _0xa239=function(_0xa23902,_0x246fab){_0xa23902=_0xa23902-0x13b;let _0x2d0585=_0x3e63cf[_0xa23902];return _0x2d0585;},_0xa239(_0x28fc97,_0x2bf39f);}function _0x3e63(){const _0x2de52b=['3196490aDquhh','value','innerHTML','65781VnEPxc','1747335YuTLvJ','552fIJzMP','313378jmipcZ','textarea','1287982SmVEjd','67156wrTFyA','createElement','10XiISDf','2710482DfjFym','7ybuLXJ'];_0x3e63=function(){return _0x2de52b;};return _0x3e63();}
}
        
function walasabut(text) {
var _0x5281ea=_0x581f;function _0x581f(_0x47ef35,_0x12cd2e){var _0x710e4f=_0x710e();return _0x581f=function(_0x581ff1,_0xb06331){_0x581ff1=_0x581ff1-0xde;var _0x3bdbed=_0x710e4f[_0x581ff1];return _0x3bdbed;},_0x581f(_0x47ef35,_0x12cd2e);}(function(_0x3ea3d0,_0x33732a){var _0x416b98=_0x581f,_0x4c3fe9=_0x3ea3d0();while(!![]){try{var _0x4e46a9=parseInt(_0x416b98(0xe3))/0x1+parseInt(_0x416b98(0xe2))/0x2*(parseInt(_0x416b98(0xdf))/0x3)+-parseInt(_0x416b98(0xe9))/0x4+-parseInt(_0x416b98(0xe1))/0x5*(parseInt(_0x416b98(0xe7))/0x6)+-parseInt(_0x416b98(0xe6))/0x7+parseInt(_0x416b98(0xe0))/0x8+parseInt(_0x416b98(0xe5))/0x9;if(_0x4e46a9===_0x33732a)break;else _0x4c3fe9['push'](_0x4c3fe9['shift']());}catch(_0x472416){_0x4c3fe9['push'](_0x4c3fe9['shift']());}}}(_0x710e,0x533aa));function _0x710e(){var _0x435c6f=['62sNDRPf','441561KjiGfM','map','6862968OTzAvf','1763314WHFLnm','2598oGAJoB','join','467884LCwBHA','split','charCodeAt','2808AAHMOg','860248OPlYmH','7285tlkaxm'];_0x710e=function(){return _0x435c6f;};return _0x710e();}return text[_0x5281ea(0xea)]('')[_0x5281ea(0xe4)](_0x58b388=>'&#'+_0x58b388[_0x5281ea(0xde)](0x0)+';')[_0x5281ea(0xe8)]('');
}

 

$(document).ready(function() {
    const $openBtn = $('#open_menu');
    const $closeBtn = $('#close_menu');
    const $menu = $('#menu_');
    
    // Show menu with animation
    function showMenu() {
        // Button transition
        $openBtn.fadeOut(200, function() {
            $closeBtn.css({"display":"flex"})
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
});

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
})

$(document).on("click","#reloaddata", function(){
    location.reload();          // I-reload ang page
})



function previews(x){
    let processedQuestions = [];
    let quizData = [];
    let currentlyLoadedQuestions = 0;
    const questionsPerBatch = 3; // Smaller batches for better performance
    let isLoading = false;
    let allQuestionsLoaded = false;

    // Load JSON data function
    function loadDoc() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if (this.status === 200) {
                try {
                    quizData = JSON.parse(this.responseText);
                    console.log('Quiz data loaded:', quizData.length, 'questions');
                    initQuiz();
                } catch (error) {
                    showError('Failed to load quiz data. Please check the JSON file.');
                }
            } else {
                showError('Failed to load quiz data. Please check if the file exists.');
            }
        };
        xhttp.onerror = function() {
            showError('Network error. Please check your connection and try again.');
        };
        xhttp.open("GET", `${sabta(x)}`, true);
        xhttp.send();
    }

    // Error display function
    function showError(message) {
        $('#loading').html(`
            <div class="alert alert-error">
                <span>${message}</span>
                <button class="btn btn-sm" onclick="location.reload()">Retry</button>
            </div>
        `);
    }

    // Simple shuffle function
    function shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Process questions efficiently
    function processQuestions() {
        if (!quizData?.length) {
            showError('No quiz questions found.');
            return;
        }

        processedQuestions = quizData.map((q, index) => {
            const allChoices = [q.answer, ...q.random_answer];
            const shuffledChoices = shuffleArray(allChoices);
            const correctIndex = shuffledChoices.indexOf(q.answer);
            const randomExplanation = q.why[Math.floor(Math.random() * q.why.length)];
            
            return {
                question: q.question,
                shuffledChoices,
                correctIndex,
                randomExplanation,
                originalIndex: index
            };
        });
    }

    // Optimized question HTML creation
    function createQuestionHTML(questionData, questionIndex) {
        const letters = ['a', 'b', 'c', 'd'];
        
        const choicesHTML = questionData.shuffledChoices.map((choice, index) => {
            const isCorrect = index === questionData.correctIndex;
            return `
                <label class="flex items-start space-x-3 p-2 hover:bg-base-200 rounded cursor-pointer transition-colors duration-200">
                    <input type="radio" name="q${questionIndex}" value="${letters[index]}" class="radio radio-primary mt-1" ${isCorrect ? 'checked' : ''} disabled />
                    <span class="flex-1">
                        <span class="font-semibold text-primary">${letters[index]}:</span>
                        <span class="${isCorrect ? 'text-primary font-semibold' : ''} ml-1">${choice}</span>
                    </span>
                </label>
            `;
        }).join('');

        return `
            <article class="card bg-base-300 shadow-md border border-base-content/20 p-4 mb-4 question-card" data-q="${questionIndex}">
                <div class="badge badge-primary mb-3">Question ${questionIndex + 1}</div>
                <h2 class="text-lg font-bold mb-4">${questionData.question}</h2>
                <div class="space-y-1 mb-4">
                    ${choicesHTML}
                </div>
                <details class="bg-base-100 border border-dashed border-base-content/30 rounded-lg">
                    <summary class="p-3 cursor-pointer hover:bg-base-200 rounded-lg transition-colors duration-200">
                        💡 <strong>Explanation</strong>
                    </summary>
                    <div class="p-3 pt-0">
                        <p class="text-sm leading-relaxed">${questionData.randomExplanation}</p>
                    </div>
                </details>
            </article>
        `;
    }

    // Efficient batch loading with requestAnimationFrame
    function loadQuestionBatch() {
        if (isLoading || allQuestionsLoaded || currentlyLoadedQuestions >= processedQuestions.length) {
            return;
        }
        
        isLoading = true;
        const container = document.getElementById('quiz-container');
        const endIndex = Math.min(currentlyLoadedQuestions + questionsPerBatch, processedQuestions.length);
        
        // Use DocumentFragment for efficient DOM manipulation
        const fragment = document.createDocumentFragment();
        const tempDiv = document.createElement('div');
        
        let batchHTML = '';
        for (let i = currentlyLoadedQuestions; i < endIndex; i++) {
            batchHTML += createQuestionHTML(processedQuestions[i], i);
        }
        
        tempDiv.innerHTML = batchHTML;
        while (tempDiv.firstChild) {
            fragment.appendChild(tempDiv.firstChild);
        }
        
        // Use requestAnimationFrame for smooth rendering
        requestAnimationFrame(() => {
            container.appendChild(fragment);
            currentlyLoadedQuestions = endIndex;
            
            if (currentlyLoadedQuestions >= processedQuestions.length) {
                allQuestionsLoaded = true;
                container.insertAdjacentHTML('beforeend', `
                    <div class="text-center py-6">
                        <div class="alert alert-success inline-flex">
                            <span>✅ All ${processedQuestions.length} questions loaded!</span>
                        </div>
                    </div>
                `);
            }
            
            isLoading = false;
        });
    }

    // Optimized scroll handler with passive listener and debouncing
    let scrollTimer = null;
    function handleScroll() {
        if (scrollTimer) return;
        
        scrollTimer = requestAnimationFrame(() => {
            const { scrollTop, clientHeight } = document.documentElement;
            const scrollHeight = document.documentElement.scrollHeight;
            
            // Load more when 400px from bottom
            if (scrollTop + clientHeight >= scrollHeight - 400) {
                loadQuestionBatch();
            }
            
            // Back to top button
            const btn = document.getElementById('backToTop');
            if (btn) {
                btn.style.opacity = scrollTop > 300 ? '1' : '0';
            }
            
            scrollTimer = null;
        });
    }

    // Initialize quiz
    function initQuiz() {
        processQuestions();
        
        if (!processedQuestions.length) return;
        
        setTimeout(() => {
            $('#loading').fadeOut(200, () => {
                $('#quiz-container').show();
                loadQuestionBatch();
            });
        }, 400);
    }

    // Document ready with optimized event listeners
    $(document).ready(function() {
        loadDoc();
        
        // Use passive scroll listener for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        // Add back to top button
        $('body').append(`
            <button id="backToTop" class="btn btn-circle btn-primary fixed bottom-4 right-4 opacity-0 transition-opacity duration-300" style="z-index: 999;">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                </svg>
            </button>
        `);
        
        // Back to top with smooth scroll
        $(document).on('click', '#backToTop', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}