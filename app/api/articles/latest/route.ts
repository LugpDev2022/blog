export const GET = async (req: Request) => {
  const articles = [];
  const article = {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    date: '14/dic/2023',
  };

  for (let i = 0; i < 4; i++) {
    articles.push(article);
  }

  return Response.json({ articles });
};
