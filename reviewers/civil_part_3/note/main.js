$(document).ready(function() {

    // Your JSON data
    const jsonData = {
      "title": "WORK, MIXTURE, PROBABILITY",
      "what": "This comprehensive topic covers three distinct but often interconnected areas of quantitative reasoning: Work Problems, Mixture Problems, and Probability. Mastering these concepts is crucial for various fields, including mathematics, science, engineering, and everyday problem-solving. This guide will provide a foundational understanding of each, along with practical examples and step-by-step tutorials.",
      "tutorial": "<h3>Introduction to Quantitative Reasoning</h3><p>Quantitative reasoning involves the ability to understand and use numerical data and mathematical concepts to solve problems. Work, Mixture, and Probability problems are common types that test this skill.</p>",
      "sections": [
        {
          "title": "Work Problems",
          "what": "Work problems involve scenarios where individuals or machines collaborate to complete a task. The core idea is to determine the rate at which work is done and then use that rate to calculate the total time required or the amount of work completed.",
          "tutorial": "<h4>Understanding Work Rates</h4><p>The fundamental concept in work problems is the 'work rate'. If a person can complete a job in 't' hours, their work rate is 1/t of the job per hour.</p><p><b>Example:</b> If John can paint a fence in 3 hours, his rate is 1/3 fence per hour.</p>",
          "steps": "<ol><li><b>Identify the individual work rates:</b> For each person or entity, determine the fraction of the job they can complete in a unit of time (e.g., 1 hour, 1 day).</li><li><b>Combine the work rates:</b> If they work together, add their individual work rates.</li><li><b>Calculate the combined time:</b> The total time taken to complete the job together is the reciprocal of the combined work rate.</li></ol>",
          "sections": [
            {
              "title": "Two Individuals Working Together",
              "what": "This subtopic focuses on problems where two people or entities work together to complete a single task. The key is to sum their individual rates.",
              "tutorial": "<h5>Scenario: John and Mary painting a house</h5><p>John can paint a house in 6 hours. Mary can paint the same house in 4 hours. How long will it take them to paint the house together?</p><p><b>John's Rate:</b> 1/6 house/hour<br><b>Mary's Rate:</b> 1/4 house/hour</p><p><b>Combined Rate:</b> 1/6 + 1/4 = 2/12 + 3/12 = 5/12 house/hour</p><p><b>Time Together:</b> 1 / (5/12) = 12/5 = 2.4 hours</p>",
              "steps": "<ol><li><b>Find the rate of the first person:</b> 1/Time1</li><li><b>Find the rate of the second person:</b> 1/Time2</li><li><b>Add their rates to get the combined rate:</b> 1/Time1 + 1/Time2</li><li><b>Take the reciprocal of the combined rate to find the total time:</b> 1 / (Combined Rate)</li></ol>",
              "sections": []
            },
            {
              "title": "Work with Rest or Breaks",
              "what": "These problems introduce scenarios where individuals take breaks or work for only a portion of the total time. You need to account for the time they are not working.",
              "tutorial": "<h5>Scenario: Pipe filling a tank with a leak</h5><p>A pipe can fill a tank in 10 hours. A leak can empty the tank in 15 hours. If both are open, how long will it take to fill the tank?</p><p><b>Pipe's filling rate:</b> 1/10 tank/hour<br><b>Leak's emptying rate:</b> -1/15 tank/hour (negative because it's removing water)</p><p><b>Net Rate:</b> 1/10 - 1/15 = 3/30 - 2/30 = 1/30 tank/hour</p><p><b>Time to fill:</b> 1 / (1/30) = 30 hours</p>",
              "steps": "<ol><li><b>Determine the rate of each component:</b> Positive for work done, negative for work undone (e.g., draining).</li><li><b>Sum the rates, paying attention to signs.</b></li><li><b>Calculate the total time based on the net rate.</b></li></ol>",
              "sections": []
            }
          ]
        },
        {
          "title": "Mixture Problems",
          "what": "Mixture problems involve combining two or more substances with different concentrations to form a new mixture with a desired concentration. These problems often deal with percentages or ratios.",
          "tutorial": "<h4>Setting up Mixture Equations</h4><p>The key to mixture problems is understanding that the total amount of a specific component (e.g., acid, salt) in the final mixture is the sum of the amounts of that component from each original substance.</p><p><b>Formula:</b> (Amount of Substance 1 × Concentration 1) + (Amount of Substance 2 × Concentration 2) = (Total Amount of Mixture × Desired Concentration)</p>",
          "steps": "<ol><li><b>Identify the unknown quantity:</b> This is usually the amount of one of the substances or the final concentration.</li><li><b>Set up an equation:</b> Create an equation that represents the total amount of the 'active ingredient' (e.g., acid, alcohol) in the mixture.</li><li><b>Solve the equation:</b> Use algebraic techniques to find the value of the unknown.</li></ol>",
          "sections": [
            {
              "title": "Combining Solutions of Different Concentrations",
              "what": "This covers the most common type of mixture problem, where two solutions with different percentages of a component are mixed.",
              "tutorial": "<h5>Scenario: Mixing acid solutions</h5><p>How much of a 20% acid solution must be mixed with 10 liters of a 50% acid solution to get a 30% acid solution?</p><p>Let 'x' be the amount (in liters) of the 20% acid solution.</p><p><b>Equation:</b> (x * 0.20) + (10 * 0.50) = (x + 10) * 0.30</p><p>0.20x + 5 = 0.30x + 3</p><p>2 = 0.10x</p><p>x = 20 liters</p>",
              "steps": "<ol><li><b>Define variables</b> for the unknown quantities.</li><li><b>Write an equation</b> based on the total amount of the active ingredient.</li><li><b>Solve the equation</b> for the unknown variable.</li></ol>",
              "sections": []
            },
            {
              "title": "Adding Pure Substances or Water",
              "what": "These problems involve adding a pure substance (100% concentration) or pure water (0% concentration) to a mixture to change its concentration.",
              "tutorial": "<h5>Scenario: Adding water to juice concentrate</h5><p>A 20-liter solution is 70% juice concentrate. How much water should be added to make it a 50% juice concentrate solution?</p><p>Let 'w' be the amount of water added.</p><p><b>Initial amount of juice concentrate:</b> 20 * 0.70 = 14 liters</p><p><b>New total volume:</b> 20 + w</p><p><b>New amount of juice concentrate:</b> 14 liters (since only water is added)</p><p><b>Equation:</b> 14 = (20 + w) * 0.50</p><p>14 = 10 + 0.50w</p><p>4 = 0.50w</p><p>w = 8 liters</p>",
              "steps": "<ol><li><b>Calculate the initial amount of the active ingredient.</b></li><li><b>Set up the equation</b> where the amount of active ingredient remains constant (if adding water) or changes to 100% (if adding pure substance).</li><li><b>Solve for the unknown.</b></li></ol>",
              "sections": []
            }
          ]
        },
        {
          "title": "Probability",
          "what": "Probability is the measure of the likelihood that an event will occur. It is expressed as a number between 0 and 1, where 0 indicates impossibility and 1 indicates certainty.",
          "tutorial": "<h4>Basic Probability Formula</h4><p>The probability of an event (P(Event)) is calculated as:</p><p>P(Event) = (Number of favorable outcomes) / (Total number of possible outcomes)</p><p><b>Example:</b> The probability of rolling a 3 on a standard six-sided die is 1/6, because there is one favorable outcome (rolling a 3) and six possible outcomes (1, 2, 3, 4, 5, 6).</p>",
          "steps": "<ol><li><b>Identify the event:</b> Clearly define what you want to find the probability of.</li><li><b>Determine the total number of possible outcomes:</b> List all possible results of the experiment.</li><li><b>Determine the number of favorable outcomes:</b> Count the number of outcomes that satisfy the event.</li><li><b>Calculate the probability:</b> Divide the number of favorable outcomes by the total number of possible outcomes.</li></ol>",
          "sections": [
            {
              "title": "Basic Probability and Sample Space",
              "what": "This covers the fundamental concepts of probability, including sample space (all possible outcomes) and events (subsets of the sample space).",
              "tutorial": "<h5>Scenario: Drawing a card from a deck</h5><p>What is the probability of drawing a red card from a standard 52-card deck?</p><p><b>Total possible outcomes:</b> 52 (all cards in the deck)</p><p><b>Favorable outcomes:</b> 26 (there are 26 red cards - 13 hearts and 13 diamonds)</p><p><b>Probability:</b> 26/52 = 1/2</p>",
              "steps": "<ol><li><b>List all possible outcomes</b> to define the sample space.</li><li><b>Identify the outcomes that satisfy the event.</b></li><li><b>Apply the basic probability formula.</b></li></ol>",
              "sections": []
            },
            {
              "title": "Independent and Dependent Events",
              "what": "<b>Independent events</b> are those where the outcome of one event does not affect the outcome of another. <b>Dependent events</b> are those where the outcome of one event influences the outcome of another.",
              "tutorial": "<h5>Independent Event Example: Rolling two dice</h5><p>What is the probability of rolling a 4 on the first die AND a 6 on the second die?</p><p>P(4 on first die) = 1/6<br>P(6 on second die) = 1/6</p><p>P(4 AND 6) = P(4) * P(6) = (1/6) * (1/6) = 1/36</p><br><h5>Dependent Event Example: Drawing cards without replacement</h5><p>What is the probability of drawing a King, then another King, without replacement?</p><p>P(First King) = 4/52</p><p>After drawing one King, there are 3 Kings left and 51 total cards.</p><p>P(Second King | First King) = 3/51</p><p>P(King AND King) = (4/52) * (3/51) = 12/2652 = 1/221</p>",
              "steps": "<ol><li><b>Determine if the events are independent or dependent.</b></li><li><b>For independent events:</b> Multiply their individual probabilities.</li><li><b>For dependent events:</b> Calculate the probability of the first event, then the conditional probability of the second event given the first, and multiply them.</li></ol>",
              "sections": []
            },
            {
              "title": "Mutually Exclusive and Non-Mutually Exclusive Events",
              "what": "<b>Mutually exclusive events</b> cannot happen at the same time (e.g., rolling a 1 and a 2 on a single die roll). <b>Non-mutually exclusive events</b> can happen at the same time (e.g., drawing a red card and a face card).",
              "tutorial": "<h5>Mutually Exclusive Example: Rolling an even number OR a 1 on a die</h5><p>P(Even) = 3/6 = 1/2 (2, 4, 6)<br>P(1) = 1/6</p><p>Since rolling an even number and rolling a 1 are mutually exclusive:</p><p>P(Even OR 1) = P(Even) + P(1) = 1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3</p><br><h5>Non-Mutually Exclusive Example: Drawing a red card OR a King</h5><p>P(Red) = 26/52<br>P(King) = 4/52</p><p>There are 2 Kings that are also red (King of Hearts, King of Diamonds). So, P(Red AND King) = 2/52</p><p>P(Red OR King) = P(Red) + P(King) - P(Red AND King)</p><p>P(Red OR King) = 26/52 + 4/52 - 2/52 = 28/52 = 7/13</p>",
              "steps": "<ol><li><b>Determine if the events are mutually exclusive or not.</b></li><li><b>For mutually exclusive events:</b> Add their individual probabilities.</li><li><b>For non-mutually exclusive events:</b> Add their individual probabilities and then subtract the probability of both events occurring simultaneously.</li></ol>",
              "sections": []
            }
          ]
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
