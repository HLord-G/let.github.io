// main.js

$(document).ready(function() {

    // Your JSON data
    const jsonData = {
        "title": "NUMBER SERIES",
        "what": "A number series is a sequence of numbers that follows a specific pattern or rule. The goal is often to identify this pattern to find the next number in the sequence or a missing number. <br><br><i>Please note: The detailed explanations, tutorials, and step-by-step guides provided below for 'NUMBER SERIES' and its subtopics are based on general mathematical knowledge and are not explicitly found in the provided source documents, which primarily contain number series problems and their answers. You may want to independently verify this information.</i>",
        "tutorial": "<h3>Introduction to Number Series</h3>&lt;p&gt;Number series questions evaluate your ability to identify patterns and relationships between numbers. These patterns can be based on arithmetic operations, geometric progressions, or more complex rules.&lt;/p&gt;&lt;p&gt;Let's consider a simple example:&lt;/p&gt;&lt;p&gt;&lt;b&gt;2, 4, 6, 8, ?&lt;/b&gt;&lt;/p&gt;&lt;p&gt;To solve this, we observe that each number is 2 greater than the previous one. This is an arithmetic progression. Therefore, the next number is 10.&lt;/p&gt;&lt;p&gt;Understanding common types of series is key to solving these problems.&lt;/p&gt;",
        "steps": "&lt;ol&gt;&lt;li&gt;&lt;b&gt;Observe the sequence:&lt;/b&gt; Look at the numbers provided and try to find a clear progression or change between them.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Calculate differences:&lt;/b&gt; Find the difference between consecutive terms. If the differences are constant, it's an arithmetic series. If the differences follow a pattern, it could be a higher-order difference series.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Check ratios:&lt;/b&gt; If differences don't work, try dividing consecutive terms. If the ratios are constant, it's a geometric series.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Look for squares or cubes:&lt;/b&gt; See if numbers are perfect squares or cubes, or related to them.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Consider combinations:&lt;/b&gt; Sometimes, a series might combine two or more simple patterns.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Test your hypothesis:&lt;/b&gt; Once you think you've found a rule, apply it to the given numbers to ensure it holds true for all of them.&lt;/li&gt;&lt;/ol&gt;",
        "sections": [
            {
                "title": "Arithmetic Series",
                "what": "An arithmetic series is a sequence of numbers where the difference between consecutive terms is constant. This constant difference is called the common difference (d).",
                "tutorial": "&lt;h3&gt;Understanding Arithmetic Series&lt;/h3&gt;&lt;p&gt;In an arithmetic series, each term after the first is obtained by adding a fixed number (the common difference) to the preceding term.&lt;/p&gt;&lt;p&gt;Example: &lt;b&gt;5, 10, 15, 20, ?&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Here, the common difference is 5 (10-5=5, 15-10=5, etc.). So the next number is 20 + 5 = 25.&lt;/p&gt;&lt;p&gt;The formula for the nth term is: a&lt;sub&gt;n&lt;/sub&gt; = a&lt;sub&gt;1&lt;/sub&gt; + (n-1)d, where a&lt;sub&gt;1&lt;/sub&gt; is the first term and n is the term number.&lt;/p&gt;",
                "steps": "&lt;ol&gt;&lt;li&gt;&lt;b&gt;Identify two consecutive terms:&lt;/b&gt; Pick any two adjacent numbers in the series.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Calculate the difference:&lt;/b&gt; Subtract the first of these two terms from the second (e.g., Term2 - Term1).&lt;/li&gt;&lt;li&gt;&lt;b&gt;Verify common difference:&lt;/b&gt; Check if this difference is consistent across other pairs of consecutive terms.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Apply the difference:&lt;/b&gt; Once verified, add the common difference to the last given term to find the next number.&lt;/li&gt;&lt;/ol&gt;",
                "sections": []
            },
            {
                "title": "Geometric Series",
                "what": "A geometric series is a sequence of numbers where each term after the first is found by multiplying the previous one by a fixed, non-zero number called the common ratio (r).",
                "tutorial": "&lt;h3&gt;Understanding Geometric Series&lt;/h3&gt;&lt;p&gt;In a geometric series, numbers grow or shrink by a constant multiplicative factor.&lt;/p&gt;&lt;p&gt;Example: &lt;b&gt;3, 9, 27, 81, ?&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Here, the common ratio is 3 (9/3=3, 27/9=3, etc.). So the next number is 81 * 3 = 243.&lt;/p&gt;&lt;p&gt;The formula for the nth term is: a&lt;sub&gt;n&lt;/sub&gt; = a&lt;sub&gt;1&lt;/sub&gt; * r&lt;sup&gt;(n-1)&lt;/sup&gt;.&lt;/p&gt;",
                "steps": "&lt;ol&gt;&lt;li&gt;&lt;b&gt;Identify two consecutive terms:&lt;/b&gt; Pick any two adjacent numbers in the series.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Calculate the ratio:&lt;/b&gt; Divide the second of these two terms by the first (e.g., Term2 / Term1).&lt;/li&gt;&lt;li&gt;&lt;b&gt;Verify common ratio:&lt;/b&gt; Check if this ratio is consistent across other pairs of consecutive terms.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Apply the ratio:&lt;/b&gt; Once verified, multiply the last given term by the common ratio to find the next number.&lt;/li&gt;&lt;/ol&gt;",
                "sections": []
            },
            {
                "title": "Fibonacci Series",
                "what": "The Fibonacci series is a sequence in which each number is the sum of the two preceding ones, usually starting with 0 and 1 (or 1 and 1).",
                "tutorial": "&lt;h3&gt;Understanding Fibonacci Series&lt;/h3&gt;&lt;p&gt;This is a famous sequence found in nature and mathematics.&lt;/p&gt;&lt;p&gt;Example: &lt;b&gt;0, 1, 1, 2, 3, 5, 8, ?&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Starting with 0 and 1:&lt;br&gt;0 + 1 = 1&lt;br&gt;1 + 1 = 2&lt;br&gt;1 + 2 = 3&lt;br&gt;2 + 3 = 5&lt;br&gt;3 + 5 = 8&lt;br&gt;So the next number is 5 + 8 = 13.&lt;/p&gt;",
                "steps": "&lt;ol&gt;&lt;li&gt;&lt;b&gt;Observe the pattern:&lt;/b&gt; See if the numbers are increasing rapidly and if each number might be a sum of previous ones.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Test the sum rule:&lt;/b&gt; Add the first two terms to see if they equal the third. Then add the second and third to see if they equal the fourth, and so on.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Apply the rule:&lt;/b&gt; If the pattern holds, sum the last two given terms to find the next number.&lt;/li&gt;&lt;/ol&gt;",
                "sections": []
            },
            {
                "title": "Square and Cube Series",
                "what": "These series involve numbers that are perfect squares (n&lt;sup&gt;2&lt;/sup&gt;) or perfect cubes (n&lt;sup&gt;3&lt;/sup&gt;), or numbers that are derived by adding/subtracting a constant from squares/cubes.",
                "tutorial": "&lt;h3&gt;Understanding Square and Cube Series&lt;/h3&gt;&lt;p&gt;Knowing common squares and cubes is very helpful for these types of series.&lt;/p&gt;&lt;p&gt;Example (Square Series): &lt;b&gt;1, 4, 9, 16, ?&lt;/b&gt;&lt;/p&gt;&lt;p&gt;These are 1&lt;sup&gt;2&lt;/sup&gt;, 2&lt;sup&gt;2&lt;/sup&gt;, 3&lt;sup&gt;2&lt;/sup&gt;, 4&lt;sup&gt;2&lt;/sup&gt;. So the next number is 5&lt;sup&gt;2&lt;/sup&gt; = 25.&lt;/p&gt;&lt;p&gt;Example (Cube Series): &lt;b&gt;1, 8, 27, 64, ?&lt;/b&gt;&lt;/p&gt;&lt;p&gt;These are 1&lt;sup&gt;3&lt;/sup&gt;, 2&lt;sup&gt;3&lt;/sup&gt;, 3&lt;sup&gt;3&lt;/sup&gt;, 4&lt;sup&gt;3&lt;/sup&gt;. So the next number is 5&lt;sup&gt;3&lt;/sup&gt; = 125.&lt;/p&gt;",
                "steps": "&lt;ol&gt;&lt;li&gt;&lt;b&gt;Recognize perfect squares/cubes:&lt;/b&gt; Check if the numbers themselves are 1, 4, 9, 16, 25... or 1, 8, 27, 64, 125...&lt;/li&gt;&lt;li&gt;&lt;b&gt;Look for nearby numbers:&lt;/b&gt; If not exact, see if the numbers are consistently (n&lt;sup&gt;2&lt;/sup&gt; + X) or (n&lt;sup&gt;3&lt;/sup&gt; - Y).&lt;/li&gt;&lt;li&gt;&lt;b&gt;Identify the base sequence:&lt;/b&gt; Determine if the base numbers (1, 2, 3, 4...) are consecutive or follow another pattern.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Apply the rule:&lt;/b&gt; Use the identified rule to find the next term.&lt;/li&gt;&lt;/ol&gt;",
                "sections": []
            },
            {
                "title": "Difference Series",
                "what": "In a difference series, the pattern is found not in the numbers themselves, but in the differences between consecutive numbers. This can be a single level of differences (like arithmetic series), or multiple levels (differences of differences).",
                "tutorial": "&lt;h3&gt;Understanding Difference Series&lt;/h3&gt;&lt;p&gt;This involves finding a pattern in the 'gaps' between numbers.&lt;/p&gt;&lt;p&gt;Example: &lt;b&gt;1, 3, 7, 13, 21, ?&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Step 1: Find first differences:&lt;br&gt;3-1=2&lt;br&gt;7-3=4&lt;br&gt;13-7=6&lt;br&gt;21-13=8&lt;/p&gt;&lt;p&gt;The first differences are: &lt;b&gt;2, 4, 6, 8&lt;/b&gt;. This is an arithmetic series.&lt;/p&gt;&lt;p&gt;Step 2: The next difference in the pattern 2, 4, 6, 8 is 10.&lt;/p&gt;&lt;p&gt;Step 3: Add this difference to the last term of the original series:&lt;br&gt;21 + 10 = 31.&lt;/p&gt;&lt;p&gt;So the next number is 31.&lt;/p&gt;",
                "steps": "&lt;ol&gt;&lt;li&gt;&lt;b&gt;Calculate first-level differences:&lt;/b&gt; Subtract each term from the next one.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Look for a pattern in differences:&lt;/b&gt; If no clear pattern, calculate second-level differences (differences of the first-level differences).&lt;/li&gt;&lt;li&gt;&lt;b&gt;Continue until a pattern emerges:&lt;/b&gt; You might need to go to third or higher levels of differences.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Work backward:&lt;/b&gt; Once a pattern is found in the differences, apply it to predict the next difference, then use that to find the next term in the original series.&lt;/li&gt;&lt;/ol&gt;",
                "sections": []
            },
            {
                "title": "Alternating Series",
                "what": "An alternating series consists of two interleaved (alternating) patterns or sequences. The rule applies to alternate terms, not consecutive ones.",
                "tutorial": "&lt;h3&gt;Understanding Alternating Series&lt;/h3&gt;&lt;p&gt;In these series, you look for two separate patterns.&lt;/p&gt;&lt;p&gt;Example: &lt;b&gt;1, 5, 2, 6, 3, 7, ?&lt;/b&gt;&lt;/p&gt;&lt;p&gt;First pattern (odd positions): &lt;b&gt;1, 2, 3&lt;/b&gt; (adding 1 each time)&lt;br&gt;Second pattern (even positions): &lt;b&gt;5, 6, 7&lt;/b&gt; (adding 1 each time)&lt;/p&gt;&lt;p&gt;The next term is in an odd position, following the first pattern. The last term in that pattern was 3, so the next is 3 + 1 = 4.&lt;/p&gt;&lt;p&gt;So the series continues as: 1, 5, 2, 6, 3, 7, &lt;b&gt;4&lt;/b&gt;.&lt;/p&gt;",
                "steps": "&lt;ol&gt;&lt;li&gt;&lt;b&gt;Separate the series:&lt;/b&gt; Write out the terms in odd positions and terms in even positions as two separate sequences.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Analyze each sequence:&lt;/b&gt; Find the pattern for the odd-positioned terms and the pattern for the even-positioned terms independently.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Determine which sequence to extend:&lt;/b&gt; Based on whether the next required term is at an odd or even position, apply the corresponding pattern.&lt;/li&gt;&lt;/ol&gt;",
                "sections": []
            },
            {
                "title": "Mixed Series",
                "what": "Mixed series combine two or more types of patterns within a single sequence, but not necessarily in an alternating fashion. They might involve a combination of arithmetic, geometric, square, or other operations.",
                "tutorial": "&lt;h3&gt;Understanding Mixed Series&lt;/h3&gt;&lt;p&gt;These are often more challenging as they require identifying multiple operations or rules.&lt;/p&gt;&lt;p&gt;Example: &lt;b&gt;2, 5, 10, 17, 26, ?&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Let's look at the differences:&lt;br&gt;5-2=3&lt;br&gt;10-5=5&lt;br&gt;17-10=7&lt;br&gt;26-17=9&lt;/p&gt;&lt;p&gt;The differences are: &lt;b&gt;3, 5, 7, 9&lt;/b&gt;. This is an arithmetic series (adding 2 each time).&lt;/p&gt;&lt;p&gt;The next difference in the pattern 2, 4, 6, 8 is 11.&lt;/p&gt;&lt;p&gt;Add 11 to the last term of the original series: 26 + 11 = 37.&lt;/p&gt;&lt;p&gt;So the next number is 37. This is a form of a difference series, which can be considered mixed if the underlying pattern is not simple addition/subtraction.&lt;/p&gt;&lt;p&gt;Another example might be: &lt;b&gt;1, 2, 4, 7, 11, ?&lt;/b&gt; (differences: +1, +2, +3, +4, so next is +5 -&gt; 16)&lt;/p&gt;",
                "steps": "&lt;ol&gt;&lt;li&gt;&lt;b&gt;Try basic operations first:&lt;/b&gt; Check for simple arithmetic or geometric patterns.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Calculate differences (multiple levels):&lt;/b&gt; If simple patterns fail, find differences between consecutive terms, and then differences of those differences, and so on.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Consider squares/cubes with additions/subtractions:&lt;/b&gt; Numbers might be (n&lt;sup&gt;2&lt;/sup&gt; + constant) or (n&lt;sup&gt;3&lt;/sup&gt; - constant).&lt;/li&gt;&lt;li&gt;&lt;b&gt;Look for alternating patterns:&lt;/b&gt; See if two distinct patterns are interleaved.&lt;/li&gt;&lt;li&gt;&lt;b&gt;Look for operations across terms:&lt;/b&gt; Sometimes, terms are formed by operations involving more than just the immediate preceding term (e.g., adding two previous terms, or multiplying and then adding).&lt;/li&gt;&lt;li&gt;&lt;b&gt;Systematic trial and error:&lt;/b&gt; Be prepared to test several hypotheses for complex mixed series.&lt;/li&gt;&lt;/ol&gt;",
                "sections": []
            }
        ]
    };

    // Function to decode HTML entities properly
    function decodeHtmlEntities(text) {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = text;
        return textarea.value;
    }

    // Function to build a section
    function buildSection(sectionData) {
        let html = `
            <div class="card bg-base-200 shadow-lg mb-8 p-6 md:p-8 rounded-box">
                <h2 class="text-3xl font-bold text-primary mb-4">${sectionData.title}</h2>
                <p class="text-base-content text-md mb-4 leading-relaxed">${sectionData.what}</p>
                <h3 class="text-2xl font-semibold text-secondary mb-4">Understanding ${sectionData.title}</h3>
                <div class="text-base-content text-md mb-4 leading-relaxed">
                    ${decodeHtmlEntities(sectionData.tutorial)}
                </div>
                <div class="text-base-content text-md space-y-3 pl-4">
                    ${decodeHtmlEntities(sectionData.steps)}
                </div>
            </div>
            <div class="divider text-base-content/50 my-8"></div>
        `;
        return html;
    }

    // Main rendering function for initial content
    function renderInitialContent(data) {
        let $container = $('#content-container');
        $container.empty(); // Clear loading spinner

        let initialHtml = `
            <h1 class="text-4xl lg:text-5xl font-extrabold text-primary mb-6 text-center">${data.title}</h1>
            <p class="text-base-content text-lg mb-4 leading-relaxed">${data.what}</p>

            <div class="divider text-base-content/50 my-8"></div>

            <div class="card bg-base-200 shadow-lg mb-8 p-6 md:p-8 rounded-box">
                <h3 class="text-3xl font-bold text-secondary mb-4">Introduction to Number Series</h3>
                <div class="text-base-content text-md mb-4 leading-relaxed">
                    ${decodeHtmlEntities(data.tutorial)}
                </div>
                <h3 class="text-2xl font-semibold text-secondary mb-4">Steps to Solve Number Series Problems</h3>
                <div class="text-base-content text-md space-y-3 pl-4">
                    ${decodeHtmlEntities(data.steps)}
                </div>
            </div>

            <div class="divider text-base-content/50 my-8"></div>
        `;
        $container.append(initialHtml);

        // Append placeholders for lazy-loaded sections
        data.sections.forEach((section, index) => {
            $container.append(`<div class="lazy-load-section" id="section-${index}" data-section-index="${index}" style="min-height: 200px;">
                <div class="flex justify-center items-center h-full text-base-content/70">
                    <span class="loading loading-spinner loading-lg text-secondary"></span> Loading ${section.title}...
                </div>
            </div>`);
        });
    }

    // Intersection Observer for lazy loading sections
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionElement = $(entry.target);
                const sectionIndex = sectionElement.data('section-index');
                const sectionData = jsonData.sections[sectionIndex];

                if (sectionData) {
                    // Replace placeholder with actual content
                    sectionElement.html(buildSection(sectionData));
                    observer.unobserve(entry.target); // Stop observing once loaded
                }
            }
        });
    }, {
        rootMargin: '0px 0px 100px 0px' // Load when 100px from viewport bottom
    });

    // Initial render of the main content
    renderInitialContent(jsonData);

    // Observe each lazy-load-section placeholder
    $('.lazy-load-section').each(function() {
        observer.observe(this);
    });

});