// Adapted from code by Matt Walters https://www.mattwalters.net/posts/2018-03-28-hugo-and-lunr/

/**
 * Function to get the current language from the URL
 * @returns the language code
 */
function getCurrentLang() {
  const path = window.location.pathname;
  const match = path.match(/\/(fr|de|it)\//);
  return match ? match[1] : 'de';  // German by default if not found
}

/**
 * Function to get the language code from the URL
 * @param url
 * @returns the language code from the URL
 */
function extractLangFromURL(url) {
  const match = url.match(/\/(fr|de|it)\//);
  return match ? match[1] : 'de';  // German by default if not found
}

/**
 * Extracts a substring around a search term with n characters before and after.
 * @param {string} text - The input string to search in.
 * @param {string} term - The term to search for.
 * @param {number} n - The number of characters to include before and after the term.
 * @returns {string|null} - The extracted substring or null if the term is not found.
 */
function extractSurroundingText(text, term, n) {
  const sanitizedTerm = term.replace(/[*?]/g, '');
  const index = text.indexOf(sanitizedTerm);
  if (index === -1) {
    return null; // Return null if the term is not found
  }

  const start = Math.max(0, index - n);
  const end = Math.min(text.length, index + sanitizedTerm.length + n);

  return text.substring(start, end);
}

(function ($) {
  'use strict';

  $(document).ready(function () {
    const $searchInput = $('.td-search input');

    //
    // Register handler
    //

    $searchInput.on('change', (event) => {
      render($(event.target));

      // Hide keyboard on mobile browser
      $searchInput.blur();
    });

    // Prevent reloading page by enter key on sidebar search.
    $searchInput.closest('form').on('submit', () => {
      return false;
    });

    //
    // Lunr
    //

    let idx = null; // Lunr index
    const resultDetails = new Map(); // Will hold the data for the search results (titles and summaries)

    // Set up for an Ajax call to request the JSON data file that is created by Hugo's build process
    $.ajax($searchInput.data('offline-search-index-json-src')).then((data) => {
      const currentLang = getCurrentLang();
      // Filter results based on current language
      const filteredData = data.filter(doc => {
        const docLang = extractLangFromURL(doc.ref);
        return docLang === currentLang;
      });
      idx = lunr(function () {
        this.ref('ref');

        // If you added more searchable fields to the search index, list them here.
        // Here you can specify searchable fields to the search index - e.g. individual toxonomies for you project
        // With "boost" you can add weighting for specific (default weighting without boost: 1)
        this.field('title', { boost: 5 });
        this.field('categories', { boost: 3 });
        this.field('tags', { boost: 3 });
        // this.field('projects', { boost: 3 }); // example for an individual toxonomy called projects
        this.field('description', { boost: 2 });
        this.field('body');

        filteredData.forEach((doc) => {
          this.add(doc);

          resultDetails.set(doc.ref, {
            title: doc.title,
            excerpt: doc.excerpt,
            body: doc.body
          });
        });
      });

      $searchInput.trigger('change');
    });

    const render = ($targetSearchInput) => {
      //
      // Dispose existing popover
      //

      {
        const popover = bootstrap.Popover.getInstance($targetSearchInput[0]);
        if (popover !== null) {
          popover.dispose();
        }
      }

      //
      // Search
      //

      if (idx === null) {
        return;
      }

      const searchQuery = $targetSearchInput.val();
      if (searchQuery === '') {
        return;
      }

      const results = idx
        .query((q) => {
          const tokens = lunr.tokenizer(searchQuery.toLowerCase());
          tokens.forEach((token) => {
            const queryString = token.toString();
            if(queryString.includes('*')){
              q.term(queryString, {
                wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
                boost: 10,
                usePipeline: false
              });
            } else {
              q.term(queryString, {
                boost: 100,
                usePipeline: false
              });
            }
          });
        })
        .slice(0, $targetSearchInput.data('offline-search-max-results'));

      //
      // Make result html
      //

      const $html = $('<div>');

      $html.append(
        $('<div>')
          .css({
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1em',
          })
          .append(
            $('<span>').text('Search results').css({ fontWeight: 'bold' })
          )
          .append(
            $('<span>').addClass('td-offline-search-results__close-button')
          )
      );

      const $searchResultBody = $('<div>').css({
        maxHeight: `calc(100vh - ${
          $targetSearchInput.offset().top - $(window).scrollTop() + 180
        }px)`,
        overflowY: 'auto',
      });
      $html.append($searchResultBody);

      if (results.length === 0) {
        $searchResultBody.append(
          $('<p>').text(`No results found for query "${searchQuery}"`)
        );
      } else {
        results.forEach((r) => {
          const doc = resultDetails.get(r.ref);
          const href =
            $searchInput.data('offline-search-base-href') +
            r.ref.replace(/^\//, '');

          const $entry = $('<div>').addClass('mt-4');

          $entry.append(
            $('<small>').addClass('d-block text-body-secondary').text(r.ref)
          );

          $entry.append(
            $('<a>')
              .addClass('d-block')
              .css({
                fontSize: '1.2rem',
              })
              .attr('href', href)
              .text(doc.title)
          );
          if(doc.body){
            const excerpt = extractSurroundingText(doc.body, searchQuery, 100);
            if(excerpt){
              $entry.append($('<p>').text(excerpt));
            }
          }

          $searchResultBody.append($entry);
        });
      }

      $targetSearchInput.one('shown.bs.popover', () => {
        $('.td-offline-search-results__close-button').on('click', () => {
          $targetSearchInput.val('');
          $targetSearchInput.trigger('change');
        });
      });

      const popover = new bootstrap.Popover($targetSearchInput, {
        content: $html[0],
        html: true,
        customClass: 'td-offline-search-results',
        placement: 'bottom',
      });
      popover.show();
    };
  });
})(jQuery);
