function makesBookmarksArray() {
    return [
        {
            id: 1,
            title: 'google',
            url: 'https://www.google.com/',
            description: 'search engine',
            rating: 4
        },
        {
            id: 2,
            title: 'yahoo',
            url: 'https://www.yahoo.com/',
            description: 'yahoo engine',
            rating: 4
        },
        {
            id: 3,
            title: 'testing 3',
            url: 'https://www.google.com/',
            description: 'for testing only',
            rating: 3
        },
        {
            id: 4,
            title: 'testing 4',
            url: 'https://www.google.com/',
            description: 'for testing only',
            rating:4
        },
    ];
}

function makeMaliciousBookmark() {
    const maliciousBookmark = {
      id: 911,
      title: 'Naughty naughty very naughty <script>alert("xss");</script>',
      url: 'https://www.google.com/',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
      rating: 1,
    }
    const expectedBookmark = {
      ...maliciousBookmark,
      title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      
      description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }
    return {
      maliciousBookmark,
      expectedBookmark,
    }
  }

module.exports = {
    makesBookmarksArray,
    makeMaliciousBookmark
};