//модули
// import PropTypes from 'prop-types';

//стили
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <ul className={styles.reviewsList}>
      {reviews.map(review => {
        const { content, author, id } = review;
        return (
          <li className={styles.reviewItem} key={id}>
            <h2 className={styles.authorName}>Author: {author}</h2>
            <p className={styles.reviewContent}>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
