function sabta(entities) {const _0x1dfc80=_0xa239;(function(_0x570917,_0x230a73){const _0x4213ec=_0xa239,_0x3b37ac=_0x570917();while(!![]){try{const _0x3ca6ce=-parseInt(_0x4213ec(0x13d))/0x1+parseInt(_0x4213ec(0x13f))/0x2+-parseInt(_0x4213ec(0x13b))/0x3+parseInt(_0x4213ec(0x140))/0x4*(-parseInt(_0x4213ec(0x142))/0x5)+-parseInt(_0x4213ec(0x143))/0x6*(-parseInt(_0x4213ec(0x144))/0x7)+-parseInt(_0x4213ec(0x13c))/0x8*(-parseInt(_0x4213ec(0x148))/0x9)+-parseInt(_0x4213ec(0x145))/0xa;if(_0x3ca6ce===_0x230a73)break;else _0x3b37ac['push'](_0x3b37ac['shift']());}catch(_0x4fbb83){_0x3b37ac['push'](_0x3b37ac['shift']());}}}(_0x3e63,0x55b21));const textarea=document[_0x1dfc80(0x141)](_0x1dfc80(0x13e));textarea[_0x1dfc80(0x147)]=entities;return textarea[_0x1dfc80(0x146)];function _0xa239(_0x28fc97,_0x2bf39f){const _0x3e63cf=_0x3e63();return _0xa239=function(_0xa23902,_0x246fab){_0xa23902=_0xa23902-0x13b;let _0x2d0585=_0x3e63cf[_0xa23902];return _0x2d0585;},_0xa239(_0x28fc97,_0x2bf39f);}function _0x3e63(){const _0x2de52b=['3196490aDquhh','value','innerHTML','65781VnEPxc','1747335YuTLvJ','552fIJzMP','313378jmipcZ','textarea','1287982SmVEjd','67156wrTFyA','createElement','10XiISDf','2710482DfjFym','7ybuLXJ'];_0x3e63=function(){return _0x2de52b;};return _0x3e63();}};function walasabut(text) {var _0x5281ea=_0x581f;function _0x581f(_0x47ef35,_0x12cd2e){var _0x710e4f=_0x710e();return _0x581f=function(_0x581ff1,_0xb06331){_0x581ff1=_0x581ff1-0xde;var _0x3bdbed=_0x710e4f[_0x581ff1];return _0x3bdbed;},_0x581f(_0x47ef35,_0x12cd2e);}(function(_0x3ea3d0,_0x33732a){var _0x416b98=_0x581f,_0x4c3fe9=_0x3ea3d0();while(!![]){try{var _0x4e46a9=parseInt(_0x416b98(0xe3))/0x1+parseInt(_0x416b98(0xe2))/0x2*(parseInt(_0x416b98(0xdf))/0x3)+-parseInt(_0x416b98(0xe9))/0x4+-parseInt(_0x416b98(0xe1))/0x5*(parseInt(_0x416b98(0xe7))/0x6)+-parseInt(_0x416b98(0xe6))/0x7+parseInt(_0x416b98(0xe0))/0x8+parseInt(_0x416b98(0xe5))/0x9;if(_0x4e46a9===_0x33732a)break;else _0x4c3fe9['push'](_0x4c3fe9['shift']());}catch(_0x472416){_0x4c3fe9['push'](_0x4c3fe9['shift']());}}}(_0x710e,0x533aa));function _0x710e(){var _0x435c6f=['62sNDRPf','441561KjiGfM','map','6862968OTzAvf','1763314WHFLnm','2598oGAJoB','join','467884LCwBHA','split','charCodeAt','2808AAHMOg','860248OPlYmH','7285tlkaxm'];_0x710e=function(){return _0x435c6f;};return _0x710e();}return text[_0x5281ea(0xea)]('')[_0x5281ea(0xe4)](_0x58b388=>'&#'+_0x58b388[_0x5281ea(0xde)](0x0)+';')[_0x5281ea(0xe8)]('');};

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
 
$(document).on("click","#gobackmenu", function(){
    window.location.href = "../../../#reviewers";
})

$(document).on("click","#reloaddata", function(){
    localStorage.clear();       // I-clear ang localStorage
    location.reload();          // I-reload ang page
})



// function loadThis(x) {
//     // 🔥 LAZY LOADING VARIABLES
//     let currentIndex = 0;
//       const batchSize = 5; // Load 5 questions at a time
//       let processedQuestions = [];
//       let questions = []; // Will be loaded from JSON
      
//       // 💾 AUTOSAVE VARIABLES
//       const STORAGE_KEY = 'quiz_answers_autosave';
//       const QUESTIONS_KEY = 'quiz_questions_order';
//       const TIMER_KEY = 'quiz_timer_start';
      
//       // 📁 JSON FILE LOADING
//       async function loadQuestionsFromJSON(filename = `${sabta(x)}`) {
//           try {
//               // console.log(`🔄 Loading questions from ${filename}...`);
              
//               const response = await fetch(filename);
              
//               if (!response.ok) {
//                   throw new Error(`HTTP error! status: ${response.status}`);
//               }
              
//               const data = await response.json();
              
//               // Handle different JSON structures
//               if (Array.isArray(data)) {
//                   questions = data;
//               } else if (data.questions && Array.isArray(data.questions)) {
//                   questions = data.questions;
//               } else {
//                   throw new Error('Invalid JSON structure. Expected array or object with questions property.');
//               }
              
//               console.log(`✅ Successfully loaded ${questions.length} questions`);
//               return true;
              
//           } catch (error) {
//               console.error('❌ Error loading questions:', error);
              
//               // Show user-friendly error message
//               showErrorModal(`Failed to load questions: ${error.message}`);
//               return false;
//           }
//       }
      
//       // 🚨 Error Modal Display
//       function showErrorModal(message) {
//           let errorModal = $(`
//               <dialog id="error_modal" class="modal modal-open">
//                 <div class="modal-box bg-error text-error-content">
//                   <h3 class="font-bold text-lg">❌ Loading Error</h3>
//                   <p class="py-4">${message}</p>
//                   <div class="modal-action">
//                     <button class="btn btn-outline retry-load">🔄 Retry</button>
//                     <button class="btn close-error">Close</button>
//                   </div>
//                 </div>
//               </dialog>
//           `);
          
//           $("body").append(errorModal);
          
//           $(".retry-load").on("click", function() {
//               $("#error_modal").remove();
//               initializeQuiz(); // Retry loading
//           });
          
//           $(".close-error").on("click", function() {
//               $("#error_modal").remove();
//           });
//       }
      
//       // 🔐 Simple encoding function to hide the answer
//       function encodeAnswer(answer) {
//           return btoa(answer + "::quiz_secret").replace(/[+=]/g, '');
//       }
      
//       // 🔓 Decoding function to get the real answer
//       function decodeAnswer(encoded) {
//           try {
//               return atob(encoded + '==').replace('::quiz_secret', '');
//           } catch(e) {
//               return '';
//           }
//       }
      
//       // 💾 Save answer to localStorage
//       function saveAnswer(questionIndex, selectedValue) {
//           let savedAnswers = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
//           savedAnswers[questionIndex] = selectedValue;
//           localStorage.setItem(STORAGE_KEY, JSON.stringify(savedAnswers));
//       }
      
//       // 📥 Load saved answers from localStorage
//       function loadSavedAnswers() {
//           return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
//       }
      
//       // 🗑️ Clear saved answers from localStorage
//       function clearSavedAnswers() {
//           localStorage.removeItem(STORAGE_KEY);
//           localStorage.removeItem(QUESTIONS_KEY);
//           localStorage.removeItem(TIMER_KEY);
//       }
      
//       // ⏰ TIMER FUNCTIONS
//       let examStartTime;
//       let timerInterval;
      
//       function saveTimerStart() {
//           localStorage.setItem(TIMER_KEY, examStartTime.getTime());
//       }
      
//       function loadTimerStart() {
//           const saved = localStorage.getItem(TIMER_KEY);
//           if (saved) {
//               examStartTime = new Date(parseInt(saved));
//               return true;
//           }
//           return false;
//       }
      
//       function startTimer() {
//           // Try to load existing timer, if not create new one
//           if (!loadTimerStart()) {
//               examStartTime = new Date();
//               saveTimerStart();
//           }
          
//           // Update timer display every second
//           updateTimerDisplay();
//           timerInterval = setInterval(updateTimerDisplay, 1000);
//       }
      
//       function updateTimerDisplay() {
//           const currentTime = new Date();
//           const timeTaken = Math.floor((currentTime - examStartTime) / 1000);
          
//           const hours = Math.floor(timeTaken / 3600);
//           const minutes = Math.floor((timeTaken % 3600) / 60);
//           const seconds = timeTaken % 60;
          
//           const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          
//           // Update timer display if element exists
//           const timerElement = document.getElementById('quiz_timer');
//           if (timerElement) {
//               timerElement.textContent = `⏱️ Time: ${timeString}`;
//           }
//       }
      
//       function stopTimer() {
//           if (timerInterval) {
//               clearInterval(timerInterval);
//               timerInterval = null;
//           }
//       }
      
//       function getElapsedTime() {
//           const currentTime = new Date();
//           return Math.floor((currentTime - examStartTime) / 1000);
//       }
      
//       // 💾 Save questions order to localStorage
//       function saveQuestionsOrder() {
//           let questionsOrder = processedQuestions.map(q => ({
//               originalIndex: q.originalIndex,
//               choice: q.choice,
//               correctKey: q.correctKey,
//               question: q.question
//           }));
//           localStorage.setItem(QUESTIONS_KEY, JSON.stringify(questionsOrder));
//       }
      
//       // 📥 Load questions order from localStorage
//       function loadQuestionsOrder() {
//           let saved = localStorage.getItem(QUESTIONS_KEY);
//           return saved ? JSON.parse(saved) : null;
//       }
      
//       // 🔧 Prepare and shuffle the choices, assign letter keys (A, B, C...)
//       function prepareQuestion(q, index) {
//           let choices = [q.answer, ...q.random_answer].sort(() => Math.random() - 0.5);
//           q.choice = {};
//           choices.forEach((choice, choiceIndex) => {
//               const letter = String.fromCharCode(65 + choiceIndex); // A, B, C...
//               q.choice[letter] = choice;
//               if (choice === q.answer) q.correctKey = letter;
//           });
//           q.answer = q.correctKey;
//           q.originalIndex = index;
//           return q;
//       }
      
//       // 🔄 Restore previous questions order if available
//       function restoreQuestionsOrder() {
//           let savedOrder = loadQuestionsOrder();
//           if (savedOrder && savedOrder.length === questions.length) {
//               // Use saved order instead of shuffling
//               processedQuestions = savedOrder.map(saved => {
//                   let originalQuestion = questions[saved.originalIndex];
//                   return {
//                       ...originalQuestion,
//                       choice: saved.choice,
//                       correctKey: saved.correctKey,
//                       answer: saved.correctKey,
//                       originalIndex: saved.originalIndex
//                   };
//               });
//               return true;
//           }
//           return false;
//       }
      
//       // 🔥 LAZY LOAD FUNCTION - Renders questions in batches
//       function loadNextBatch() {
//           if (currentIndex >= processedQuestions.length) return false;
          
//           $("#loading_indicator").show();
          
//           // Simulate slight delay for smooth loading experience
//           setTimeout(() => {
//               let container = $("#quiz_container");
//               let endIndex = Math.min(currentIndex + batchSize, processedQuestions.length);
//               let savedAnswersData = loadSavedAnswers();
              
//               for (let i = currentIndex; i < endIndex; i++) {
//                   let q = processedQuestions[i];
                  
//                   // 🔐 Encode the correct answer before storing it
//                   let encodedAnswer = encodeAnswer(q.answer);
                  
//                   let questionHTML = `
//                   <div class="card bg-base-200 shadow-lg question_area" data-index="${q.originalIndex}" data-key="${encodedAnswer}">
//                       <div class="card-body">
//                           <h3 class="card-title text-base-content font-semibold mb-4">${q.originalIndex + 1}. ${q.question}</h3>
//                           <div class="space-y-2">`;
      
//                   for (let key in q.choice) {
//                       let isChecked = savedAnswersData[q.originalIndex] === key ? 'checked' : '';
//                       questionHTML += `
//                       <label class="cursor-pointer label justify-start space-x-3 hover:bg-base-300 rounded-lg p-2 transition-colors">
//                           <input type="radio" name="radio-${q.originalIndex}" value="${key}" class="radio radio-primary" ${isChecked} />
//                           <span class="label-text text-base-content">
//                               <span class="font-semibold text-primary">${key}:</span> ${q.choice[key]}
//                           </span>
//                       </label>`;
//                   }
      
//                   questionHTML += `
//                           </div>
//                       </div>
//                   </div>`;
                  
//                   container.append(questionHTML);
//               }
              
//               currentIndex = endIndex;
//               updateProgress();
//               $("#loading_indicator").hide();
              
//               // Auto-load next batch when user scrolls near bottom
//               if (currentIndex < processedQuestions.length) {
//                   checkScrollPosition();
//               }
              
//           }, 100); // Small delay for smooth experience
          
//           return true;
//       }
      
//       // 📊 Update progress bar and text
//       function updateProgress() {
//           let percentage = (currentIndex / processedQuestions.length) * 100;
//           $("#progress_fill").css('width', percentage + '%');
//           $("#progress_text").text(`Loaded: ${currentIndex} / ${processedQuestions.length} questions`);
          
//           // 🚫 Hide progress bar when all questions are loaded
//           if (currentIndex >= processedQuestions.length) {
//               $(".w-full.bg-base-300").hide();
//               $("#progress_text").hide();
//           }
//       }
      
//       // 👀 Check scroll position for auto-loading
//       function checkScrollPosition() {
//           $(window).on('scroll', function() {
//               if ($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
//                   if (currentIndex < processedQuestions.length) {
//                       $(window).off('scroll'); // Prevent multiple triggers
//                       loadNextBatch();
//                   }
//               }
//           });
//       }
      
//       // 🚀 Initialize Quiz System
//       async function initializeQuiz() {
//           // Show loading indicator
//           let loadingModal = $(`
//               <dialog id="init_loading_modal" class="modal modal-open">
//                 <div class="modal-box bg-base-200 text-base-content flex items-center justify-center">
//                   <div class="text-center">
//                     <div class="loading loading-spinner loading-lg text-primary mb-4"></div>
//                     <p class="text-lg font-semibold">🔄 Loading Quiz Questions...</p>
//                   </div>
//                 </div>
//               </dialog>
//           `);
//           $("body").append(loadingModal);
          
//           // Load questions from JSON
//           const loadSuccess = await loadQuestionsFromJSON();
          
//           // Remove loading modal
//           $("#init_loading_modal").remove();
          
//           if (!loadSuccess) {
//               return; // Error modal already shown in loadQuestionsFromJSON
//           }
          
//           // Validate questions structure
//           if (!questions || questions.length === 0) {
//               showErrorModal('No questions found in the JSON file.');
//               return;
//           }
          
//           // Validate question format
//           const invalidQuestions = questions.filter(q => 
//               !q.question || !q.answer || !q.random_answer || !Array.isArray(q.random_answer)
//           );
          
//           if (invalidQuestions.length > 0) {
//               showErrorModal(`Found ${invalidQuestions.length} questions with invalid format. Please check your JSON structure.`);
//               return;
//           }
          
//           console.log(`✅ Quiz initialized with ${questions.length} valid questions`);
          
//           // 🔄 Try to restore previous questions order, or shuffle if none exists
//           if (!restoreQuestionsOrder()) {
//               // 🎲 Shuffle questions array before loading
//               questions.sort(() => Math.random() - 0.5);
              
//               // Process questions in the new shuffled order
//               processedQuestions = questions.map((q, index) => prepareQuestion(q, index));
              
//               // Save the new order
//               saveQuestionsOrder();
//           }
          
//           // 🚀 Load first batch immediately
//           loadNextBatch();
          
//           // ⏰ Start the timer
//           startTimer();
//       }
      
//       function scoreReview(score, totalItems) {
//           const percentage = (score / totalItems) * 100;
//           let message = "";
      
//           if (percentage > 90) {
//               message = `${percentage.toFixed(2)}% – Outstanding performance. You have exceeded expectations.`;
//           } else if (percentage > 80) {
//               message = `${percentage.toFixed(2)}% – Excellent work. You have confidently passed. (Minimum required: 80%)`;
//           } else if (percentage >= 75) {
//               message = `${percentage.toFixed(2)}% – You have passed with a good margin. (Minimum required: 75%)`;
//           } else if (percentage >= 60) {
//               message = `${percentage.toFixed(2)}% – You have passed. (Minimum required: 60%)`;
//           } else if (percentage >= 50) {
//               message = `${percentage.toFixed(2)}% – You have barely passed. (Minimum required: 50%)`;
//           } else {
//               message = `${percentage.toFixed(2)}% – You did not pass. You need at least 50% to meet the minimum requirement.`;
//           }
      
//           return message;
//       }
      
//       $(document).ready(function() {
//           // 🚀 Initialize the quiz system
//           initializeQuiz();
      
//           // 💾 AUTOSAVE EVENT LISTENER - Save answers when radio buttons change
//           $(document).on('change', 'input[type="radio"]', function() {
//               let questionArea = $(this).closest('.question_area');
//               let questionIndex = questionArea.data('index');
//               let selectedValue = $(this).val();
              
//               // Save to localStorage
//               saveAnswer(questionIndex, selectedValue);
//           });
      
//           $(".check_answer").on("click", function () {
//               console.clear();
      
//               let correct = 0;
//               let incorrect = 0;
//               let unansweredIndexes = [];
//               let wrongAnswers = [];
      
//               $(".question_area").each(function (i) {
//                   let questionIndex = $(this).data('index');
//                   let correctAnswer = processedQuestions.find(q => q.originalIndex === questionIndex).answer;
//                   let selected = $(this).find("input[type='radio']:checked").val();
//                   let questionText = $(this).find(".card-title").text().replace(/^\d+\.\s*/, '');
//                   let correctText = $(this).find(`input[value="${correctAnswer}"]`).closest('label').find('.label-text').text().trim();
      
//                   if (!selected) {
//                       unansweredIndexes.push(questionIndex + 1);
//                   } else if (selected === correctAnswer) {
//                       correct++;
//                   } else {
//                       incorrect++;
//                       let selectedText = $(this).find(`input[value="${selected}"]`).closest('label').find('.label-text').text().trim();
//                       let questionData = processedQuestions.find(q => q.originalIndex === questionIndex);
//                       wrongAnswers.push({
//                           question: questionText,
//                           correct: correctText?.split(":")[1]?.trim(),
//                           why: questionData.why ? questionData.why[Math.floor(Math.random() * questionData.why.length)] : "No explanation available.",
//                           answer_selected: selectedText?.split(":")[1]?.trim()
//                       });
//                   }
//               });
      
//               // ❗ Show warning modal if naay wala na-answeran
//               if (unansweredIndexes.length > 0) {
//                   let warningModal = $(`
//                       <dialog id="unanswered_modal" class="modal modal-open">
//                         <div class="modal-box bg-warning text-warning-content">
//                           <h3 class="font-bold text-lg">⚠️ Unanswered Questions</h3>
//                           <p class="py-2">😅 There’s an unanswered item: [${unansweredIndexes.join(", ")}]</p>
//                           <div class="modal-action">
//                             <button class="btn close-warning">Got it</button>
//                           </div>
//                         </div>
//                       </dialog>
//                   `);
//                   $("body").append(warningModal);
//                   $(document).on("click", ".close-warning", function () {
//                       document.getElementById('unanswered_modal').close();
//                       $("#unanswered_modal").remove();
//                   });
//                   return;
//               }
      
//               // 🗑️ Clear saved answers after successful submission
//               clearSavedAnswers();
//               stopTimer();
      
//               let totalScore = correct;
//               let timeTaken = getElapsedTime();
      
//               let hours = Math.floor(timeTaken / 3600);
//               let minutes = Math.floor((timeTaken % 3600) / 60);
//               let seconds = timeTaken % 60;
//               let totalItems_ = correct + incorrect
      
//               // ✅ Summary Modal
//               let summaryModal = $(`
//                   <dialog id="summary_modal" class="modal modal-open">
//                     <div class="modal-box bg-base-200 text-base-content max-h-[80vh]">
//                       <h3 class="font-bold text-lg mb-2">📊 Exam Summary</h3>
//                       <p class="mb-4">
//                         ✅ Correct: ${correct}<br>
//                         ❌ Incorrect: ${incorrect}<br>
//                         ⏱️ Time Taken: ${hours}h ${minutes}m ${seconds}s
//                       </p><br>
//                       <p> 
//                          <b>${scoreReview(correct, totalItems_)}</b> 
//                       </p>
//                       <div class="modal-action">
//                         ${wrongAnswers.length > 0 ? '<button class="btn btn-warning btn-xs review-mistakes">📚 Review Mistakes</button>' : ''}
//                         <button class="btn btn-primary btn-xs review-again">🔁 Retake</button>
//                       </div>
//                     </div>
//                   </dialog>
//               `);
      
//               $("body").append(summaryModal);
//               document.getElementById('summary_modal').showModal();
      
//               $(".review-again").on("click", function () {
//                   // 🗑️ Clear saved data before reload
//                   clearSavedAnswers();
//                   stopTimer();
//                   location.reload();
//               });
      
//               // ❌ Mistakes Modal
//               if (wrongAnswers.length > 0) {
//                   let wrongModal = $(`
//                       <dialog id="wrong_modal" class="modal relative">
//                         <div class="modal-box bg-base-200 text-base-content max-h-[80vh] overflow-y-auto">
//                           <h3 class="font-bold text-lg mb-2">❌ Mistake Review</h3>
//                           <div id="wrongCollapseContainer" class="space-y-3"></div>
//                           <div class="modal-action">
//                             <button class="btn close-wrong absolute top-0 right-0">❌ Close</button>
//                           </div>
//                         </div>
//                       </dialog>
//                   `);
//                   $("body").append(wrongModal);
      
//                   $.each(wrongAnswers, function (i, item) {
//                       let collapse = $(`
//                           <div class="collapse collapse-arrow bg-base-100 border border-base-300">
//                               <input type="checkbox" />
//                               <div class="collapse-title font-medium text-sm">
//                                   ${item.question}
//                               </div>
//                               <div class="collapse-content text-sm space-y-2 pt-[10px]">
//                                   <p><span class="font-semibold">✅ Correct Answer:</span><br><b class="text-secondary">${item.correct}</b></p>
//                                   <p><span class="font-semibold">❌ Your Answer:</span><br><b class="text-error">${item.answer_selected}</b></p> <br>
//                                   <div class="mt-[30px] card shadow border-dashed border p-[10px] bg-base-200"> 
//                                     <p><span class="font-semibold">💡 Explanation:</span><br>${item.why}</p>  
//                                   </div>
//                               </div>
//                           </div>
//                       `);
//                       $("#wrongCollapseContainer").append(collapse);
//                   });
      
//                   let mistakesAlreadyReviewed = false;
      
//                   $(".review-mistakes").on("click", function () {
//                       if (mistakesAlreadyReviewed) {
//                           document.getElementById("wrong_modal").showModal();
//                           return;
//                       }
      
//                       mistakesAlreadyReviewed = true; // 🔒 Set flag so it only runs once
      
//                       let loadingTexts = [
//                           "⏳ Loading...",
//                           "📊 Analyzing Answers...",
//                           "🤖 Generating Answer using AI...",
//                           "⏱️ This may take a few moments...",
//                           "🔍 Reviewing your input...",
//                           "🧠 Thinking deeply...",
//                           "📡 Connecting to the database...",
//                           "📝 Preparing the best response...",
//                           "🚀 Optimizing your answer...",
//                           "💡 Almost done! Please wait..."
//                       ];
      
//                       let currentIndex = 0;
      
//                       let loadingModal = $(`
//                           <dialog id="loading_modal" class="modal">
//                             <div class="modal-box bg-base-200 text-base-content flex items-center justify-center h-40 text-center">
//                               <p id="loadingText" class="text-lg font-semibold">${loadingTexts[0]}</p>
//                             </div>
//                           </dialog>
//                       `);
      
//                       $("body").append(loadingModal);
//                       const dialogEl = document.getElementById("loading_modal");
//                       if (dialogEl) dialogEl.showModal();
      
//                       let interval = setInterval(() => {
//                           currentIndex = (currentIndex + 1) % loadingTexts.length;
//                           $("#loadingText").text(loadingTexts[currentIndex]);
//                       }, 1000);
      
//                       setTimeout(() => {
//                           clearInterval(interval);
//                           dialogEl.close();
//                           $("#loading_modal").remove();
      
//                           document.getElementById("wrong_modal").showModal();
//                       }, 3500);
//                   });
      
//                   $(document).on("click", ".close-wrong", function () {
//                       document.getElementById('wrong_modal').close();
//                   });
//               }
//           });
//       });
//     }



// function loadThis(x) {
//     // 🔥 LAZY LOADING VARIABLES
//     let currentIndex = 0;
//       const batchSize = 5; // Load 5 questions at a time
//       let processedQuestions = [];
//       let questions = []; // Will be loaded from JSON
      
//       // 💾 AUTOSAVE VARIABLES
//       const STORAGE_KEY = 'quiz_answers_autosave';
//       const QUESTIONS_KEY = 'quiz_questions_order';
//       const TIMER_KEY = 'quiz_timer_start';
//       const CHOICES_SEED_KEY = 'quiz_choices_seed'; // NEW: Store seed for consistent shuffling
      
//       // 📁 JSON FILE LOADING
//       async function loadQuestionsFromJSON(filename = `${sabta(x)}`) {
//           try {
//               // console.log(`🔄 Loading questions from ${filename}...`);
              
//               const response = await fetch(filename);
              
//               if (!response.ok) {
//                   throw new Error(`HTTP error! status: ${response.status}`);
//               }
              
//               const data = await response.json();
              
//               // Handle different JSON structures
//               if (Array.isArray(data)) {
//                   questions = data;
//               } else if (data.questions && Array.isArray(data.questions)) {
//                   questions = data.questions;
//               } else {
//                   throw new Error('Invalid JSON structure. Expected array or object with questions property.');
//               }
              
//               console.log(`✅ Successfully loaded ${questions.length} questions`);
//               return true;
              
//           } catch (error) {
//               console.error('❌ Error loading questions:', error);
              
//               // Show user-friendly error message
//               showErrorModal(`Failed to load questions: ${error.message}`);
//               return false;
//           }
//       }
      
//       // 🚨 Error Modal Display
//       function showErrorModal(message) {
//           let errorModal = $(`
//               <dialog id="error_modal" class="modal modal-open">
//                 <div class="modal-box bg-error text-error-content">
//                   <h3 class="font-bold text-lg">❌ Loading Error</h3>
//                   <p class="py-4">${message}</p>
//                   <div class="modal-action">
//                     <button class="btn btn-outline retry-load">🔄 Retry</button>
//                     <button class="btn close-error">Close</button>
//                   </div>
//                 </div>
//               </dialog>
//           `);
          
//           $("body").append(errorModal);
          
//           $(".retry-load").on("click", function() {
//               $("#error_modal").remove();
//               initializeQuiz(); // Retry loading
//           });
          
//           $(".close-error").on("click", function() {
//               $("#error_modal").remove();
//           });
//       }
      
//       // 🎲 Seeded Random Function - ensures consistent shuffling
//       function seededRandom(seed) {
//           const x = Math.sin(seed) * 10000;
//           return x - Math.floor(x);
//       }
      
//       // 🔀 Seeded Shuffle Function
//       function seededShuffle(array, seed) {
//           const shuffled = [...array];
//           for (let i = shuffled.length - 1; i > 0; i--) {
//               const j = Math.floor(seededRandom(seed + i) * (i + 1));
//               [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//           }
//           return shuffled;
//       }
      
//       // 🔐 Simple encoding function to hide the answer
//       function encodeAnswer(answer) {
//           return btoa(answer + "::quiz_secret").replace(/[+=]/g, '');
//       }
      
//       // 🔓 Decoding function to get the real answer
//       function decodeAnswer(encoded) {
//           try {
//               return atob(encoded + '==').replace('::quiz_secret', '');
//           } catch(e) {
//               return '';
//           }
//       }
      
//       // 💾 Save answer to localStorage
//       function saveAnswer(questionIndex, selectedValue) {
//           let savedAnswers = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
//           savedAnswers[questionIndex] = selectedValue;
//           localStorage.setItem(STORAGE_KEY, JSON.stringify(savedAnswers));
//       }
      
//       // 📥 Load saved answers from localStorage
//       function loadSavedAnswers() {
//           return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
//       }
      
//       // 🗑️ Clear saved answers from localStorage
//       function clearSavedAnswers() {
//           localStorage.removeItem(STORAGE_KEY);
//           localStorage.removeItem(QUESTIONS_KEY);
//           localStorage.removeItem(TIMER_KEY);
//           localStorage.removeItem(CHOICES_SEED_KEY);
//       }
      
//       // ⏰ TIMER FUNCTIONS
//       let examStartTime;
//       let timerInterval;
      
//       function saveTimerStart() {
//           localStorage.setItem(TIMER_KEY, examStartTime.getTime());
//       }
      
//       function loadTimerStart() {
//           const saved = localStorage.getItem(TIMER_KEY);
//           if (saved) {
//               examStartTime = new Date(parseInt(saved));
//               return true;
//           }
//           return false;
//       }
      
//       function startTimer() {
//           // Try to load existing timer, if not create new one
//           if (!loadTimerStart()) {
//               examStartTime = new Date();
//               saveTimerStart();
//           }
          
//           // Update timer display every second
//           updateTimerDisplay();
//           timerInterval = setInterval(updateTimerDisplay, 1000);
//       }
      
//       function updateTimerDisplay() {
//           const currentTime = new Date();
//           const timeTaken = Math.floor((currentTime - examStartTime) / 1000);
          
//           const hours = Math.floor(timeTaken / 3600);
//           const minutes = Math.floor((timeTaken % 3600) / 60);
//           const seconds = timeTaken % 60;
          
//           const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          
//           // Update timer display if element exists
//           const timerElement = document.getElementById('quiz_timer');
//           if (timerElement) {
//               timerElement.textContent = `⏱️ Time: ${timeString}`;
//           }
//       }
      
//       function stopTimer() {
//           if (timerInterval) {
//               clearInterval(timerInterval);
//               timerInterval = null;
//           }
//       }
      
//       function getElapsedTime() {
//           const currentTime = new Date();
//           return Math.floor((currentTime - examStartTime) / 1000);
//       }
      
//       // 💾 Save questions order to localStorage with seed
//       function saveQuestionsOrder(seed) {
//           let questionsOrder = processedQuestions.map(q => ({
//               originalIndex: q.originalIndex,
//               choice: q.choice,
//               correctKey: q.correctKey,
//               question: q.question,
//               originalAnswer: questions[q.originalIndex].answer, // Save original answer
//               random_answer: questions[q.originalIndex].random_answer, // Save random answers
//               why: questions[q.originalIndex].why // Save explanation if exists
//           }));
//           localStorage.setItem(QUESTIONS_KEY, JSON.stringify(questionsOrder));
//           localStorage.setItem(CHOICES_SEED_KEY, seed.toString());
//       }
      
//       // 📥 Load questions order from localStorage
//       function loadQuestionsOrder() {
//           let saved = localStorage.getItem(QUESTIONS_KEY);
//           let seed = localStorage.getItem(CHOICES_SEED_KEY);
//           return saved && seed ? { questions: JSON.parse(saved), seed: parseInt(seed) } : null;
//       }
      
//       // 🔧 Prepare and shuffle the choices with seed, assign letter keys (A, B, C...)
//       function prepareQuestion(q, originalIndex, seed) {
//           // Create a unique seed for each question based on the original question index
//           const questionSeed = seed + originalIndex * 1000;
          
//           // Store the original answer before shuffling
//           const originalAnswer = q.answer;
          
//           let choices = [q.answer, ...q.random_answer];
//           choices = seededShuffle(choices, questionSeed);
          
//           q.choice = {};
//           choices.forEach((choice, choiceIndex) => {
//               const letter = String.fromCharCode(65 + choiceIndex); // A, B, C...
//               q.choice[letter] = choice;
//               if (choice === originalAnswer) q.correctKey = letter;
//           });
//           q.answer = q.correctKey;
//           q.originalIndex = originalIndex;
//           return q;
//       }
      
//       // 🔄 Restore previous questions order if available
//       function restoreQuestionsOrder() {
//           let savedData = loadQuestionsOrder();
//           if (savedData && savedData.questions.length === questions.length) {
//               // Restore the exact saved state
//               processedQuestions = savedData.questions.map(saved => ({
//                   question: saved.question,
//                   answer: saved.correctKey, // Use the saved correct key
//                   correctKey: saved.correctKey,
//                   choice: saved.choice,
//                   originalIndex: saved.originalIndex,
//                   originalAnswer: saved.originalAnswer,
//                   random_answer: saved.random_answer,
//                   why: saved.why
//               }));
//               return true;
//           }
//           return false;
//       }
      
//       // 🔥 LAZY LOAD FUNCTION - Renders questions in batches
//       function loadNextBatch() {
//           if (currentIndex >= processedQuestions.length) return false;
          
//           $("#loading_indicator").show();
          
//           // Simulate slight delay for smooth loading experience
//           setTimeout(() => {
//               let container = $("#quiz_container");
//               let endIndex = Math.min(currentIndex + batchSize, processedQuestions.length);
//               let savedAnswersData = loadSavedAnswers();
              
//               for (let i = currentIndex; i < endIndex; i++) {
//                   let q = processedQuestions[i];
                  
//                   // 🔐 Encode the correct answer before storing it
//                   let encodedAnswer = encodeAnswer(q.answer);
                  
//                   let questionHTML = `
//                   <div class="card bg-base-200 shadow-lg question_area" data-index="${q.originalIndex}" data-key="${encodedAnswer}">
//                       <div class="card-body">
//                           <h3 class="card-title text-base-content font-semibold mb-4">${q.originalIndex + 1}. ${q.question}</h3>
//                           <div class="space-y-2">`;
      
//                   for (let key in q.choice) {
//                       let isChecked = savedAnswersData[q.originalIndex] === key ? 'checked' : '';
//                       questionHTML += `
//                       <label class="cursor-pointer label justify-start space-x-3 hover:bg-base-300 rounded-lg p-2 transition-colors">
//                           <input type="radio" name="radio-${q.originalIndex}" value="${key}" class="radio radio-primary" ${isChecked} />
//                           <span class="label-text text-base-content">
//                               <span class="font-semibold text-primary">${key}:</span> ${q.choice[key]}
//                           </span>
//                       </label>`;
//                   }
      
//                   questionHTML += `
//                           </div>
//                       </div>
//                   </div>`;
                  
//                   container.append(questionHTML);
//               }
              
//               currentIndex = endIndex;
//               updateProgress();
//               $("#loading_indicator").hide();
              
//               // Auto-load next batch when user scrolls near bottom
//               if (currentIndex < processedQuestions.length) {
//                   checkScrollPosition();
//               }
              
//           }, 100); // Small delay for smooth experience
          
//           return true;
//       }
      
//       // 📊 Update progress bar and text
//       function updateProgress() {
//           let percentage = (currentIndex / processedQuestions.length) * 100;
//           $("#progress_fill").css('width', percentage + '%');
//           $("#progress_text").text(`Loaded: ${currentIndex} / ${processedQuestions.length} questions`);
          
//           // 🚫 Hide progress bar when all questions are loaded
//           if (currentIndex >= processedQuestions.length) {
//               $(".w-full.bg-base-300").hide();
//               $("#progress_text").hide();
//           }
//       }
      
//       // 👀 Check scroll position for auto-loading
//       function checkScrollPosition() {
//           $(window).on('scroll', function() {
//               if ($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
//                   if (currentIndex < processedQuestions.length) {
//                       $(window).off('scroll'); // Prevent multiple triggers
//                       loadNextBatch();
//                   }
//               }
//           });
//       }
      
//       // 🚀 Initialize Quiz System
//       async function initializeQuiz() {
//           // Show loading indicator
//           let loadingModal = $(`
//               <dialog id="init_loading_modal" class="modal modal-open">
//                 <div class="modal-box bg-base-200 text-base-content flex items-center justify-center">
//                   <div class="text-center">
//                     <div class="loading loading-spinner loading-lg text-primary mb-4"></div>
//                     <p class="text-lg font-semibold">🔄 Loading Quiz Questions...</p>
//                   </div>
//                 </div>
//               </dialog>
//           `);
//           $("body").append(loadingModal);
          
//           // Load questions from JSON
//           const loadSuccess = await loadQuestionsFromJSON();
          
//           // Remove loading modal
//           $("#init_loading_modal").remove();
          
//           if (!loadSuccess) {
//               return; // Error modal already shown in loadQuestionsFromJSON
//           }
          
//           // Validate questions structure
//           if (!questions || questions.length === 0) {
//               showErrorModal('No questions found in the JSON file.');
//               return;
//           }
          
//           // Validate question format
//           const invalidQuestions = questions.filter(q => 
//               !q.question || !q.answer || !q.random_answer || !Array.isArray(q.random_answer)
//           );
          
//           if (invalidQuestions.length > 0) {
//               showErrorModal(`Found ${invalidQuestions.length} questions with invalid format. Please check your JSON structure.`);
//               return;
//           }
          
//           console.log(`✅ Quiz initialized with ${questions.length} valid questions`);
          
//           // 🔄 Try to restore previous questions order, or shuffle if none exists
//           if (!restoreQuestionsOrder()) {
//               // 🎲 Generate a consistent seed for this quiz session
//               const seed = Math.floor(Math.random() * 1000000);
              
//               // Store original indices before shuffling
//               const questionsWithIndices = questions.map((q, index) => ({
//                   ...q,
//                   originalIndex: index
//               }));
              
//               // Shuffle questions array using seeded shuffle
//               const shuffledQuestions = seededShuffle(questionsWithIndices, seed);
              
//               // Process questions in the new shuffled order with consistent choice shuffling
//               processedQuestions = shuffledQuestions.map((q, shuffledIndex) => 
//                   prepareQuestion({...q}, q.originalIndex, seed)
//               );
              
//               // Save the new order with seed
//               saveQuestionsOrder(seed);
//           }
          
//           // 🚀 Load first batch immediately
//           loadNextBatch();
          
//           // ⏰ Start the timer
//           startTimer();
//       }
      
//       function scoreReview(score, totalItems) {
//           const percentage = (score / totalItems) * 100;
//           let message = "";
      
//           if (percentage > 90) {
//               message = `${percentage.toFixed(2)}% – Outstanding performance. You have exceeded expectations.`;
//           } else if (percentage > 80) {
//               message = `${percentage.toFixed(2)}% – Excellent work. You have confidently passed. (Minimum required: 80%)`;
//           } else if (percentage >= 75) {
//               message = `${percentage.toFixed(2)}% – You have passed with a good margin. (Minimum required: 75%)`;
//           } else if (percentage >= 60) {
//               message = `${percentage.toFixed(2)}% – You have passed. (Minimum required: 60%)`;
//           } else if (percentage >= 50) {
//               message = `${percentage.toFixed(2)}% – You have barely passed. (Minimum required: 50%)`;
//           } else {
//               message = `${percentage.toFixed(2)}% – You did not pass. You need at least 50% to meet the minimum requirement.`;
//           }
      
//           return message;
//       }
      
//       $(document).ready(function() {
//           // 🚀 Initialize the quiz system
//           initializeQuiz();
      
//           // 💾 AUTOSAVE EVENT LISTENER - Save answers when radio buttons change
//           $(document).on('change', 'input[type="radio"]', function() {
//               let questionArea = $(this).closest('.question_area');
//               let questionIndex = questionArea.data('index');
//               let selectedValue = $(this).val();
              
//               // Save to localStorage
//               saveAnswer(questionIndex, selectedValue);
//           });
      
//           $(".check_answer").on("click", function () {
//               console.clear();
      
//               let correct = 0;
//               let incorrect = 0;
//               let unansweredIndexes = [];
//               let wrongAnswers = [];
      
//               $(".question_area").each(function (i) {
//                   let questionIndex = $(this).data('index');
//                   let correctAnswer = processedQuestions.find(q => q.originalIndex === questionIndex).answer;
//                   let selected = $(this).find("input[type='radio']:checked").val();
//                   let questionText = $(this).find(".card-title").text().replace(/^\d+\.\s*/, '');
//                   let correctText = $(this).find(`input[value="${correctAnswer}"]`).closest('label').find('.label-text').text().trim();
      
//                   if (!selected) {
//                       unansweredIndexes.push(questionIndex + 1);
//                   } else if (selected === correctAnswer) {
//                       correct++;
//                   } else {
//                       incorrect++;
//                       let selectedText = $(this).find(`input[value="${selected}"]`).closest('label').find('.label-text').text().trim();
//                       let questionData = processedQuestions.find(q => q.originalIndex === questionIndex);
//                       wrongAnswers.push({
//                           question: questionText,
//                           correct: correctText?.split(":")[1]?.trim(),
//                           why: questionData.why ? questionData.why[Math.floor(Math.random() * questionData.why.length)] : "No explanation available.",
//                           answer_selected: selectedText?.split(":")[1]?.trim()
//                       });
//                   }
//               });
      
//               // ❗ Show warning modal if naay wala na-answeran
//               if (unansweredIndexes.length > 0) {
//                   let warningModal = $(`
//                       <dialog id="unanswered_modal" class="modal modal-open">
//                         <div class="modal-box bg-warning text-warning-content">
//                           <h3 class="font-bold text-lg">⚠️ Unanswered Questions</h3>
//                           <p class="py-2">😅 There's an unanswered item: [${unansweredIndexes.join(", ")}]</p>
//                           <div class="modal-action">
//                             <button class="btn close-warning">Got it</button>
//                           </div>
//                         </div>
//                       </dialog>
//                   `);
//                   $("body").append(warningModal);
//                   $(document).on("click", ".close-warning", function () {
//                       document.getElementById('unanswered_modal').close();
//                       $("#unanswered_modal").remove();
//                   });
//                   return;
//               }
      
//               // 🗑️ Clear saved answers after successful submission
//               clearSavedAnswers();
//               stopTimer();
      
//               let totalScore = correct;
//               let timeTaken = getElapsedTime();
      
//               let hours = Math.floor(timeTaken / 3600);
//               let minutes = Math.floor((timeTaken % 3600) / 60);
//               let seconds = timeTaken % 60;
//               let totalItems_ = correct + incorrect
      
//               // ✅ Summary Modal
//               let summaryModal = $(`
//                   <dialog id="summary_modal" class="modal modal-open">
//                     <div class="modal-box bg-base-200 text-base-content max-h-[80vh]">
//                       <h3 class="font-bold text-lg mb-2">📊 Exam Summary</h3>
//                       <p class="mb-4">
//                         ✅ Correct: ${correct}<br>
//                         ❌ Incorrect: ${incorrect}<br>
//                         ⏱️ Time Taken: ${hours}h ${minutes}m ${seconds}s
//                       </p><br>
//                       <p> 
//                          <b>${scoreReview(correct, totalItems_)}</b> 
//                       </p>
//                       <div class="modal-action">
//                         ${wrongAnswers.length > 0 ? '<button class="btn btn-warning btn-xs review-mistakes">📚 Review Mistakes</button>' : ''}
//                         <button class="btn btn-primary btn-xs review-again">🔁 Retake</button>
//                       </div>
//                     </div>
//                   </dialog>
//               `);
      
//               $("body").append(summaryModal);
//               document.getElementById('summary_modal').showModal();
      
//               $(".review-again").on("click", function () {
//                   // 🗑️ Clear saved data before reload
//                   clearSavedAnswers();
//                   stopTimer();
//                   location.reload();
//               });
      
//               // ❌ Mistakes Modal
//               if (wrongAnswers.length > 0) {
//                   let wrongModal = $(`
//                       <dialog id="wrong_modal" class="modal relative">
//                         <div class="modal-box bg-base-200 text-base-content max-h-[80vh] overflow-y-auto">
//                           <h3 class="font-bold text-lg mb-2">❌ Mistake Review</h3>
//                           <div id="wrongCollapseContainer" class="space-y-3"></div>
//                           <div class="modal-action">
//                             <button class="btn close-wrong absolute top-0 right-0">❌ Close</button>
//                           </div>
//                         </div>
//                       </dialog>
//                   `);
//                   $("body").append(wrongModal);
      
//                   $.each(wrongAnswers, function (i, item) {
//                       let collapse = $(`
//                           <div class="collapse collapse-arrow bg-base-100 border border-base-300">
//                               <input type="checkbox" />
//                               <div class="collapse-title font-medium text-sm">
//                                   ${item.question}
//                               </div>
//                               <div class="collapse-content text-sm space-y-2 pt-[10px]">
//                                   <p><span class="font-semibold">✅ Correct Answer:</span><br><b class="text-secondary">${item.correct}</b></p>
//                                   <p><span class="font-semibold">❌ Your Answer:</span><br><b class="text-error">${item.answer_selected}</b></p> <br>
//                                   <div class="mt-[30px] card shadow border-dashed border p-[10px] bg-base-200"> 
//                                     <p><span class="font-semibold">💡 Explanation:</span><br>${item.why}</p>  
//                                   </div>
//                               </div>
//                           </div>
//                       `);
//                       $("#wrongCollapseContainer").append(collapse);
//                   });
      
//                   let mistakesAlreadyReviewed = false;
      
//                   $(".review-mistakes").on("click", function () {
//                       if (mistakesAlreadyReviewed) {
//                           document.getElementById("wrong_modal").showModal();
//                           return;
//                       }
      
//                       mistakesAlreadyReviewed = true; // 🔒 Set flag so it only runs once
      
//                       let loadingTexts = [
//                           "⏳ Loading...",
//                           "📊 Analyzing Answers...",
//                           "🤖 Generating Answer using AI...",
//                           "⏱️ This may take a few moments...",
//                           "🔍 Reviewing your input...",
//                           "🧠 Thinking deeply...",
//                           "📡 Connecting to the database...",
//                           "📝 Preparing the best response...",
//                           "🚀 Optimizing your answer...",
//                           "💡 Almost done! Please wait..."
//                       ];
      
//                       let currentIndex = 0;
      
//                       let loadingModal = $(`
//                           <dialog id="loading_modal" class="modal">
//                             <div class="modal-box bg-base-200 text-base-content flex items-center justify-center h-40 text-center">
//                               <p id="loadingText" class="text-lg font-semibold">${loadingTexts[0]}</p>
//                             </div>
//                           </dialog>
//                       `);
      
//                       $("body").append(loadingModal);
//                       const dialogEl = document.getElementById("loading_modal");
//                       if (dialogEl) dialogEl.showModal();
      
//                       let interval = setInterval(() => {
//                           currentIndex = (currentIndex + 1) % loadingTexts.length;
//                           $("#loadingText").text(loadingTexts[currentIndex]);
//                       }, 1000);
      
//                       setTimeout(() => {
//                           clearInterval(interval);
//                           dialogEl.close();
//                           $("#loading_modal").remove();
      
//                           document.getElementById("wrong_modal").showModal();
//                       }, 3500);
//                   });
      
//                   $(document).on("click", ".close-wrong", function () {
//                       document.getElementById('wrong_modal').close();
//                   });
//               }
//           });
//       });
//     }



function loadThis(x) {
    // 🔥 LAZY LOADING VARIABLES
    let currentIndex = 0;
      const batchSize = 5; // Load 5 questions at a time
      let processedQuestions = [];
      let questions = []; // Will be loaded from JSON
      
      // 💾 AUTOSAVE VARIABLES
      const STORAGE_KEY = 'quiz_answers_autosave';
      const QUESTIONS_KEY = 'quiz_questions_order';
      const TIMER_KEY = 'quiz_timer_start';
      const CHOICES_SEED_KEY = 'quiz_choices_seed'; // NEW: Store seed for consistent shuffling
      
      // 📁 JSON FILE LOADING
      async function loadQuestionsFromJSON(filename = `${sabta(`&#46;&#46;&#47;&#100;&#97;&#116;&#97;&#115;&#46;&#106;&#115;&#111;&#110;`)}`) {
          try {
              // console.log(`🔄 Loading questions from ${filename}...`);
              
              const response = await fetch(filename);
              
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              
              const data = await response.json();
              
              // Handle different JSON structures
              if (Array.isArray(data)) {
                  questions = data;
              } else if (data.questions && Array.isArray(data.questions)) {
                  questions = data.questions;
              } else {
                  throw new Error('Invalid JSON structure. Expected array or object with questions property.');
              }
              
              console.log(`✅ Successfully loaded ${questions.length} questions`);
              return true;
              
          } catch (error) {
              console.error('❌ Error loading questions:', error);
              
              // Show user-friendly error message
              showErrorModal(`Failed to load questions: ${error.message}`);
              return false;
          }
      }
      
      // 🚨 Error Modal Display
      function showErrorModal(message) {
          let errorModal = $(`
              <dialog id="error_modal" class="modal modal-open">
                <div class="modal-box bg-error text-error-content">
                  <h3 class="font-bold text-lg">❌ Loading Error</h3>
                  <p class="py-4">${message}</p>
                  <div class="modal-action">
                    <button class="btn btn-outline retry-load">🔄 Retry</button>
                    <button class="btn close-error">Close</button>
                  </div>
                </div>
              </dialog>
          `);
          
          $("body").append(errorModal);
          
          $(".retry-load").on("click", function() {
              $("#error_modal").remove();
              initializeQuiz(); // Retry loading
          });
          
          $(".close-error").on("click", function() {
              $("#error_modal").remove();
          });
      }
      
      // 🎲 Seeded Random Function - ensures consistent shuffling
      function seededRandom(seed) {
          const x = Math.sin(seed) * 10000;
          return x - Math.floor(x);
      }
      
      // 🔀 Seeded Shuffle Function
      function seededShuffle(array, seed) {
          const shuffled = [...array];
          for (let i = shuffled.length - 1; i > 0; i--) {
              const j = Math.floor(seededRandom(seed + i) * (i + 1));
              [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          return shuffled;
      }
      
      // 🔐 Simple encoding function to hide the answer
      function encodeAnswer(answer) {
          return btoa(answer + "::quiz_secret").replace(/[+=]/g, '');
      }
      
      // 🔓 Decoding function to get the real answer
      function decodeAnswer(encoded) {
          try {
              return atob(encoded + '==').replace('::quiz_secret', '');
          } catch(e) {
              return '';
          }
      }
      
      // 💾 Save answer to localStorage
      function saveAnswer(questionIndex, selectedValue) {
          let savedAnswers = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
          savedAnswers[questionIndex] = selectedValue;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(savedAnswers));
      }
      
      // 📥 Load saved answers from localStorage
      function loadSavedAnswers() {
          return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      }
      
      // 🗑️ Clear saved answers from localStorage
      function clearSavedAnswers() {
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(QUESTIONS_KEY);
          localStorage.removeItem(TIMER_KEY);
          localStorage.removeItem(CHOICES_SEED_KEY);
      }
      
      // ⏰ TIMER FUNCTIONS
      let examStartTime;
      let timerInterval;
      
      function saveTimerStart() {
          localStorage.setItem(TIMER_KEY, examStartTime.getTime());
      }
      
      function loadTimerStart() {
          const saved = localStorage.getItem(TIMER_KEY);
          if (saved) {
              examStartTime = new Date(parseInt(saved));
              return true;
          }
          return false;
      }
      
      function startTimer() {
          // Try to load existing timer, if not create new one
          if (!loadTimerStart()) {
              examStartTime = new Date();
              saveTimerStart();
          }
          
          // Update timer display every second
          updateTimerDisplay();
          timerInterval = setInterval(updateTimerDisplay, 1000);
      }
      
      function updateTimerDisplay() {
          const currentTime = new Date();
          const timeTaken = Math.floor((currentTime - examStartTime) / 1000);
          
          const hours = Math.floor(timeTaken / 3600);
          const minutes = Math.floor((timeTaken % 3600) / 60);
          const seconds = timeTaken % 60;
          
          const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          
          // Update timer display if element exists
          const timerElement = document.getElementById('quiz_timer');
          if (timerElement) {
              timerElement.textContent = `⏱️ Time: ${timeString}`;
          }
      }
      
      function stopTimer() {
          if (timerInterval) {
              clearInterval(timerInterval);
              timerInterval = null;
          }
      }
      
      function getElapsedTime() {
          const currentTime = new Date();
          return Math.floor((currentTime - examStartTime) / 1000);
      }
      
      // 💾 Save questions order to localStorage with seed
      function saveQuestionsOrder(seed) {
          let questionsOrder = processedQuestions.map(q => ({
              originalIndex: q.originalIndex,
              displayIndex: q.displayIndex, // NEW: Save the display index
              choice: q.choice,
              correctKey: q.correctKey,
              question: q.question,
              originalAnswer: questions[q.originalIndex].answer, // Save original answer
              random_answer: questions[q.originalIndex].random_answer, // Save random answers
              why: questions[q.originalIndex].why // Save explanation if exists
          }));
          localStorage.setItem(QUESTIONS_KEY, JSON.stringify(questionsOrder));
          localStorage.setItem(CHOICES_SEED_KEY, seed.toString());
      }
      
      // 📥 Load questions order from localStorage
      function loadQuestionsOrder() {
          let saved = localStorage.getItem(QUESTIONS_KEY);
          let seed = localStorage.getItem(CHOICES_SEED_KEY);
          return saved && seed ? { questions: JSON.parse(saved), seed: parseInt(seed) } : null;
      }
      
      // 🔧 Prepare and shuffle the choices with seed, assign letter keys (A, B, C...)
      function prepareQuestion(q, originalIndex, displayIndex, seed) {
          // Create a unique seed for each question based on the original question index
          const questionSeed = seed + originalIndex * 1000;
          
          // Store the original answer before shuffling
          const originalAnswer = q.answer;
          
          let choices = [q.answer, ...q.random_answer];
          choices = seededShuffle(choices, questionSeed);
          
          q.choice = {};
          choices.forEach((choice, choiceIndex) => {
              const letter = String.fromCharCode(65 + choiceIndex); // A, B, C...
              q.choice[letter] = choice;
              if (choice === originalAnswer) q.correctKey = letter;
          });
          q.answer = q.correctKey;
          q.originalIndex = originalIndex;
          q.displayIndex = displayIndex; // NEW: Store display index for sequential numbering
          return q;
      }
      
      // 🔄 Restore previous questions order if available
      function restoreQuestionsOrder() {
          let savedData = loadQuestionsOrder();
          if (savedData && savedData.questions.length === questions.length) {
              // Restore the exact saved state
              processedQuestions = savedData.questions.map(saved => ({
                  question: saved.question,
                  answer: saved.correctKey, // Use the saved correct key
                  correctKey: saved.correctKey,
                  choice: saved.choice,
                  originalIndex: saved.originalIndex,
                  displayIndex: saved.displayIndex, // NEW: Restore display index
                  originalAnswer: saved.originalAnswer,
                  random_answer: saved.random_answer,
                  why: saved.why
              }));
              return true;
          }
          return false;
      }
      
      // 🔥 LAZY LOAD FUNCTION - Renders questions in batches
      function loadNextBatch() {
          if (currentIndex >= processedQuestions.length) return false;
          
          $("#loading_indicator").show();
          
          // Simulate slight delay for smooth loading experience
          setTimeout(() => {
              let container = $("#quiz_container");
              let endIndex = Math.min(currentIndex + batchSize, processedQuestions.length);
              let savedAnswersData = loadSavedAnswers();
              
              for (let i = currentIndex; i < endIndex; i++) {
                  let q = processedQuestions[i];
                  
                  // 🔐 Encode the correct answer before storing it
                  let encodedAnswer = encodeAnswer(q.answer);
                  
                  // 🔢 Use displayIndex for sequential numbering instead of originalIndex
                  let questionHTML = `
                  <div class="card bg-base-200 shadow-lg question_area" data-index="${q.originalIndex}" data-display-index="${q.displayIndex}" data-key="${encodedAnswer}">
                      <div class="card-body">
                          <h3 class="card-title text-base-content font-semibold mb-4">${q.displayIndex + 1}. ${q.question}</h3>
                          <div class="space-y-2">`;
      
                  for (let key in q.choice) {
                      let isChecked = savedAnswersData[q.originalIndex] === key ? 'checked' : '';
                      questionHTML += `
                      <label class="cursor-pointer label justify-start space-x-3 hover:bg-base-300 rounded-lg p-2 transition-colors">
                          <input type="radio" name="radio-${q.originalIndex}" value="${key}" class="radio radio-primary" ${isChecked} />
                          <span class="label-text text-base-content">
                              <span class="font-semibold text-primary">${key}:</span> ${q.choice[key]}
                          </span>
                      </label>`;
                  }
      
                  questionHTML += `
                          </div>
                      </div>
                  </div>`;
                  
                  container.append(questionHTML);
              }
              
              currentIndex = endIndex;
              updateProgress();
              $("#loading_indicator").hide();
              
              // Auto-load next batch when user scrolls near bottom
              if (currentIndex < processedQuestions.length) {
                  checkScrollPosition();
              }
              
          }, 100); // Small delay for smooth experience
          
          return true;
      }
      
      // 📊 Update progress bar and text
      function updateProgress() {
          let percentage = (currentIndex / processedQuestions.length) * 100;
          $("#progress_fill").css('width', percentage + '%');
          $("#progress_text").text(`Loaded: ${currentIndex} / ${processedQuestions.length} questions`);
          
          // 🚫 Hide progress bar when all questions are loaded
          if (currentIndex >= processedQuestions.length) {
              $(".w-full.bg-base-300").hide();
              $("#progress_text").hide();
          }
      }
      
      // 👀 Check scroll position for auto-loading
      function checkScrollPosition() {
          $(window).on('scroll', function() {
              if ($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
                  if (currentIndex < processedQuestions.length) {
                      $(window).off('scroll'); // Prevent multiple triggers
                      loadNextBatch();
                  }
              }
          });
      }
      
      // 🚀 Initialize Quiz System
      async function initializeQuiz() {
          // Show loading indicator
          let loadingModal = $(`
              <dialog id="init_loading_modal" class="modal modal-open">
                <div class="modal-box bg-base-200 text-base-content flex items-center justify-center">
                  <div class="text-center">
                    <div class="loading loading-spinner loading-lg text-primary mb-4"></div>
                    <p class="text-lg font-semibold">🔄 Loading Quiz Questions...</p>
                  </div>
                </div>
              </dialog>
          `);
          $("body").append(loadingModal);
          
          // Load questions from JSON
          const loadSuccess = await loadQuestionsFromJSON();
          
          // Remove loading modal
          $("#init_loading_modal").remove();
          
          if (!loadSuccess) {
              return; // Error modal already shown in loadQuestionsFromJSON
          }
          
          // Validate questions structure
          if (!questions || questions.length === 0) {
              showErrorModal('No questions found in the JSON file.');
              return;
          }
          
          // Validate question format
          const invalidQuestions = questions.filter(q => 
              !q.question || !q.answer || !q.random_answer || !Array.isArray(q.random_answer)
          );
          
          if (invalidQuestions.length > 0) {
              showErrorModal(`Found ${invalidQuestions.length} questions with invalid format. Please check your JSON structure.`);
              return;
          }
          
          console.log(`✅ Quiz initialized with ${questions.length} valid questions`);
          
          // 🔄 Try to restore previous questions order, or shuffle if none exists
          if (!restoreQuestionsOrder()) {
              // 🎲 Generate a consistent seed for this quiz session
              const seed = Math.floor(Math.random() * 1000000);
              
              // Store original indices before shuffling
              const questionsWithIndices = questions.map((q, index) => ({
                  ...q,
                  originalIndex: index
              }));
              
              // Shuffle questions array using seeded shuffle
              const shuffledQuestions = seededShuffle(questionsWithIndices, seed);
              
              // Process questions in the new shuffled order with consistent choice shuffling
              // 🔢 NEW: Assign sequential display indices after shuffling
              processedQuestions = shuffledQuestions.map((q, displayIndex) => 
                  prepareQuestion({...q}, q.originalIndex, displayIndex, seed)
              );
              
              // Save the new order with seed
              saveQuestionsOrder(seed);
          }
          
          // 🚀 Load first batch immediately
          loadNextBatch();
          
          // ⏰ Start the timer
          startTimer();
      }
      
      function scoreReview(score, totalItems) {
          const percentage = (score / totalItems) * 100;
          let message = "";
      
          if (percentage > 90) {
              message = `${percentage.toFixed(2)}% – Outstanding performance. You have exceeded expectations.`;
          } else if (percentage > 80) {
              message = `${percentage.toFixed(2)}% – Excellent work. You have confidently passed. (Minimum required: 80%)`;
          } else if (percentage >= 75) {
              message = `${percentage.toFixed(2)}% – You have passed with a good margin. (Minimum required: 75%)`;
          } else if (percentage >= 60) {
              message = `${percentage.toFixed(2)}% – You have passed. (Minimum required: 60%)`;
          } else if (percentage >= 50) {
              message = `${percentage.toFixed(2)}% – You have barely passed. (Minimum required: 50%)`;
          } else {
              message = `${percentage.toFixed(2)}% – You did not pass. You need at least 50% to meet the minimum requirement.`;
          }
      
          return message;
      }
      
      $(document).ready(function() {
          // 🚀 Initialize the quiz system
          initializeQuiz();
      
          // 💾 AUTOSAVE EVENT LISTENER - Save answers when radio buttons change
          $(document).on('change', 'input[type="radio"]', function() {
              let questionArea = $(this).closest('.question_area');
              let questionIndex = questionArea.data('index');
              let selectedValue = $(this).val();
              
              // Save to localStorage
              saveAnswer(questionIndex, selectedValue);
          });
      
          $(".check_answer").on("click", function () {
              console.clear();
      
              let correct = 0;
              let incorrect = 0;
              let unansweredIndexes = [];
              let wrongAnswers = [];
      
              $(".question_area").each(function (i) {
                  let questionIndex = $(this).data('index');
                  let displayIndex = $(this).data('display-index'); // NEW: Get display index
                  let correctAnswer = processedQuestions.find(q => q.originalIndex === questionIndex).answer;
                  let selected = $(this).find("input[type='radio']:checked").val();
                  let questionText = $(this).find(".card-title").text().replace(/^\d+\.\s*/, '');
                  let correctText = $(this).find(`input[value="${correctAnswer}"]`).closest('label').find('.label-text').text().trim();
      
                  if (!selected) {
                      unansweredIndexes.push(displayIndex + 1); // NEW: Use display index for user-friendly numbering
                  } else if (selected === correctAnswer) {
                      correct++;
                  } else {
                      incorrect++;
                      let selectedText = $(this).find(`input[value="${selected}"]`).closest('label').find('.label-text').text().trim();
                      let questionData = processedQuestions.find(q => q.originalIndex === questionIndex);
                      wrongAnswers.push({
                          question: questionText,
                          correct: correctText?.split(":")[1]?.trim(),
                          why: questionData.why ? questionData.why[Math.floor(Math.random() * questionData.why.length)] : "No explanation available.",
                          answer_selected: selectedText?.split(":")[1]?.trim()
                      });
                  }
              });
      
              // ❗ Show warning modal if naay wala na-answeran
              if (unansweredIndexes.length > 0) {
                  let warningModal = $(`
                      <dialog id="unanswered_modal" class="modal modal-open">
                        <div class="modal-box bg-warning text-warning-content">
                          <h3 class="font-bold text-lg">⚠️ Unanswered Questions</h3>
                          <p class="py-2">😅 There's an unanswered item: [${unansweredIndexes.join(", ")}]</p>
                          <div class="modal-action">
                            <button class="btn close-warning">Got it</button>
                          </div>
                        </div>
                      </dialog>
                  `);
                  $("body").append(warningModal);
                  $(document).on("click", ".close-warning", function () {
                      document.getElementById('unanswered_modal').close();
                      $("#unanswered_modal").remove();
                  });
                  return;
              }
      
              // 🗑️ Clear saved answers after successful submission
              clearSavedAnswers();
              stopTimer();
      
              let totalScore = correct;
              let timeTaken = getElapsedTime();
      
              let hours = Math.floor(timeTaken / 3600);
              let minutes = Math.floor((timeTaken % 3600) / 60);
              let seconds = timeTaken % 60;
              let totalItems_ = correct + incorrect
      
              // ✅ Summary Modal
              let summaryModal = $(`
                  <dialog id="summary_modal" class="modal modal-open">
                    <div class="modal-box bg-base-200 text-base-content max-h-[80vh] relative">
                        <button id="gobackmenu" class="absolute top-[1%] right-[1%] bg-base-300 p-[6px] cursor-pointer rounded-full">
                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                            </svg>
                        </button>
                      <h3 class="font-bold text-lg mb-2">📊 Exam Summary</h3>
                      <p class="mb-4">
                        ✅ Correct: ${correct}<br>
                        ❌ Incorrect: ${incorrect}<br>
                        ⏱️ Time Taken: ${hours}h ${minutes}m ${seconds}s
                      </p><br>
                      <p> 
                         <b>${scoreReview(correct, totalItems_)}</b> 
                      </p>
                      <div class="modal-action">
                        ${wrongAnswers.length > 0 ? '<button class="btn btn-warning btn-xs review-mistakes">📚 Review Mistakes</button>' : ''}
                        <button class="btn btn-primary btn-xs review-again">🔁 Retake</button>
                      </div>
                    </div>
                  </dialog>
              `);
      
              $("body").append(summaryModal);
              document.getElementById('summary_modal').showModal();
      
              $(".review-again").on("click", function () {
                  // 🗑️ Clear saved data before reload
                  clearSavedAnswers();
                  stopTimer();
                  location.reload();
              });
      
              // ❌ Mistakes Modal
              if (wrongAnswers.length > 0) {
                  let wrongModal = $(`
                      <dialog id="wrong_modal" class="modal relative">
                        <div class="modal-box bg-base-200 text-base-content max-h-[80vh] overflow-y-auto">
                          <h3 class="font-bold text-lg mb-2">❌ Mistake Review</h3>
                          <div id="wrongCollapseContainer" class="space-y-3"></div>
                          <div class="modal-action">
                            <button class="btn close-wrong absolute top-0 right-0">❌ Close</button>
                          </div>
                        </div>
                      </dialog>
                  `);
                  $("body").append(wrongModal);
      
                  $.each(wrongAnswers, function (i, item) {
                      let collapse = $(`
                          <div class="collapse collapse-arrow bg-base-100 border border-base-300">
                              <input type="checkbox" />
                              <div class="collapse-title font-medium text-sm">
                                  ${item.question}
                              </div>
                              <div class="collapse-content text-sm space-y-2 pt-[10px]">
                                  <p><span class="font-semibold">✅ Correct Answer:</span><br><b class="text-secondary">${item.correct}</b></p>
                                  <p><span class="font-semibold">❌ Your Answer:</span><br><b class="text-error">${item.answer_selected}</b></p> <br>
                                  <div class="mt-[30px] card shadow border-dashed border p-[10px] bg-base-200"> 
                                    <p><span class="font-semibold">💡 Explanation:</span><br>${item.why}</p>  
                                  </div>
                              </div>
                          </div>
                      `);
                      $("#wrongCollapseContainer").append(collapse);
                  });
      
                  let mistakesAlreadyReviewed = false;
      
                  $(".review-mistakes").on("click", function () {
                      if (mistakesAlreadyReviewed) {
                          document.getElementById("wrong_modal").showModal();
                          return;
                      }
      
                      mistakesAlreadyReviewed = true; // 🔒 Set flag so it only runs once
      
                      let loadingTexts = [
                          "⏳ Loading...",
                          "📊 Analyzing Answers...",
                          "🤖 Generating Answer using AI...",
                          "⏱️ This may take a few moments...",
                          "🔍 Reviewing your input...",
                          "🧠 Thinking deeply...",
                          "📡 Connecting to the database...",
                          "📝 Preparing the best response...",
                          "🚀 Optimizing your answer...",
                          "💡 Almost done! Please wait..."
                      ];
      
                      let currentIndex = 0;
      
                      let loadingModal = $(`
                          <dialog id="loading_modal" class="modal">
                            <div class="modal-box bg-base-200 text-base-content flex items-center justify-center h-40 text-center">
                              <p id="loadingText" class="text-lg font-semibold">${loadingTexts[0]}</p>
                            </div>
                          </dialog>
                      `);
      
                      $("body").append(loadingModal);
                      const dialogEl = document.getElementById("loading_modal");
                      if (dialogEl) dialogEl.showModal();
      
                      let interval = setInterval(() => {
                          currentIndex = (currentIndex + 1) % loadingTexts.length;
                          $("#loadingText").text(loadingTexts[currentIndex]);
                      }, 1000);
      
                      setTimeout(() => {
                          clearInterval(interval);
                          dialogEl.close();
                          $("#loading_modal").remove();
      
                          document.getElementById("wrong_modal").showModal();
                      }, 3500);
                  });
      
                  $(document).on("click", ".close-wrong", function () {
                      document.getElementById('wrong_modal').close();
                  });
              }
          });

      });
    }





    window.addEventListener('DOMContentLoaded', function () {
        function handleScroll() {
            const btn = document.getElementById('backToTop');
            if (window.scrollY > 200) {
                btn.classList.remove('opacity-0');
                btn.classList.add('opacity-100');
            } else {
                btn.classList.remove('opacity-100');
                btn.classList.add('opacity-0');
            }
        }

    // Passive scroll listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Add button
    $('body').append(`
        <button id="backToTop" class="btn btn-circle btn-primary fixed bottom-4 right-4 opacity-0 transition-opacity" style="z-index: 999;">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
            </svg>
        </button>
    `);

    // Smooth scroll on click
    $(document).on('click', '#backToTop', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});