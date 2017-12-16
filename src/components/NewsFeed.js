import React from 'react';

const NewsItem = ({title}) => (<li>{title}</li>)

const NewsFeed = ({items}) => (
  <section>
    <ul>{items.map(item => <NewsItem key={item.title} {...item}/>)}</ul>
  </section>)

export default NewsFeed