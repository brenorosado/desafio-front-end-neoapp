import { PaginationContainer } from "../styles/pagination";
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

const Pagination = ({ limit, total, offset, setOffset }) => {
    let currentPage = offset ? (offset / limit) + 1 : 1;

    return (
        <PaginationContainer>
            <button onClick={(e) => {
                (offset) ? setOffset(offset - limit) : setOffset(0);
                window.scrollTo(0, 0);
            }}><BsCaretLeftFill /></button>
            <span>{currentPage}</span>
            <button onClick={(e) => {
                    (offset >= (total - limit)) ? setOffset(total - limit) : setOffset(offset + limit);
                    window.scrollTo(0, 0);
            }}><BsCaretRightFill /></button>
        </PaginationContainer>
    );
};

export default Pagination;