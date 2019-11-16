ArticlesService.insertArticle(
  req.app.get('db'),
  newArticle
)
  .then(article => {
    res
      .status(201)
      .location(req.originalUrl + `/${article.id}`)
      .json(serializeArticle(article));
  });