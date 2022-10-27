import { useState } from 'react';

import { Modal } from '../shared';

import styles from './app.module.scss';

function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const list = [
    'test1',
    'test2',
    'asd',
    'test4',
    'zxc',
    'test6',
    'test7',
    'tedszxct8',
    'teassast9',
    'teasdest9',
    'tesasdat9',
    'test9',
    'test9',
    'test9',
    'test9',
    'test9',
    'test9',
    'tasddasdest9',
    'test9',
    'tesddst9',
    'test9',
    'teassasdt9',
    'test9',
    'tasddasdest9',
    'test9',
    'tesddst9',
    'test9',
    'teassasdt9',
    'test9',
    'tasddasdest9',
    'test9',
    'tesddst9',
    'test9',
    'teassasdt9',
    'test9',
    'tasddasdest9',
    'test9',
    'tesddst9',
    'test9',
    'teassasdt9',
    'test9',
    'teasdst9',
    'tesast9',
    'test9',
    'tesasdt9',
    'teasdasdst9',
    'tesasdt9',
  ];

  return (
    <div className='App'>
      <Modal
        title='Search something'
        isOpen={isModalVisible}
        onClose={() => setModalVisible(false)}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Type something...'
          className={styles.input}
        />
        <div>
          <ul className={styles.list}>
            {list
              .filter((item) => item.includes(searchValue))
              .map((item) => (
                <li>{item}</li>
              ))}
          </ul>
        </div>
        <Modal.Actions onClose={() => setModalVisible(false)} type='alert' />
      </Modal>
      <h1>
        How to center modal window
        <br />
        showcase
      </h1>
      <div className='card'>
        <button onClick={() => setModalVisible(true)}>Open modal</button>
        <p>
          <a
            href='https://github.com/AgentosUA/kuna-modal-task'
            target='_blank'
            rel='noopener'>
            Github
          </a>
        </p>
      </div>
    </div>
  );
}

export { App };
