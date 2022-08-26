import { Link } from 'react-router-dom';
import styles from './Post.module.scss';

const data = {
  breadcrumbs: [
    { href: '/', name: 'Домой' },
    { href: '/blog', name: 'Все посты' },
  ],
  img: 'https://images.unsplash.com/photo-1661501750289-b35e5dc3500b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  title: 'Was ist Lorem Ipsum?',
  date: '26/08/2022',
  text: '<p>Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von "Letraset", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie "Aldus PageMaker" - ebenfalls mit Lorem Ipsum.</p> <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>  <div class="quote"><h3>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h3> <p>"Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль.."</p> </div> <img class="img" src="https://images.unsplash.com/photo-1661347332552-3eb71bb84d01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>',
};

function Post() {
  const { breadcrumbs, img, title, date, text } = data;
  return (
    <div className={styles.container}>
      <div
        className={styles.background}
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        {breadcrumbs?.length > 0 && (
          <div>
            {breadcrumbs.map((item, index) => {
              return <Link to={item.href}>{item.name}</Link>;
            })}
          </div>
        )}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.date}>{date}</p>
      </div>
      <div
        className={styles.textContainer}
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </div>
  );
}

export default Post;
