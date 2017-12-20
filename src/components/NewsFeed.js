import React from 'react';
import gql from "graphql-tag";
import './news.css'

const NewsItem = ({title, publishedAt}) => (
  <article className='news-item'>
    <img className='logo' src='/images/dummy.jpg'/>
    <div>
      <span className="title">{title}</span>
      <span className='published'>{publishedAt}</span>
    </div>
  </article>)

const NewsFeed = ({items, className}) => (
  <section className={className}>
    <ul>{items.map(item => <NewsItem key={item.title} {...item}/>)}</ul>
  </section>)

NewsFeed.fragments = {
  news: gql`
      fragment NewsFeed on Stock {
          relatedNews {
              title
              publishedAt
          }
      },
  `
}
export default NewsFeed