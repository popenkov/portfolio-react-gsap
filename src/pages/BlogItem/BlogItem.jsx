import styles from './BlogItem.module.scss';

function BlogItem() {
  return (
    <div className={styles.container}>
      <div
        className={styles.background}
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1660474220980-4727894eec1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80")',
        }}
      ></div>
      BlogItem
    </div>
  );
}

export default BlogItem;
