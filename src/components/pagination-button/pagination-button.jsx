import styles from './pagination-button.module.css';

const PaginationButton = () => {
    return(
        <div className={styles.paginationButtonContainer}>
            <button>{'<<'}</button>
            <button>{'>>'}</button>
        </div>
    );
}

export default PaginationButton;