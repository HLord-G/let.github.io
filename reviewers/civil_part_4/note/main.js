$(document).ready(function() {

    // Your JSON data
    const jsonData = {
      "title": "PROBLEM SOLVING RATIO",
      "what": "Problem solving involving ratios means using the mathematical relationship between two or more quantities to find unknown values or to compare different sets of quantities. It's a fundamental concept in mathematics that applies to various real-world scenarios, from cooking and finance to science and engineering.",
      "tutorial": "<h3>Understanding Ratios</h3><p>A ratio is a comparison of two or more numbers. It tells us how much of one thing there is compared to another. Ratios can be written in several ways: using a colon (e.g., 2:3), as a fraction (e.g., 2/3), or with the word 'to' (e.g., 2 to 3).</p><h3>Example: Simple Ratio Problem</h3><p>Let's say you are baking cookies, and the recipe calls for 2 cups of flour for every 1 cup of sugar. This is a ratio of 2:1 (flour to sugar).</p><h3>Solving a Proportion</h3><p>If you want to make a bigger batch of cookies and use 4 cups of flour, how much sugar do you need? You can set up a proportion: 2/1 = 4/x. By cross-multiplication, 2x = 4, so x = 2 cups of sugar.</p>",
      "sections": [
        {
          "title": "Introduction to Ratios",
          "what": "This section covers the basic definition of a ratio, different ways to express ratios, and the concept of equivalent ratios.",
          "tutorial": "<h3>What is a Ratio?</h3><p>A ratio is a way to compare two or more quantities. For example, if you have 3 red apples and 2 green apples, the ratio of red apples to green apples is 3:2.</p><h3>Ways to Write Ratios</h3><ul><li><b>Using a colon:</b> 3:2</li><li><b>As a fraction:</b> 3/2</li><li><b>Using the word 'to':</b> 3 to 2</li></ul><h3>Equivalent Ratios</h3><p>Equivalent ratios represent the same relationship between quantities. For example, 1:2 is equivalent to 2:4 because both express that one quantity is half of the other.</p>",
          "steps": "<ol><li><b>Define Ratio:</b> Understand that a ratio compares quantities.</li><li><b>Identify Quantities:</b> Determine the specific items or numbers you are comparing.</li><li><b>Choose Notation:</b> Select the most appropriate way to write the ratio (colon, fraction, or 'to').</li><li><b>Simplify (Optional):</b> If possible, simplify the ratio to its simplest form by dividing both parts by their greatest common divisor.</li></ol>",
          "sections": []
        },
        {
          "title": "Types of Ratios",
          "what": "This section delves into different classifications of ratios, such as part-to-part, part-to-whole, and rate.",
          "tutorial": "<h3>Part-to-Part Ratio</h3><p>Compares two distinct parts of a whole. Example: In a class of 15 boys and 10 girls, the ratio of boys to girls is 15:10, which simplifies to 3:2.</p><h3>Part-to-Whole Ratio</h3><p>Compares a part to the entire whole. Example: In the same class, the ratio of boys to total students is 15:25, which simplifies to 3:5.</p><h3>Rate</h3><p>A ratio that compares two quantities with different units. Example: Speed is a rate, comparing distance (miles) to time (hours), like 60 miles/hour.</p>",
          "steps": "<ol><li><b>Identify the comparison:</b> Determine if you are comparing a part to another part, a part to the whole, or two quantities with different units.</li><li><b>Formulate the Ratio:</b> Write the ratio using the appropriate notation based on its type.</li><li><b>Include Units (for Rates):</b> When dealing with rates, always remember to include the units for both quantities.</li><li><b>Simplify (if applicable):</b> Reduce the ratio to its simplest form.</li></ol>",
          "sections": []
        },
        {
          "title": "Proportions and Solving Proportions",
          "what": "This section explains what a proportion is and how to solve for unknown values in a proportion using cross-multiplication.",
          "tutorial": "<h3>What is a Proportion?</h3><p>A proportion is an equation that states that two ratios are equal. For example, 1/2 = 2/4 is a proportion.</p><h3>Solving Proportions using Cross-Multiplication</h3><p>If you have the proportion a/b = c/d, then ad = bc. This method is called cross-multiplication.</p><h3>Example: Finding an Unknown</h3><p>If 3/x = 9/15, you can cross-multiply: 3 * 15 = 9 * x, which gives 45 = 9x. Dividing both sides by 9, you get x = 5.</p>",
          "steps": "<ol><li><b>Set up the Proportion:</b> Write the two ratios as an equation, ensuring corresponding quantities are in the same relative positions.</li><li><b>Cross-Multiply:</b> Multiply the numerator of the first ratio by the denominator of the second, and the numerator of the second ratio by the denominator of the first.</li><li><b>Solve the Equation:</b> Isolate the variable to find its value.</li><li><b>Check Your Answer:</b> Substitute the found value back into the original proportion to ensure both sides are equal.</li></ol>",
          "sections": [
            {
              "title": "Direct Proportion",
              "what": "Direct proportion describes a relationship where as one quantity increases, the other quantity increases at the same rate, and vice versa.",
              "tutorial": "<h3>Understanding Direct Proportion</h3><p>If two quantities are directly proportional, their ratio is constant. For example, if you buy more apples, the total cost increases proportionally.</p><h3>Formula:</h3><p>y = kx, where k is the constant of proportionality.</p><h3>Example:</h3><p>If 2 pencils cost $1, how much do 6 pencils cost? Here, the cost is directly proportional to the number of pencils. Ratio: 1/2 = x/6. Solving for x, 2x = 6, so x = $3.</p>",
              "steps": "<ol><li><b>Identify Directly Proportional Quantities:</b> Determine if one quantity increases or decreases in direct relation to another.</li><li><b>Set up the Proportion:</b> Formulate a proportion where the ratios of corresponding quantities are equal.</li><li><b>Solve for the Unknown:</b> Use cross-multiplication or by finding the constant of proportionality to find the unknown value.</li></ol>",
              "sections": []
            },
            {
              "title": "Inverse Proportion",
              "what": "Inverse proportion describes a relationship where as one quantity increases, the other quantity decreases, and vice versa, such that their product remains constant.",
              "tutorial": "<h3>Understanding Inverse Proportion</h3><p>If two quantities are inversely proportional, their product is constant. For example, if you increase the number of workers on a job, the time it takes to complete the job decreases.</p><h3>Formula:</h3><p>xy = k, or y = k/x, where k is the constant of proportionality.</p><h3>Example:</h3><p>If 2 workers can complete a task in 6 hours, how many hours will it take 4 workers? Here, the number of workers is inversely proportional to the time. 2 * 6 = 4 * x. Solving for x, 12 = 4x, so x = 3 hours.</p>",
              "steps": "<ol><li><b>Identify Inversely Proportional Quantities:</b> Determine if an increase in one quantity leads to a decrease in another.</li><li><b>Set up the Inverse Relationship:</b> Formulate the equation where the product of the two quantities is constant.</li><li><b>Solve for the Unknown:</b> Use the inverse relationship to find the unknown value.</li></ol>",
              "sections": []
            }
          ]
        },
        {
          "title": "Ratio Word Problems",
          "what": "This section focuses on applying ratio concepts to solve real-world problems presented in word format.",
          "tutorial": "<h3>Strategy for Solving Ratio Word Problems</h3><p>Most ratio word problems involve identifying the given ratio, understanding the total or a part of the total, and then using proportions to find unknown quantities.</p><h3>Example: Simple Ratio Word Problem</h3><p>The ratio of apples to oranges in a basket is 3:5. If there are 12 apples, how many oranges are there?</p><p><b>Solution:</b> Let 'A' be apples and 'O' be oranges. We have A:O = 3:5. We are given A = 12. So, 3/5 = 12/O. Cross-multiply: 3 * O = 5 * 12. 3O = 60. O = 20 oranges.</p>",
          "steps": "<ol><li><b>Read Carefully:</b> Understand the problem and identify the quantities being compared.</li><li><b>Identify the Ratio:</b> Write down the given ratio.</li><li><b>Determine the Known and Unknown:</b> Identify which quantities are given and which need to be found.</li><li><b>Set up a Proportion:</b> Formulate an equation using the given ratio and the known/unknown quantities.</li><li><b>Solve the Proportion:</b> Use cross-multiplication or other methods to find the unknown value.</li><li><b>Check Your Answer:</b> Ensure your answer makes sense in the context of the problem.</li></ol>",
          "sections": [
            {
              "title": "Dividing a Quantity in a Given Ratio",
              "what": "This subtopic teaches how to split a total quantity into parts according to a given ratio.",
              "tutorial": "<h3>Concept:</h3><p>When you need to divide a quantity in a given ratio, first find the total number of 'parts' in the ratio. Then, determine the value of one part.</p><h3>Example:</h3><p>Divide $120 between two friends in the ratio 2:3.</p><p><b>Solution:</b> The total number of parts is 2 + 3 = 5. Value of one part = $120 / 5 = $24. Friend 1 gets 2 * $24 = $48. Friend 2 gets 3 * $24 = $72.</p>",
              "steps": "<ol><li><b>Sum the Ratio Parts:</b> Add all the numbers in the given ratio to find the total number of parts.</li><li><b>Find the Value of One Part:</b> Divide the total quantity by the sum of the ratio parts.</li><li><b>Calculate Each Share:</b> Multiply the value of one part by each number in the ratio to find the individual shares.</li><li><b>Verify Total:</b> Add up the individual shares to ensure they sum back to the original total quantity.</li></ol>",
              "sections": []
            },
            {
              "title": "Ratios with Three or More Quantities",
              "what": "This section extends ratio problems to involve more than two quantities, maintaining proportional relationships.",
              "tutorial": "<h3>Concept:</h3><p>Ratios can compare more than two quantities, such as A:B:C. The principles of proportions still apply.</p><h3>Example:</h3><p>The ratio of red, blue, and green marbles in a bag is 2:3:4. If there are 18 blue marbles, how many red and green marbles are there?</p><p><b>Solution:</b> Let the number of red, blue, and green marbles be 2x, 3x, and 4x respectively. We know 3x = 18, so x = 6. Red marbles = 2 * 6 = 12. Green marbles = 4 * 6 = 24.</p>",
              "steps": "<ol><li><b>Understand the Combined Ratio:</b> Recognize that all parts are relative to a common multiplier.</li><li><b>Identify the Known Part:</b> Find the quantity for which the actual value is provided.</li><li><b>Determine the Common Multiplier:</b> Divide the known actual value by its corresponding ratio part to find the multiplier (often represented as 'x').</li><li><b>Calculate Unknown Parts:</b> Multiply the common multiplier by each of the other ratio parts to find their actual values.</li></ol>",
              "sections": []
            }
          ]
        },
        {
          "title": "Applications of Ratios in Real Life",
          "what": "This section explores various real-world scenarios where ratios are commonly used, highlighting their practical importance.",
          "tutorial": "<h3>Cooking and Recipes</h3><p>Ratios are essential for scaling recipes up or down. If a recipe calls for 1 cup of sugar to 2 cups of flour (1:2), you can adjust the amounts proportionally to make more or less.</p><h3>Maps and Scale Drawings</h3><p>The scale on a map (e.g., 1:100,000) is a ratio representing the relationship between a distance on the map and the actual distance on the ground.</p><h3>Finance (e.g., Debt-to-Income Ratio)</h3><p>Financial ratios are used to assess financial health. A debt-to-income ratio compares your monthly debt payments to your gross monthly income.</p><h3>Science (e.g., Chemical Formulas)</h3><p>Chemical formulas use ratios to show the proportion of elements in a compound (e.g., H2O has a 2:1 ratio of hydrogen to oxygen).</p>",
          "steps": "<ol><li><b>Observe a Real-World Situation:</b> Look for situations where quantities are compared or scaled.</li><li><b>Identify the Ratio:</b> Extract the underlying ratio that governs the relationship between the quantities.</li><li><b>Apply Ratio Principles:</b> Use your understanding of ratios and proportions to solve problems or make decisions in that context.</li><li><b>Interpret Results:</b> Translate your mathematical findings back into the real-world scenario.</li></ol>",
          "sections": []
        }
      ]
    };

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

    // Start the application
    initializePage(jsonData);

});
